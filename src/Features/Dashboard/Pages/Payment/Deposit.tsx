import React from 'react'
import {Select, InputGroup, InputLeftElement, Input} from '@chakra-ui/react'
import { FiSearch, FiTrash } from 'react-icons/fi'
import { useQuery } from 'react-query'
import { url } from '../../../../Utils/URL'
import LoadingModal from '../../../Modals/LoadingModal'

interface IDeposits {
    status: string;
    _id: string;
    user: string;
    depositor: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
}

// get deposits
const getDeposits = async() => {
    const request = await fetch(`${url}/transfer`);
    const json = await request.json()

    if (!request.ok) {
        throw new Error("An error Occured")
    } else {
        return json;
    }
}

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
            return '#F2994A'
        }
        case 'Successful': {
            return '#00A69C'
        }
        case 'Failed': {
            return '#94316D'
        }
    }
}

export default function Deposit() {
    const [status, setStatus] = React.useState('Pending');
    const [loading, setLoading] = React.useState(true);
    const [deposits, setDeposits] = React.useState([] as IDeposits[])
    const [text, setText] = React.useState('Loading Deposits...')

    // query
    const { refetch } = useQuery('getTransfers', getDeposits, {
        onSuccess: (data) => {
            console.log(data)
            setDeposits(data.response)
            setLoading(false);
            setText("")
        },
        onError: (error) => {
            console.log(error)
            setLoading(false);
            setText('')
        }
    });

    const changeStatus = async(index: number, status: string) => {
        setLoading(true);
        setText("Updating deposit...");
        const request = await fetch(`${url}/transfer/edit/${deposits[index]._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status, depositor: deposits[index].depositor, amount: deposits[index].amount })
        })
        const json = await request.json();
        setLoading(false);
        setText("")

        if (!request.ok) {
            alert(json.message);
        }else {
            alert(json.message);
            await refetch()
        }
        
    }

    return (
        <div className="w-full px-8 h-auto flex flex-col">
            <LoadingModal open={loading} onClose={() => setLoading(false)} text="Loading Deposits..." />
            <h3 className="text-xl font-Poppins-Medium mt-6">Deposit History</h3>

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
                                <p className="w-56 text-sm font-Poppins-Medium">user ID</p>
                            </th>
                            <th className="bg-white">
                                <p className="w-56">Depositor</p>
                            </th>
                            <th className="bg-white">
                                <p className="w-56">Amount</p>
                            </th>
                            <th className="bg-white"> 
                                <p className="w-56">Date & Time</p>
                            </th>
                            {/* <th className="bg-white">
                                <p className="w-56">Account Number</p>
                            </th> */}
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
                            deposits.map((item, index) => (
                                <tr key={index.toString()} className="font-Poppins-Medium text-xs">
                                    <td>{item._id}</td>
                                    <td>{item.user}</td>
                                    <td>{item.depositor}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.createdAt}</td>
                                    {/* <td>{item.account_number}</td> */}
                                    <td>
                                        <Select value={item.status} onChange={(e) => { changeStatus(index, e.target.value)}} color={color(item.status)} size="xs" width="full">
                                            <option value="Pending">Pending</option>
                                            <option value="Successful">Successful</option>
                                            <option value="Failed">Failed</option>
                                        </Select>
                                    </td>
                                    <td>
                                        <p className="text-red-300 text-xs font-Poppins-Bold flex items-center">
                                            <FiTrash size={20} />
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
