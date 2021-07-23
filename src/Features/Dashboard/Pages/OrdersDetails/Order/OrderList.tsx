import { Select, Input } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router';
import Invoice from '../../ManageAdmin/DeliveryMan/Invoice';
// import { useHistory } from 'react-router-dom';  

export default function OrderList() {
 
    const history = useHistory();
    const [showModal, setShowModal] = React.useState(false);
    const [statusModal, setStatusModal] = React.useState(false);
    const [assigndeliveryModal, setAssignDeliveryModal] = React.useState(false);

    const data = [
        { 
            id: 'fdskfdsjlfdls',
            orderby: 'Ernest Chris',
            accounttype: 'Portal',
            item: 'this will have a long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased this will have a long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased this will have a long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased this will have a long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased long scrollable list of all items purchased', 
            total: '#40000', 
            purchasedate: '24/24/2024 (3;30pm)', 
            deliveredby: 'Ernest', 
            orderstatus: 'Pending', 
            paymentstatus: 'Pending', 
        },
        { 
            id: 'fdskfdsjlfdls',
            orderby: 'Best Option',
            accounttype: 'Express',
            item: 'this will have a long scrollable list of all items purchased', 
            total: '#40000', 
            purchasedate: '24/24/2024 (3;30pm)', 
            deliveredby: 'Ernest', 
            orderstatus: 'Processing', 
            paymentstatus: 'Pending', 
        },
        { 
            id: 'fdskfdsjlfdls',
            orderby: 'Ernest Chris',
            accounttype: 'Portal',
            item: 'this will have a long scrollable list of all items purchased', 
            total: '#40000', 
            purchasedate: '24/24/2024 (3;30pm)', 
            deliveredby: 'Ernest', 
            orderstatus: 'Completed', 
            paymentstatus: 'Confirmed', 
        },
        { 
            id: 'fdskfdsjlfdls',
            orderby: 'Ernest Chris',
            accounttype: 'Portal',
            item: 'this will have a long scrollable list of all items purchased', 
            total: '#40000', 
            purchasedate: '24/24/2024 (3;30pm)', 
            deliveredby: 'Ernest', 
            orderstatus: 'Requesting Return ', 
            paymentstatus: 'Confirmed', 
        },
    ]

    const Status = (source: any) => {
        if(source === 'Requesting Return'){
            return(
                <p style={{color: '#9B51E0'}} >{source}</p>
            )
        } else if(source === 'Processing'){
            return(
                <p style={{color: '#1B75BB'}} >{source}</p>
            )
        } else if(source === 'Pending'){
            return(
                <p onClick={()=> setStatusModal(true)} className='cursor-pointer' style={{color: '#F2994A'}} >{source}</p>
            )
        } else {
            return(
                <p style={{color: '#00A69C'}} >{source}</p>
            )
        } 
    }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 overflow-x-hidden overflow-y-auto ' >  
            <p className='font-Poppins-Semibold text-lg' >Order List</p>
            <div className='w-full flex relative flex-row items-center py-8' > 
                <div className='w-auto flex items-center mr-4' >  
                    <Select fontSize='xs' color='#828282' placeholder='Sort By'>
                        <option>Order By</option>
                        <option>Order ID</option>
                        <option>Date</option>
                    </Select>
                </div>
                <div className='w-48 flex items-center' > 
                    <div className=' absolute z-10 ml-4' >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#BDBDBD"/>
                        </svg>
                    </div>
                    <Input fontSize='xs' paddingLeft='10'  placeholder='Search ...' />
                </div>
                <div className='w-full flex flex-1' />
                <button className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' > Print </button>
                <button className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' > Save As </button>
            </div>

            <div className='w-auto h-100 overflow-x-scroll' >
                <table className='text-xs'>
                    <thead>
                        <tr className='font-Poppins-Semibold' >
                            <th className='bg-white' >
                                <p className="w-24 text-cen">ID</p>
                            </th>
                            <th className='bg-white' >
                                <p className="w-24 text-center">Order ID</p>
                            </th>
                            <th className='bg-white ' >
                                <p className="w-24 text-center">Order By</p>
                            </th>
                            <th className='bg-white' >
                                <p className="w-24 text-center">
                                Account Type
                                </p>
                            </th>
                            <th className='bg-white'>
                                <p className="w-24 text-center">Items</p></th> 
                            <th className='bg-white' >
                                <p className="w-40 text-center">Prescription Image</p></th> 
                            <th className='bg-white' >
                                <p className="w-24 text-center">Order Total</p></th> 
                            <th className='bg-white' >
                                <p className="w-56 text-center">Date/Time Purchased</p></th> 
                            <th className='bg-white' >
                                <p className="w-24 text-center">Delivery By</p></th> 
                            <th className='bg-white' >
                                <p className="w-32 text-center">Order Status</p></th> 
                            <th className='bg-white' >
                                <p className="w-32 text-center">Payment Status</p></th> 
                            <th className='bg-white' >
                                <p className="w-56 text-center">Action</p></th> 
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td>
                                        <div className='flex flex-row items-center' >
                                            {item.id}
                                            <p onClick={()=> setShowModal(true)} className='text-xs text-midlman_color ml-3 cursor-pointer'>View</p>
                                        </div></td>
                                    <td>{item.orderby}</td>
                                    <td>{item.accounttype}</td>
                                    <td className="overflow-y-scroll"><p className='text-xs text-menu_gray w-56 h-24 overflow-scroll' >{item.item}</p></td>
                                    <td>
                                        <p className="text-midlman_color cursor-pointer">View Image</p>
                                    </td>
                                    <td>{item.total}</td>
                                    <td>{item.purchasedate}</td>
                                    
                                    <td >{item.deliveredby}</td>
                                    <td className="text-yellow-600">
                                        <Select size="xs">
                                            <option value="pending">Pending</option>
                                            <option value="processing">Processing</option>
                                            <option value="completed">Completed</option>
                                        </Select>
                                    </td>
                                    <td>{Status(item.paymentstatus)}</td> 
                                    <td> 
                                        <div className=' w-full h-full flex flex-row items-center' >
                                            {/* <div onClick={()=> history.push('/dashboard/editorder')} className='cursor-pointer flex flex-row' >
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.7071 0.707107L16.5355 3.53553C16.9261 3.92606 16.9261 4.55922 16.5355 4.94975L15.1213 6.36396L10.8787 2.12132L12.2929 0.707107C12.6834 0.316583 13.3166 0.316583 13.7071 0.707107ZM9.46447 3.53553L1.27208 11.7279L0.979185 16.2635L5.51472 15.9706L13.7071 7.77817L9.46447 3.53553Z" fill="#1B75BB"/>
                                                </svg>
                                                <p className='ml-1' style={{color:'#1B75BB'}} >Edit</p>
                                            </div> */}
                                            <p onClick={()=> setAssignDeliveryModal(true)} className='ml-2 text-midlman_color cursor-pointer text-xs font-Poppins-Semibold w-56 text-center' >Assign Delivery Man</p>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className='w-full flex flex-row items-center pb-12 mt-10'>
                <p className='font-Poppins-Regular text-xs' >Showing 1-10 of 30 items</p>
                <div className='w-full flex flex-1' />
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ' >1</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >2</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >3</div>
            </div>
            {showModal ? (
                    <>
                        <div className="justify-center flex overflow-x-hidden my-2 overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none"> 
                            <Invoice close={setShowModal} order='' type='Order List' /> 
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null} 
            {statusModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden my-2 overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none"> 
                             <div className='w-100 bg-white rounded-lg py-4 px-8' >
                                <p className='font-Poppins-Semibold text-sm text-center ' >Please input the amount that was recieved from the order</p>
                                <div className='py-4' >
                                    <Input fontSize='xs' />
                                </div>
                                <div className='w-full flex justify-center' >
                                    <button onClick={()=> setStatusModal(false)} className='py-3 my-2 text-xs font-Poppins-Semibold text-white bg-midlman_color rounded-md w-32' >Submit</button>
                                </div>
                             </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null} 
            {assigndeliveryModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden my-2 overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none"> 
                                <div className='w-100 bg-white rounded-lg py-4 px-8' >
                                <p className='font-Poppins-Semibold text-sm text-center pb-4 ' >Assign Delivery Man</p>
                                <div className='py-4' >
                                    <Select fontSize='xs' placeholder='Select Delivery Man'>
                                        <option>Give me more options</option>
                                    </Select>
                                </div>
                                <div className='w-full flex justify-center mt-10 pb-4' >
                                    <button onClick={()=> setAssignDeliveryModal(false)} className='py-3 text-xs font-Poppins-Semibold text-white bg-midlman_color rounded-md w-32 mx-4' >Submit</button>
                                    <button onClick={()=> setAssignDeliveryModal(false)} className='py-3 text-xs font-Poppins-Semibold text-menu_gray bg-entries rounded-md w-32 mx-4' >Cancel</button>
                                </div>
                                </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null} 
        </div>
    )
}
