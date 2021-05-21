import { Select, Input, Textarea } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function RefundReequest() {
    const [showModal, setShowModal] = React.useState(false);
    const [pendingData, setPendingData] = React.useState(['']);
    const history = useHistory()

    const data = [
        { 
            refundid: 'shdsjdslas',
            orderid: 'shdsjdslas',
            accounttype: 'Portal',
            items: 'this will have a long scrollable list of all items purchased', 
            requestdate: '12/04/2021 (5;30pm)',
            amount: '12/04/2021 (5;30pm)', 
            requestitems: 'this will have a long scrollable list of all items purchased',
            possiblereason: 'this will have a long scrollable list of pre-selected reasons', 
            information: 'this will have a long scrollable list of info entered by user', 
            status: 'Pending', 
        },
        { 
            refundid: 'shdsjdslas',
            orderid: 'shdsjdslas',
            accounttype: 'Express',
            items: 'this will have a long scrollable list of all items purchased', 
            requestdate: '12/04/2021 (5;30pm)',
            amount: '12/04/2021 (5;30pm)', 
            requestitems: 'this will have a long scrollable list of all items purchased',
            possiblereason: 'this will have a long scrollable list of pre-selected reasons', 
            information: 'this will have a long scrollable list of info entered by user', 
            status: 'Accepted', 
        },
        { 
            refundid: 'shdsjdslas',
            orderid: 'shdsjdslas',
            accounttype: 'Portal',
            items: 'this will have a long scrollable list of all items purchased', 
            requestdate: '12/04/2021 (5;30pm)',
            amount: '12/04/2021 (5;30pm)', 
            requestitems: 'this will have a long scrollable list of all items purchased',
            possiblereason: 'this will have a long scrollable list of pre-selected reasons', 
            information: 'this will have a long scrollable list of info entered by user', 
            status: 'Decline', 
        },
        { 
            refundid: 'shdsjdslas',
            orderid: 'shdsjdslas',
            accounttype: 'Express',
            items: 'this will have a long scrollable list of all items purchased', 
            requestdate: '12/04/2021 (5;30pm)',
            amount: '12/04/2021 (5;30pm)', 
            requestitems: 'this will have a long scrollable list of all items purchased',
            possiblereason: 'this will have a long scrollable list of pre-selected reasons', 
            information: 'this will have a long scrollable list of info entered by user', 
            status: 'Pending', 
        },
    ] 

    const HandleChange =(event: any, index: any)=> {
        if(event.target.value === 'decline'){
            setShowModal(true);
            const newarr = [...pendingData]
            newarr[index]= 'decline'
            setPendingData(newarr)
        } else if(event.target.value === 'accept'){  
            const newarr = [...pendingData]
            newarr[index]= 'accept'
            setPendingData(newarr)
        } else {
            const newarr = [...pendingData]
            newarr[index]= ''
            setPendingData(newarr)
        }
    }

    const Status = (item: any, index: any) =>{ 
        if(item === 'Pending'){
            return( 
                <div className='w-28 flex ' >
                    <Select style={pendingData[index] === 'accept' ? {color: '#00A69C'} : pendingData[index] === 'decline' ? {color: '#EB5757'} : {color:'#F2994A'}}  className='w-full' onChange={(e)=> HandleChange(e, index)} placeholder='Pending' fontSize='xs'>
                        <option value='accept' style={{color:'#000000'}} >Accept</option>
                        <option value='decline' style={{color:'#000000'}} >Decline</option>
                    </Select>
                </div>
            )
        } else if(item === 'Accepted'){
            return( 
                <div className='w-full flex justify-center items-center ' > 
                    <p className='font-Poppins-Regular text-midlman_color' >Accepted</p>
                </div>
            )
        } else{
            return( 
                <div className='w-full flex justify-center items-center ' > 
                    <p style={{color: '#EB5757'}} className='font-Poppins-Regular text-midlman_color' >Decline</p>
                </div>
            )
        }
    }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <p className='font-Poppins-Semibold text-lg' >Refund Requests</p>
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
                <div className='w-full flex flex-1' />
                <button onClick={()=> history.push('/dashboard/uploadproduct')}  className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' >
                    <svg className='mr-2' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="white"/>
                    </svg> Add New Product
                </button>
            </div>
            <div className='w-auto my-14' >
                <table className='text-xs '>
                    <thead>
                        <tr className='font-Poppins-Semibold' >
                            <th className='bg-white'>ID</th>
                            <th className='bg-white'>Refund ID</th>
                            <th className='bg-white'>Order ID</th>
                            <th className='bg-white'>Account Type</th>
                            <th className='bg-white'>Items</th> 
                            <th className='bg-white'>Request Date/Time</th> 
                            <th className='bg-white'>Amount</th> 
                            <th className='bg-white'>Request Items</th> 
                            <th className='bg-white'>Possible Reason</th> 
                            <th className='bg-white'>Additional Info</th>  
                            <th className='bg-white'>Status</th>   
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td>{item.refundid}</td>
                                    <td>{item.orderid}</td>
                                    <td>{item.accounttype}</td>
                                    <td>{item.items}</td>
                                    <td>{item.requestdate}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.requestitems}</td>
                                    <td>{item.possiblereason}</td>
                                    <td>{item.information}</td>
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
            {showModal ? (
                    <>
                        <div className="justify-center items-center overflow-x-hidden flex overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none"> 
                            <div style={{width:'500px'}}  className='rounded-lg bg-white p-8' >
                                <p className='font-Poppins-Semibold text-lg mt-8'>Reason for Declining Request</p>
                                <div className='w-full py-8' > 
                                    <Textarea height='120' fontSize='xs' placeholder='Write here...' />
                                </div>
                                <div className='w-full flex flex-row justify-center' >
                                    <button onClick={()=> setShowModal(false)} className='py-3 rounded-md mb-4 text-xs px-8 mx-4 bg-midlman_color text-white font-Poppins-Semibold' >DECLINE REQUEST</button>
                                    <button onClick={()=> setShowModal(false)} className='py-3 rounded-md mb-4 text-xs px-8 mx-4 bg-entries text-menu_gray font-Poppins-Semibold' >CANCEL</button>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null} 
        </div>
    )
}
