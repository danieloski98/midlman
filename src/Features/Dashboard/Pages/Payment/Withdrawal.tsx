import React from 'react'
import {Select, InputGroup, InputLeftElement, Input} from '@chakra-ui/react'
import { FiSearch, FiTrash } from 'react-icons/fi'
import DeclinedModal from '../../../Modals/DeclinedModal';

const data = [
    {
        transaction_id: 'dasdasdsda',
        portalAccount: 'earnest',
        amount: 4000,
        date: new Date().toISOString(),
        account_number: '23039390202',
        status: 'pending',

    },
    {
        transaction_id: 'dasdasdsda',
        portalAccount: 'earnest',
        amount: 4000,
        date: new Date().toISOString(),
        account_number: '23039390202',
        status: 'pending',
        
    }
    , {
        transaction_id: 'dasdasdsda',
        portalAccount: 'earnest',
        amount: 4000,
        date: new Date().toISOString(),
        account_number: '23039390202',
        status: 'pending',
        
    }
    , {
        transaction_id: 'dasdasdsda',
        portalAccount: 'earnest',
        amount: 4000,
        date: new Date().toISOString(),
        account_number: '23039390202',
        status: 'pending',
        
    }
];

const color = (value: string) => {
    switch(value) {
        case 'Pending': {
            return 'yellow'
        }
        case 'Approved': {
            return 'Green'
        }
        case 'Declined': {
            return 'red'
        }
    }
}

export default function Withdrawal() {
    const [status, setStatus] = React.useState('Pending');
    const [showModal, setShowModal] = React.useState(false);

    // effects
    React.useEffect(() => {
        if(status === 'Declined') {
            setShowModal(true)
        }
    }, [status]);


    // functions

    const closeDeclineModal = () => {
        setShowModal(false);
    }

    return (
        <div className="w-full px-8 h-auto flex flex-col">
            {/* modal */}

            <DeclinedModal isOpen={showModal} onClose={closeDeclineModal} />

            {/* end of modal  */}

            <h3 className="text-xl font-Poppins-Medium">Withdrawal History</h3>

            {/* header */}

            <div className="w-full flex justify-between mt-8">
                <div className="flex">
                    <div className="w-40">
                        <Select fontSize="xs" width={130} placeholder="Sort By" className="text-xs border-1 border-gray-400">
                            <option value="transaction id">Transaction ID</option>
                            <option value="Date">Date</option>
                        </Select>
                    </div>

                    <InputGroup width={190} className="border-1 border-gray-400 rounded ml-2" >
                        <InputLeftElement children={<FiSearch size={20} color="grey" />} />
                        <Input type="text" placeholder="Search"  fontSize="xs" />
                    </InputGroup>
                </div>
                <div>
                    <button className=" bg-midlman_color w-24 h-10 text-sm rounded text-white font-Poppins-Medium">Print</button>
                </div>
            </div>

            {/* end of header */}

            {/* table */}

            <div className="w-full mt-20 overflow-x-auto" style={{ height: 250 }}>
                <table>
                    <thead>
                        <tr className="font-Poppins-Medium text-xs">
                            <th className="bg-white">
                                <p className="w-56 text-sm font-Poppins-Medium">Transaction ID</p>
                            </th>
                            <th className="bg-white">
                                <p className="w-56">Portal Account</p>
                            </th>
                            <th className="bg-white">
                                <p className="w-56">Amount</p>
                            </th>
                            <th className="bg-white"> 
                                <p className="w-56">Date & Time</p>
                            </th>
                            <th className="bg-white">
                                <p className="w-56">Account Number</p>
                            </th>
                            <th className="bg-white">
                                <p className="w-56">Status</p>
                            </th>
                            <th className="bg-white">
                                <p className="w-56">Action</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index.toString()} className="font-Poppins-Medium text-xs">
                                    <td>{item.transaction_id}</td>
                                    <td>{item.portalAccount}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.date}</td>
                                    <td>{item.account_number}</td>
                                    <td>
                                        <Select value={status} onChange={(e) => setStatus(e.target.value)} color={color(status)} size="xs" width="full">
                                            <option value="Pending">Pending</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Declined">Declined</option>
                                        </Select>
                                    </td>
                                    <td>
                                        <p className="text-red-500 text-xs font-Poppins-Bold flex items-center">
                                            <FiTrash size={20} color="red" />
                                            <span className="ml-2">Delete</span>
                                        </p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* end of tabel */}


            {/* pagination */}

            <div className='w-full flex flex-row items-center pb-12 mt-8'>
                <p className='font-Poppins-Regular text-xs' >Showing 1-10 of 30 items</p>
                <div className='w-full flex flex-1' />
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ' >1</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >2</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >3</div>
            </div> 

            {/* end of pagination */}


        </div>
    )
}
