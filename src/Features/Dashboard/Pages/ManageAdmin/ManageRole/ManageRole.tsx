import { Select, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';  
import { useHistory } from 'react-router';
import { useQuery } from 'react-query'
import useDetails from '../../../../../Hooks/useDetails'
import { IRole } from '../../../../../Types/Role'
import { url } from '../../../../../Utils/URL'
import LoadingModal from '../../../../Modals/LoadingModal';
import { FiSearch, FiX   } from 'react-icons/fi'

// get roles function
const getRole = async(token: string) => {
    const request = await fetch(`${url}/role`, {
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
     const json = await request.json();

     if (!request.ok) {
         throw new Error("An error occured")
     } else {
         return json;
     }
}
 
export default function ManageOrder() { 
    const { token } = useDetails();
    const [ roles, setRoles] = React.useState([] as IRole[]);
    const [loading, setLoading] = React.useState(true);
    const [text, setText] = React.useState("Loading Roles");
    const [error, setError] = React.useState(false);
    const [role, setRole] = React.useState("");
    const [currentRole, setCurrentRole] = React.useState("");
    const [id, setID]= React.useState("");
    const [edit, setEdit] = React.useState(false);

    // getroles query
    const { refetch } = useQuery(['getRoles', token], () => getRole(token), {
        onSuccess: (data) => {
            setRoles(data.response);
            setLoading(false);
            setText("");
            setError(false)
        },
        onError: (data) => {
            setLoading(false);
            setError(true);
        }
    })

    const [showModal, setShowModal] = React.useState(false);
    const history = useHistory();

    const createRole = async() => {
        if (role === "") {
            alert('Please type in a valid name');
            return;
        }
            setText("Creating Role...")
            setLoading(true);
        const request = await fetch(`${url}/role/create`, {
            method: 'post',
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name: role })
        });

        const json = await request.json();
        setText("")
        setLoading(false);
        if (!request.ok) {
            alert(json.message);
            return;
        } else {
            alert("Role Created");
            setRole("");
            setShowModal(false);
            return;
        }
    }

     const deleteRole = async(id: string) => {
            setText("Deleting Role...")
            setLoading(true);
        const request = await fetch(`${url}/role/delete/${id}`, {
            method: 'delete',
            headers: {
                authorization: `Bearer ${token}`,
            }
        });

        const json = await request.json();
        setText("")
        setLoading(false);
        if (!request.ok) {
            alert(json.message);
            return;
        } else {
            alert("Role Created");
            setShowModal(false);
            return;
        }
    }

    const editRole = async() => {
        setText("Updating Role...")
        setLoading(true);
    const request = await fetch(`${url}/role/update/${id}`, {
        method: 'put',
        headers: {
            authorization: `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name: currentRole })
    });

    const json = await request.json();
    setText("")
    setLoading(false);
    if (!request.ok) {
        alert(json.message);
        return;
    } else {
        alert("Role Updated");
        setEdit(false);
        return;
    }
}
  

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <LoadingModal open={loading} onClose={() => setLoading(false)} text={text}  />
            <p className='font-Poppins-Semibold text-lg' >Manage Roles</p>
            <div className='w-full flex relative flex-row items-center py-8' > 
                <div className='w-24 flex items-center mr-4' >  
                    <Select fontSize='xs' color='#828282' placeholder='Sort By' />
                </div>
               <div className="w-64">
               <InputGroup className='w-48 flex items-center' > 
                    <InputLeftElement children={<FiSearch size={20} color="grey" />} />
                    <Input fontSize='xs' paddingLeft='10'  placeholder='Search ...' />
                </InputGroup>
               </div>
                <div className='w-full flex flex-1' />
                <button onClick={()=> setShowModal(true)}  className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' >
                    <svg className='mr-2' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="white"/>
                    </svg> Add New Role
                </button>
            </div>
            {
                !loading && error && (
                    <div className="w-full flex flex-col justify-center items-center">
                        <img src="/images/error.svg" alt="" className="w-32 h-32" />
                        <p className="mt-3">An Error Occured</p>
                    </div>
                )
            }
            {
                !loading && roles.length > 0 && (
                    <div className='w-auto my-14' >
                        <table className='text-sm '>
                            <thead>
                                <tr className='font-Poppins-Semibold' >
                                    <th className='bg-white'>S/N</th>
                                    <th className='bg-white'>Admin Type</th>
                                    <th className='bg-white'>Date Modified</th>
                                    <th className='bg-white'>Status</th> 
                                    <th className='bg-white'>Action</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((item, index) => {
                                    return(
                                        <tr key={index} className='font-Poppins-Regular' >
                                            <td className='font-Poppins-Semibold'>{index+1}</td>
                                            <td>{item.name}</td>
                                            <td>{new Date(item.updatedAt).toDateString()}</td>
                                            
                                            <td>{item.status ? 'Active':'Inactive'}</td>
                                            <td> 
                                                <div className=' w-full h-full flex flex-row items-center' >
                                                    <div onClick={() => {setCurrentRole(item.name); setID(item._id); setEdit(true)}}   className='cursor-pointer flex flex-row' >
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
                                                    <p onClick={() => deleteRole(item._id)} className='ml-1 cursor-pointer' style={{color:'#EB5757'}} >Delete</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                            })}
                            </tbody>
                        </table>
                    </div>
                )
            }
            {
                !loading && roles.length > 0 && (
                    <div className='w-full flex flex-row items-center pb-12'>
                        <p className='font-Poppins-Regular text-xs' >Showing 1-10 of 30 items</p>
                        <div className='w-full flex flex-1' />
                        <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ' >1</div>
                        <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >2</div>
                        <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >3</div>
                    </div> 
                )
            }
            {showModal ? (
                    <>
                        <div className="justify-center items-center overflow-x-hidden flex overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none"> 
                            <div className='w-100 rounded-lg bg-white p-8' >
                                <div className="w-full flex justify-end">
                                    <FiX size={25} color="red" onClick={()=> setShowModal(false)} title="close modal" className="cursor-pointer" />
                                </div>
                                <p className='font-Poppins-Semibold text-lg mt-8'>Add New Role</p>
                                <div className='w-full py-8' >
                                    <p className='font-Poppins-Semibold text-xs mb-1'>ADMIN TYPE</p>
                                    <Input fontSize='xs' value={role} onChange={(e) => setRole(e.target.value)} />
                                </div>
                                <div className='w-full flex justify-center' >
                                    <button onClick={createRole}  className='py-3 rounded-md mb-4 text-xs px-8 bg-midlman_color text-white font-Poppins-Semibold' >ADD</button>
                                </div>
                            </div>
                            </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null} 
                {edit ? (
                    <>
                        <div className="justify-center items-center overflow-x-hidden flex overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none"> 
                            <div className='w-100 rounded-lg bg-white p-8' >
                                <div className="w-full flex justify-end">
                                    <FiX size={25} color="red" onClick={()=> setShowModal(false)} title="close modal" className="cursor-pointer" />
                                </div>
                                <p className='font-Poppins-Semibold text-lg mt-8'>Edit Role</p>
                                <div className='w-full py-8' >
                                    <p className='font-Poppins-Semibold text-xs mb-1'>ADMIN TYPE</p>
                                    <Input fontSize='xs' value={currentRole} onChange={(e) => setCurrentRole(e.target.value)} />
                                </div>
                                <div className='w-full flex justify-center' >
                                    <button onClick={editRole}  className='py-3 rounded-md mb-4 text-xs px-8 bg-midlman_color text-white font-Poppins-Semibold' >Update</button>
                                </div>
                            </div>
                            </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null} 
        </div>
    )
} 

