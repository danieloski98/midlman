import { Select, Input } from '@chakra-ui/react';
import React from 'react'; 
import DeclinedModal from '../../../Modals/DeclinedModal';
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

export default function BankPayment() {
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
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
             {/* modal */}
             <LoadingModal open={loading} onClose={() => setLoading(false)} text="Loading Bank Payment..." />
{/* 
             <DeclinedModal isOpen={showModal} onClose={closeDeclineModal} /> */}

            {/* end of modal  */}

            <p className='font-Poppins-Semibold text-lg' >Bank Payments</p>
            <div className='w-full flex relative flex-row items-center py-8' > 
                <div className='w-24 flex items-center mr-4' >  
                    <Select fontSize='xs' color='#828282' placeholder='Sort By' />
                </div>
                <div className='w-48 flex items-center' > 
                    <div className=' absolute ml-4' >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#BDBDBD"/>
                        </svg>
                    </div>
                    <Input fontSize='xs' paddingLeft='10'  placeholder='Search ...' />
                </div> 
            </div>


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

