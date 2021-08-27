import { Select, Input } from '@chakra-ui/react';
import React from 'react'; 
import DeclinedModal from '../../../Modals/DeclinedModal';

export default function BankPayment() {
    const [showModal, setShowModal] = React.useState(false);

    const [data, setData] = React.useState([
        { 
            bussinessname: 'Ernest Chris',
            amountpaid: 'Carton',
            paymentdate: '4',
            depositorsname: 'Ernest Chris', 
            paymentreciept: 'View Logo',
            status: 'Pending', 
            time: '2:00pm'
        },
        { 
            bussinessname: 'Ernest Chris',
            amountpaid: 'Carton',
            paymentdate: '4',
            depositorsname: 'Ernest Chris', 
            paymentreciept: 'View Logo',
            status: 'Pending', 
            time: '2:00pm'
        },
        { 
            bussinessname: 'Ernest Chris',
            amountpaid: 'Carton',
            paymentdate: '4',
            depositorsname: 'Ernest Chris', 
            paymentreciept: 'View Logo',
            status: 'Credited', 
            time: '2:00pm'
        },
        { 
            bussinessname: 'Ernest Chris',
            amountpaid: 'Carton',
            paymentdate: '4',
            depositorsname: 'Ernest Chris', 
            paymentreciept: 'View Logo',
            status: 'Pending', 
            time: '2:00pm'
        }
    ])

    // functions

    const HandleChange =(event: any, index: any)=> {
        if(event.target.value === 'Credited'){  
            const arr = [...data]
            arr[index].status = 'Credited' 
            setData(arr)
        } else if (event.target.value === 'Pending') { 
            const arr = [...data]
            arr[index].status = 'Pending' 
            setData(arr) 
        }else {
            setShowModal(true);
            const arr = [...data]
            arr[index].status = 'Declined' 
            setData(arr) 
        }
    }

    const closeDeclineModal = () => {
        setShowModal(false);
    }

    const Status = (item: any, index: any) =>{ 
            return( 
                <div className='w-28 flex ' >
                    <Select style={ item ==='Credited' ? {color: '#00A69C'} : {color:'#F2994A'}} value={item}  className='w-full' onChange={(e)=> HandleChange(e, index)} fontSize='xs'>
                        <option value='Pending' style={{color:'#000000'}} >Pending</option>
                        <option value='Credited' style={{color:'#000000'}} >Credited</option>
                        <option value='Declined' style={{color:'#000000'}} >Declined</option>
                    </Select>
                </div>
            ) 
    }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
             {/* modal */}

             <DeclinedModal isOpen={showModal} onClose={closeDeclineModal} />

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
            <div className='w-auto my-14' >
                <table className='text-xs '>
                    <thead>
                        <tr className='font-Poppins-Semibold' >
                            <th className='bg-white'>ID</th>
                            <th className='bg-white'>Business Name</th>
                            <th className='bg-white'>Bank Name</th>
                            <th className='bg-white'>Amount Paid</th>
                            <th className='bg-white'>Date of Payment</th>
                            <th className='bg-white'>Time Of Payment</th>
                            <th className='bg-white'>Depositors Name</th> 
                            <th className='bg-white'>Payment Reciept</th> 
                            <th className='bg-white'>Status</th>   
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td>{item.bussinessname}</td>
                                    <td>UBA</td>
                                    <td>{item.amountpaid}</td>
                                    <td>{item.paymentdate}</td>
                                    <td>{item.time}</td>  
                                    <td>{item.depositorsname}</td>
                                    <td>
                                        <div className='w-full flex justify-center items-center cursor-pointer font-Poppins-Semibold text-midlman_color' > 
                                            {item.paymentreciept}
                                        </div>
                                    </td> 
                                    <td>
                                        {Status(item.status, index)} 
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

