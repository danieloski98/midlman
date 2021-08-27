import { Select, Input, Modal, ModalOverlay, ModalContent, ModalBody, InputGroup, InputLeftElement, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { useQuery, useMutation } from 'react-query';
import LoadingModal from '../../../../Modals/LoadingModal'
import { url } from '../../../../../Utils/URL';
import useDetails from '../../../../../Hooks/useDetails';
import { Formik } from 'formik'
import * as yup from 'yup';
import { queryclient } from '../../../../../App';

const validationSchema = yup.object({
    name: yup.string().required('This field is required'),
    location: yup.string().required('This field is required'),
    amount: yup.number().required('The amount is required'),
})

interface IProps {
    isOpen: boolean;
    onClose: Function;
    values?: IFlatRate;
}

interface IFlatRate {
    _id: string;
    name: string;
    location: string;
    amount: number;
}

// query function
const query = async (token: string) => {
    const res = await fetch(`${url}/flatrate`, {
        headers: {
            authorization: `Bearer ${token}`
        },
    });
    const json = await res.json()

    if (!res.ok) {
        throw new Error("An Error");
    }
    return json;
}

const mutationFunction = async (token: string, details: IFlatRate) => {
    const res = await fetch(`${url}/flatrate/create`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(details)
    });
    const json = await res.json()

    // if (!res.ok) {
    //     throw new Error("An Error");
    // }
    return json;
}

const editMutation = async (token: string, details: IFlatRate, id: string) => {
    const res = await fetch(`${url}/flatrate/edit/${id}`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(details)
    });
    const json = await res.json()

    // if (!res.ok) {
    //     throw new Error("An Error");
    // }
    return json;
}


const LocationModal: React.FC<IProps> = ({isOpen, onClose}) => {
    const {token} = useDetails();
    const mutation = useMutation((data: any) => mutationFunction(data.token, data.details))
    const [loading, setLoading] = React.useState(false);

    const add = async (isValid: boolean, details: any) => {
        if (!isValid) {
            alert('Please filling the form properly');
            return;
        }

        setLoading(true);
        mutation.mutateAsync({token, details }, {
            onError: (error) => {
                console.log(error);
                alert('An error Occured');
                setLoading(false);
            },
            onSuccess: (data) => {
                console.log(data);
                alert(data.message);
                setLoading(false);
                onClose();
                queryclient.invalidateQueries();
            }
        })
    }
    return (
        <Modal isOpen={isOpen} isCentered={true} onClose={() => onClose()}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    
                     <Formik
                        validationSchema={validationSchema}
                        initialValues={{ amount: 0, name: '', location: ''}}
                        onSubmit={() => {}}
                        children={({ values, touched, errors, handleBlur, handleChange, isValid }) => (
                            <div className=""> 
                            <div style={{width:'400px'}}  className='rounded-lg bg-white p-8' >
                                <p className='font-Poppins-Semibold text-lg mt-8 mb-4'>Add New Flat Rate</p>
                                <div className='w-full py-2' > 
                                    <p className='font-Poppins-Medium text-xs mb-2'>Name of Location</p>
                                    <Input fontSize='xs' name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                                    { touched.name && errors.name && <p className="text-sm text-red-400 mt-3">{errors.name}</p> }
                                </div>
                                <div className='w-full py-2' > 
                                    <p className='font-Poppins-Medium text-xs mb-2'>Location</p>
                                    <Input fontSize='xs' name="location" onChange={handleChange} onBlur={handleBlur} value={values.location} />
                                    { touched.location && errors.location && <p className="text-sm text-red-400 mt-3">{errors.location}</p> }
                                </div>
                                <div className='w-full py-2' > 
                                    <p className='font-Poppins-Medium text-xs mb-2'>Amount</p>
                                    <Input fontSize='xs' type="number" name="amount" onChange={handleChange} onBlur={handleBlur} value={values.amount} />
                                    { touched.amount && errors.amount && <p className="text-sm text-red-400 mt-3">{errors.amount}</p> }
                                </div>
                                <div className='w-full mt-6' >
                                    <button onClick={() => add(isValid, values)} className='py-3 rounded-md mb-4 text-xs px-12 w-full bg-midlman_color text-white font-Poppins-Semibold' >
                                        {loading && <Spinner color="white" />}
                                        {!loading && <span>ADD</span>}
                                    </button>
                                </div>
                            </div>
                        </div>
                        )}
                     />
                        
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

const EditModal: React.FC<IProps> = ({isOpen, onClose, values: vals}) => {
    const {token} = useDetails();
    const mutation = useMutation((data: any) => editMutation(data.token, data.details, data.id))
    const [loading, setLoading] = React.useState(false);

    const edit = async (isValid: boolean, details: any, id: string) => {
        if (!isValid) {
            alert('Please filling the form properly');
            return;
        }

        setLoading(true);
        mutation.mutateAsync({token, details, id }, {
            onError: (error) => {
                console.log(error);
                alert('An error Occured');
                setLoading(false);
            },
            onSuccess: (data) => {
                console.log(data);
                alert(data.message);
                setLoading(false);
                onClose();
                queryclient.invalidateQueries();
            }
        })
    }
    return (
        <Modal isOpen={isOpen} isCentered={true} onClose={() => onClose()}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>

                        <Formik
                        validationSchema={validationSchema}
                        initialValues={{ amount: vals?.amount, name: vals?.name, location: vals?.location }}
                        onSubmit={() => {}}
                        children={({ values, touched, errors, handleBlur, handleChange, isValid }) => (
                            <div className=""> 
                            <div style={{width:'400px'}}  className='rounded-lg bg-white p-8' >
                                <p className='font-Poppins-Semibold text-lg mt-8 mb-4'>Edit FlatRate</p>
                                <div className='w-full py-2' > 
                                    <p className='font-Poppins-Medium text-xs mb-2'>Name of Location</p>
                                    <Input fontSize='xs' name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                                    { touched.name && errors.name && <p className="text-sm text-red-400 mt-3">{errors.name}</p> }
                                </div>
                                <div className='w-full py-2' > 
                                    <p className='font-Poppins-Medium text-xs mb-2'>Location</p>
                                    <Input fontSize='xs' name="location" onChange={handleChange} onBlur={handleBlur} value={values.location} />
                                    { touched.location && errors.location && <p className="text-sm text-red-400 mt-3">{errors.location}</p> }
                                </div>
                                <div className='w-full py-2' > 
                                    <p className='font-Poppins-Medium text-xs mb-2'>Amount</p>
                                    <Input fontSize='xs' type="number" name="amount" onChange={handleChange} onBlur={handleBlur} value={values.amount} />
                                    { touched.amount && errors.amount && <p className="text-sm text-red-400 mt-3">{errors.amount}</p> }
                                </div>
                                <div className='w-full mt-6' >
                                    <button onClick={() => edit(isValid, values, vals?._id as string)} className='py-3 rounded-md mb-4 text-xs px-12 w-full bg-midlman_color text-white font-Poppins-Semibold' >
                                    {loading && <Spinner color="white" />}
                                        {!loading && <span>Edit Flat Rate</span>}
                                    </button>
                                </div>
                            </div>
                        </div>
                        )}
                     />
                        
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default function FlatRate() {
    const {token} = useDetails();
    const [openLocModal, setLocModal] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [data, setData] = React.useState([] as Array<IFlatRate>);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [active, setActive] = React.useState({} as IFlatRate);
    const { refetch } = useQuery(['flatrate', token], () => query(token), {
        onError: (error) => {
            console.log(error);
            setLoading(false);
            setError(true);
        },
        onSuccess: (data) => {
            console.log(data)
            setData([...data.response]);
            setLoading(false);
            setError(false);
        },
    })

    const history = useHistory()

    const close = () => {
        setLocModal(false);
    }

    const retry = async () => {
        setLoading(true);
        setError(false);
        await refetch();
    }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <LoadingModal open={loading} onClose={() => setLoading(false)} text="Loading Flat Rates" />
            <LocationModal isOpen={openLocModal} onClose={close} />
            <EditModal isOpen={editOpen} onClose={() => setEditOpen(false)} values={active} />
            <p className='font-Poppins-Semibold text-lg' >Flat Rate</p>
            <div className='w-full flex relative flex-row items-center justify-between py-8' > 
                <div className="flex">
                    <div className='w-24 flex items-center mr-4' >  
                        <Select fontSize='xs' color='#828282' placeholder='Sort By' />
                    </div>
                    <div className='w-48 flex items-center' > 
                        <InputGroup>
                        <InputLeftElement children={<FiSearch size={20} color="grey" />} />
                            <Input fontSize='xs' paddingLeft='10'  placeholder='Search ...' />
                        </InputGroup>
                        
                    </div> 
                </div>

                <button onClick={() => setLocModal(true)} className="w-40 h-10 rounded shadow bg-midlman_color text-white text-xs">Add New Flat Rate</button>

            </div>
            {
                !loading && error && (
                    <div className="w-full flex flex-col items-center mt-6">
                        <img src="/images/error.svg" alt="" className="w-56 h-56" />
                        <p>An Error Occured</p>
                        <button onClick={retry} className="text-white w-56 h-10 rounded bg-midlman_color mt-4">Retry</button>
                    </div>
                )
            }
            {
                !loading && !error && (
                    <div className='w-auto my-14' >
                <table className=' w-auto text-sm '>
                    <thead>
                        <tr className='font-Poppins-Semibold' >
                            <th className='bg-white'>ID</th>
                            <th className='bg-white'>Location</th>
                            <th className='bg-white'>Name</th>
                            <th className='bg-white'>Price</th> 
                            <th className='bg-white'>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td>{item.location}</td>
                                    <td>{item.name}</td>
                                    <td>{item.amount}</td> 
                                    <td> 
                                        <div className=' w-full h-full flex flex-row items-center' >
                                            <div className='flex flex-row cursor-pointer'onClick={()=> {setActive(item); setEditOpen(true) }} >
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
                                            <p className='ml-1' style={{color:'#EB5757'}} >Delete</p>
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
                !loading && !error && (
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
