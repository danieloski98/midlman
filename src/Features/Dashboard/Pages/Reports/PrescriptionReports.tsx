import React from 'react'; 
import { Select, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import PrescriptionModal from './Modals/PrescriptionModal';

export default function PrescriptionReports() { 
    const [openModal, setOpenModal] = React.useState(false);

    const history = useHistory();

    const data = [
        { 
            name: 'Ernest Chris',
            email: 'ernest@mail.com',
            contact: '08123456789',
            admintype: 'Bottle',
            information: 'this will have a long scrollable list of message text this will have a long scrollable list of message text this will have a long scrollable list of message text this will have a long scrollable list of message text this will have a long scrollable list of message text this will have a long scrollable list of message text this will have a long scrollable list of message text this will have a long scrollable list of message text this will have a long scrollable list of message text this will have a long scrollable list of message text this will have a long scrollable list of message text this will have a long scrollable list of message text', 
        },
        { 
            name: 'Ernest Chris',
            email: 'ernest@mail.com',
            contact: '08123456789',
            admintype: 'Bottle',
            information: 'this will have a long scrollable list of message text', 
        },
        { 
            name: 'Ernest Chris',
            email: 'ernest@mail.com',
            contact: '08123456789',
            admintype: 'Bottle',
            information: 'this will have a long scrollable list of message text', 
        },
        { 
            name: 'Ernest Chris',
            email: 'ernest@mail.com',
            contact: '08123456789',
            admintype: 'Bottle',
            information: 'this will have a long scrollable list of message text', 
        },
    ]

    const close = () => {
        setOpenModal(false);
    }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  

            {/* modal */}
            <PrescriptionModal open={openModal} close={close} />
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
                                <p className="w-24">ID</p>
                            </th>
                            <th className='bg-white'>
                                <p className="w-32">Name</p>
                            </th>
                            <th className='bg-white'>
                                <p className="w-32">Email Address</p>
                            </th>
                            <th className='bg-white'>
                                <p className="w-32">Phone Number</p>
                            </th>
                            <th className='bg-white'>
                                <p className="w-32">Admin Type</p>
                            </th>
                            <th className='bg-white'>
                                <p className="w-56">Prescription Image</p>
                            </th> 
                            <th className='bg-white'>
                                <p className="w-64">Additional Info</p>
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
                        {data.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.admintype}</td>
                                    <td>
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
                                    </td>
                                    <td> 
                                        <p onClick={() => history.push('/dashboard/prescriptionrequest')} className="text-center text-midlman_color cursor-pointer">Send Request</p>
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
