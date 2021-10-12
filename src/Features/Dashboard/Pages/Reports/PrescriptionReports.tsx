import React from 'react'; 
import { Select, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import PrescriptionModal from './Modals/PrescriptionModal';
import { useQuery } from 'react-query';
import { url } from '../../../../Utils/URL';
import { IPrescription } from '../../../../Types/Prescription';
import LoadingModal from '../../../Modals/LoadingModal';
import PrescriptionModal2 from './Modals/PrescriptionModal2';

const getPrescription = async () => {
    try {
        const request = await fetch(`${url}/order/prescrptions`);
        const json = await request.json();

        if (!request.ok) {
            throw new Error("An Error Occured");
        } else {
            return json;
        }
    } catch (error) {
        throw new Error("An error Occured");
    }
}

export default function PrescriptionReports() { 
    const [openModal, setOpenModal] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [prescription, setPrescription] = React.useState({
        _id: '',
        products: [],
        reason: '',
        status: '',
        user: ''
    } as IPrescription);
    const [modal, setModal] = React.useState(false);
    const [reports, setReports] = React.useState([] as Array<IPrescription>);


    // react query
    const {} = useQuery('getPrescriptions', getPrescription, {
        onSuccess: (values: {response: Array<IPrescription>}) => {
            console.log(values);
            setReports(values.response);
            setLoading(false);
        },
        onError: (error) => {
            console.log(error);
            setError(true);
            setLoading(false);
        }
    });

    const history = useHistory();

    const close = () => {
        setOpenModal(false);
    }

    const openPres = (item: IPrescription) => {
        setPrescription(item);
        setModal(true);
    }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  

            {/* modal */}
            <PrescriptionModal open={openModal} close={close} />
            <PrescriptionModal2 open={modal} close ={() => setModal(false)} prescription={prescription} />
            <LoadingModal text="Loading Prescritions" onClose={() => setLoading(false)} open={loading} />
            <p className='font-Poppins-Semibold text-lg' >Prescription Reports</p>
            <div className='w-full flex relative flex-row items-center justify-between py-8' > 
                <div className="w-auto flex flex-1">
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
                <button onClick={() => setOpenModal(true)} className="w-32 h-10 rounded bg-midlman_color text-xs text-white">Add Prescription</button>
            </div>
            <div className='w-auto my-14 overflow-x-auto' style={{ height: 'auto'}} >
                <table className='text-sm '>
                    <thead>
                        <tr className='font-Poppins-Semibold' >
                            <th className='bg-white'>
                                <p className="w-24">S/N</p>
                            </th>
                            <th className='bg-white'>
                                <p className="w-24">User ID</p>
                            </th>
                            <th className='bg-white'>
                                <p className="w-32">Products</p>
                            </th>
                            <th className='bg-white'>
                                <p className="w-32">Reason</p>
                            </th> 
                            <th className='bg-white'>
                                <p className="w-32">Status</p>
                            </th> 
                            <th className='bg-white'>
                                <p className="w-32">Action</p>
                            </th> 
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td className='font-Poppins-Semibold'>{item.user}</td>
                                    <td className="h-20 overflow-y-auto">{item.products.map((p, index) => <span key={index.toString()}>{p.productName}</span>)}</td>
                                    <td>{item.reason}</td>
                                    <td>{item.status}</td>
                                    {/* <td>{item.admintype}</td> */}
                                    {/* <td>
                                        <div className='w-full flex justify-center items-center font-Poppins-Medium text-midlman_color cursor-pointer' >
                                            <p>View Image</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="w-full h-32 overflow-y-auto">{item.information}</p>
                                    </td>
                                    <td>
                                        <Select size="xs">
                                            <option>Pending</option>
                                            <option>Accept</option>
                                            <option>Decline</option>
                                            <option>Delete</option>
                                        </Select>
                                    </td> */}
                                    <td> 
                                        <p onClick={() => openPres(item)} className="text-center text-midlman_color cursor-pointer">Send Request</p>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
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
