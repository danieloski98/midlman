import { Select, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { url } from '../../../../../Utils/URL'
import LoadingModal from '../../../../Modals/LoadingModal'
import { FiSearch } from 'react-icons/fi'
import { ICategories } from '../../../../../Types/Categories'
import { queryclient } from '../../../../../App'

// query function
const getCat = async () => {
    const request = await fetch(`${url}/category`);
    const json = await request.json()

    if (!request.ok) {
        throw new Error("Couldn't get the catergories, please try again")
    }

    return json;
}

// delete category
const deleteCat = async (id: string) => {
    const request = await fetch(`${url}/category/${id}`, {
        method: 'delete'
    });
    const json = await request.json();

    if (!request.ok) {
        throw new Error(`Couldn't delete category with id ${id}`);
    }

    return json;
}

export default function Catergories() {
    const history = useHistory()

    const { refetch } = useQuery('categories', getCat, {
        onSuccess: (data) => {
            setShowModal(false);
            setText('');
            // alert(JSON.stringify(data));
            setCategories(data.response);
            queryclient.invalidateQueries();
        },
        onError: (error) => {
            setShowModal(false);
            setText('');
            setError(true);
            alert(JSON.stringify(error));
        }
    });

    // mutuation

    const mutation = useMutation((id: string) => deleteCat(id), {
        onSuccess: (data) => {
            setShowModal(false);
            setText('');
            alert('Category removed')
        },
        onError: (error) => {
            setShowModal(false);
            setText('');
            alert('Error while deleting category')
        }
    })

    // states
    const [showModal, setShowModal] = React.useState(true);
    const [text, setText] = React.useState('Loading Categories');
    const [error, setError] = React.useState(false);
    const [errorText, seterrorText] = React.useState('');
    const [categories, setCategories] = React.useState([] as Array<ICategories>);

    // functions
    const retry = async () => {
        setText('Loading Categories...')
        setShowModal(true);
        const {} = await refetch();
        setShowModal(false);
    }

    const deleteCategory = async (id: string) => {
        setText(`deleting Category with id ${id}`)
        setShowModal(true);
        mutation.mutate(id);
    }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <LoadingModal text={text} open={showModal} onClose={() => setShowModal(false)} />
            <p className='font-Poppins-Semibold text-lg' >Categories</p>
            <div className='w-full flex relative flex-row items-center py-8' > 
                <div className='w-24 flex items-center mr-4' >  
                    <Select fontSize='xs' color='#828282' placeholder='Sort By' />
                </div>
                <div className='w-48 flex items-center' > 
                    
                    <InputGroup>
                        <InputLeftElement children={<FiSearch size={20} color="grey" />} />
                        <Input fontSize='xs' paddingLeft='10'  placeholder='Search ...' />
                    </InputGroup>
                </div>
                <div className='w-full flex flex-1' />
                <button onClick={()=> history.push('/dashboard/newcategory')}  className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' >
                    <svg className='mr-2' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="white"/>
                    </svg> Add New Category
                </button>
            </div>
            <div className='w-auto mb-6' >
              {
                  showModal ? <div></div>:

                  <div className="w-full">
                      {
                          error ?
                          <div className="w-full flex flex-col justify-start items-center">
                              <img src="/images/error.svg" alt="" className="w-56 h-56" />
                              <p className="text-md font-Poppins-Medium text-gray-600 mt-5"> An Error Occoured</p>
                              <button onClick={retry} className="w-56 h-10 rounded shadow text-white bg-midlman_color mt-6">Retry</button>
                          </div>
                          :
                          (

                            <table className='text-sm '>
                            <thead>
                                <tr className='font-Poppins-Semibold' >
                                    <th className='bg-white'>ID</th>
                                    <th className='bg-white'>Name</th>
                                    <th className='bg-white'>Cover Image</th>
                                    <th className='bg-white'>Icon</th>
                                    <th className='bg-white'>Added/Last Modified</th> 
                                    <th className='bg-white'>Status</th> 
                                    <th className='bg-white'>Action</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((item, index) => {
                                    return(
                                        <tr key={index} className='font-Poppins-Regular' >
                                            <td className='font-Poppins-Semibold'>{index+1}</td>
                                            <td>{item.name}</td> 
                                            <td >
                                                <div className='w-full cursor-pointer flex justify-center text-midlman_color text-Poppins-Medium'>
                                                    View Image
                                                </div>
                                            </td>
                                            <td >
                                                <div className='w-full cursor-pointer  flex justify-center text-midlman_color text-Poppins-Medium'>
                                                    View Icon
                                                </div>
                                            </td>
                                            <td>{new Date(item.updatedAt).toUTCString()}</td>
                                            <td>Active</td>
                                            <td> 
                                                <div className=' w-full h-full flex flex-row items-center' >
                                                    <div onClick={()=> history.push(`/dashboard/editcategory/${item._id}`)} className='flex flex-row cursor-pointer' >
                                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.7071 0.707107L16.5355 3.53553C16.9261 3.92606 16.9261 4.55922 16.5355 4.94975L15.1213 6.36396L10.8787 2.12132L12.2929 0.707107C12.6834 0.316583 13.3166 0.316583 13.7071 0.707107ZM9.46447 3.53553L1.27208 11.7279L0.979185 16.2635L5.51472 15.9706L13.7071 7.77817L9.46447 3.53553Z" fill="#1B75BB"/>
                                                        </svg>
                                                        <p className='ml-1' style={{color:'#1B75BB'}} >Edit</p>
                                                    </div>
                                                    <div className='rounded-full w-4 ml-8 h-4 flex justify-center items-center' style={{backgroundColor:'#EB5757'}} >
                                                        <svg width="9" height="9" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.292893 0.292893C0.683417 -0.0976312 1.31658 -0.097631 1.70711 0.292893L4.03033 2.61612L6.35355 0.292893C6.74407 -0.097631 7.37724 -0.0976312 7.76776 0.292893C8.15829 0.683417 8.15829 1.31658 7.76776 1.70711L5.44454 4.03033L7.36396 5.94975C7.75449 6.34027 7.75449 6.97344 7.36396 7.36396C6.97344 7.75449 6.34027 7.75449 5.94975 7.36396L4.03033 5.44454L2.11091 7.36396C1.72039 7.75449 1.08722 7.75449 0.696697 7.36396C0.306172 6.97344 0.306172 6.34027 0.696697 5.94975L2.61612 4.03033L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="white"/>
                                                        </svg>
                                                    </div>
                                                    <p onClick={() => deleteCategory(item._id)} className='ml-1 cursor-pointer' style={{color:'#EB5757'}} >Delete</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                          )
                      }
                  </div>
              }
            </div>

            {
                showModal === false && error === false && (
                    <div className='w-full flex flex-row items-center pb-12'>
                        <p className='font-Poppins-Regular text-xs' >Showing 1-10 of 30 items</p>
                        <div className='w-full flex flex-1' />
                        <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ' >1</div>
                        <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >2</div>
                        <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >3</div>
                    </div>
                )
            }

        </div>
    )
}
