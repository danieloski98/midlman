import { Input, Select, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router'
import { useQuery, useMutation } from 'react-query'
import { url } from '../../../../../Utils/URL'
import LoadingModal from '../../../../Modals/LoadingModal'
import { FiSearch } from 'react-icons/fi'
import { ICategories } from '../../../../../Types/Categories'
import { queryclient } from '../../../../../App'
import { IProduct } from '../../../../../Types/Product'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { MenuContext, Value } from '../../../../../Context/MenuContext'

// query function
const getCat = async () => {
    const request = await fetch(`${url}/product`);
    const json = await request.json()
    console.log(json);

    if (!request.ok) {
        throw new Error("Couldn't get the catergories, please try again")
    }

    return json;
}

// delete category
const deleteproduct = async (id: string) => {
    const request = await fetch(`${url}/product/${id}`, {
        method: 'delete'
    });
    const json = await request.json();

    if (!request.ok) {
        throw new Error(`Couldn't delete category with id ${id}`);
    }

    return json;
}


export default function Product() {

    const history = useHistory()
    const menuContaxt: Value = React.useContext(MenuContext);

    const { refetch } = useQuery('categories', getCat, {
        onSuccess: (data) => {
            setShowModal(false);
            setText('');
            // alert(JSON.stringify(data));
            setProducts(data.response);
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

    const mutation = useMutation((id: string) => deleteproduct(id), {
        onSuccess: (data) => {
            setShowModal(false);
            setText('');
            alert('Product Deleted')
            queryclient.invalidateQueries();
        },
        onError: (error) => {
            setShowModal(false);
            setText('');
            alert('Error while deleting Product')
        }
    })



    // states
    const [showModal, setShowModal] = React.useState(true);
    const [text, setText] = React.useState('Loading Products');
    const [error, setError] = React.useState(false);
    const [errorText, seterrorText] = React.useState('');
    const [products, setProducts] = React.useState([] as Array<IProduct>);
    const [sort, setSort] = React.useState('name');
    const [search, setSearch] = React.useState('')

        // functions
        const retry = async () => {
            setText('Loading Products...')
            setShowModal(true);
            const {} = await refetch();
            setShowModal(false);
        }
    
        const deleteProduct = async (id: string) => {
            setText(`deleting Product with id ${id}`)
            setShowModal(true);
            mutation.mutate(id);
        }

        const print = () => {
            if (!menuContaxt.showModal) {
                window.print();
                return;
            } else {
                menuContaxt.setShowModal(false);
                setTimeout(() => {
                    window.print();
                }, 3000);
            }
        }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <LoadingModal text={text} open={showModal} onClose={() => setShowModal(false)} />
            <p className='font-Poppins-Semibold text-lg' >Product</p>
            <div className='w-full flex relative flex-row items-center py-8' > 
                <div className='w-40 flex items-center mr-4' >  
                <Select fontSize='xs' value={sort} onChange={(e) => setSort(e.target.value)} color='#828282' placeholder={`Sort By`} width="lg">
                    <option value="name">Sort By Name</option>
                    <option value="category">Sort By Category</option>
                </Select>
                </div>
                <div className='w-64 flex items-center' > 
                    <InputGroup>
                        <InputLeftElement children={<FiSearch size={20} color="grey" />} />
                        <Input fontSize='xs' paddingLeft='10' value={search} onChange={(e) => setSearch(e.target.value)}  placeholder='Search by name or category' width="sm" />
                    </InputGroup>
                </div>
                <div className='w-full flex flex-1' />
                <button onClick={print} className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' >Print</button>
                <button className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' >Import CSV</button>
                <button onClick={()=> history.push('/dashboard/uploadproduct')}  className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' >
                    <svg className='mr-2' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="white"/>
                    </svg> Upload Product
                </button>
            </div>
            <div className='w-auto h-auto overflow-x-scroll py-4' >

            <div className="w-auto mb-6">
                {
                    showModal ? <div></div>
                    :
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
                                
                                <table className='text-sm my-6'>
                                <thead>
                                    <tr className='font-Poppins-Semibold' >
                                        <th className='bg-white'>
                                            <p className="w-20">ID</p>
                                        </th>
                                        <th className='bg-white'>
                                            <p className="w-56">Product Name</p>
                                        </th>
                                        <th className='bg-white'>
                                            <p className="w-40">Category</p>
                                        </th>
                                        <th className='bg-white'>
                                            <p className="w-40">Formulation</p>
                                        </th>
                                        <th className='bg-white'>
                                            <p className="w-40">Image</p>
                                        </th>
                                        <th className='bg-white'>
                                            <p className="w-56">Package Type</p>
                                        </th>
                                        <th className='bg-white'>
                                            <p className="w-32">Price (Portal)</p>
                                        </th>
                                        <th className='bg-white'>
                                            <p className="w-32">Price (Express)</p>
                                        </th>
                                        <th className='bg-white'>
                                            <p className="w-20">Status</p>
                                        </th>
                                        <th className='bg-white'>
                                            <p className="w-64">Action</p></th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {products
                                    .sort((a, b): number => {
                                        if (sort === 'category') {
                                            let x = a.category.toLowerCase();
                                            let y = b.category.toLowerCase();
                                            if (x < y) { return -1}
                                            if (x > y) { return 1 }
                                        } else if (sort === 'name') {
                                            let x = a.name.toLowerCase();
                                            let y = b.name.toLowerCase();
                                            if (x < y) { return -1}
                                            if (x > y) { return 1 }
                                        }
                                        return 0;
                                      })
                                      .filter((val) => {
                                          if (search === '') {
                                              return val;
                                          } else if (val.name.toLowerCase().includes(search.toLowerCase()) || val.category.toLowerCase().includes(search.toLowerCase())) {
                                              return val;
                                          }
                                      })
                                    .map((item, index) => {
                                        return(
                                            <tr key={index} className='font-Poppins-Regular' >
                                                <td className='font-Poppins-Semibold'>{index+1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.category}</td>
                                                <td>{item.brand}</td>
                                                <td className='text-midlman_color font-Poppins-Medium text-center' >
                                                    <a href={item.image[0]} target="_blank" rel="noopener noreferrer">View Image</a>
                                                </td>
                                                <td>{item.description}</td>
                                                <td>2000</td>
                                                <td>4000</td>
                                                <td>Active</td>
                                                <td> 
                                                    <div className=' w-full h-full flex flex-row items-center' >
                                                        <div onClick={()=> history.push('/dashboard/editproduct')} className='cursor-pointer flex flex-row' >
                                                            <FiEdit color="#1B75BB" size={20} />
                                                            <p className='ml-1' style={{color:'#1B75BB'}} >Edit</p>
                                                        </div>
                                                        <div onClick={() => deleteProduct(item._id)} className=' w-auto ml-8 h-4 flex justify-center items-center cursor-pointer' >
                                                           <FiTrash2 color="#EB5757" size={20} />
                                                           <p className='ml-1' style={{color:'#EB5757'}} >Delete</p>
                                                        </div>
                                                        
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

            </div>
            <div className='w-full flex flex-row items-center pb-12'>
                <p className='font-Poppins-Regular text-xs' >Showing 1-10 of 30 items</p>
                <div className='w-full flex flex-1' />
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ' >1</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >2</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >3</div>
            </div>
        </div>
    )
}
