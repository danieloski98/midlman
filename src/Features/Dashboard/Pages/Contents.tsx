import React from 'react'
import { useHistory } from 'react-router'

import AreaGraph from '../Component/AreaGraph'
import BarGraph from '../Component/BarGraph'
import Navbar from '../Component/Navbar'
import Notification from '../Component/Notification'
import PieGraph from '../Component/PieGraph'
import RecentOrder from '../Component/RecentOrder'

export default function Contents() {

    const [showModal, setShowModal] = React.useState(false)   
    const history = useHistory()

    return ( 
        <div className='w-full h-full flex flex-col flex-1 py-8 px-8 bg-white' >
            <div className='w-full' >
                <Navbar open={setShowModal} />
            </div>
            {showModal ? (
                <>
                    <div className=" justify-end items-start w-auto flex flex-wrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"> 
                        <Notification close={setShowModal} /> 
                    </div>
                    <div className=" opacity-75 cursor-pointer fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null} 
            <div className='w-full h-full pt-14' >
                <div className='w-full flex' >
                    <div className='w-full flex flex-1' />
                    <button onClick={()=> history.push('/dashboard/uploadproduct')} className='bg-midlman_color flex flex-row  font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md' >
                        <svg className='mr-2' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="white"/>
                        </svg> Upload Product
                    </button>
                </div>
                <div className='w-full flex flex-col ' >
                    <p className='text-base my-2 font-Poppins-Semibold'>Overview</p>
                    <div className='w-full flex flex-row ' >
                        <div className='w-full  pr-2' >
                            <div className='w-full text-white p-6 bg-product_color rounded-xl' >
                                <p className='text-lg font-Poppins-Semibold' >31</p>
                                <p className='text-sm font-Poppins-Semibold' >New Products</p>
                                <div className='flex flex-row mt-4 items-center' >
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9505 13.7485H1.05076C0.782816 13.7485 0.535227 13.6056 0.401257 13.3735C0.267288 13.1415 0.267289 12.8556 0.401262 12.6235L7.35076 0.623525C7.48484 0.391858 7.73222 0.249207 7.99989 0.249207C8.26755 0.249207 8.51493 0.391858 8.64901 0.623525L15.5985 12.6235C15.7324 12.8555 15.7325 13.1412 15.5987 13.3732C15.4649 13.6052 15.2176 13.7483 14.9498 13.7485H14.9505ZM8.00101 2.49852L2.35276 12.2485H13.6508L8.00101 2.49852ZM8.74726 9.24927H7.24726V5.49852H8.74726V9.24927Z" fill="#E4B8B8"/>
                                        <path d="M7.25101 10H8.75101V11.5H7.25101V10Z" fill="#E4B8B8"/>
                                    </svg>
                                    <p className='text-xs ml-2 font-Poppins-Regular'>12 actions needed</p>
                                    <div className='w-full flex flex-1' />
                                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5587 9.33333L11.7854 14.12L13.6654 16L21.6654 8L13.6654 0L11.7854 1.88L16.5587 6.66667H0.332031V9.33333H16.5587Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='w-full px-2' >
                            <div className='w-full text-white p-6 bg-customers_color rounded-xl' >
                                <p className='text-lg font-Poppins-Semibold' >43</p>
                                <p className='text-sm font-Poppins-Semibold' >New Customers</p>
                                <div className='flex flex-row mt-4 items-center' >
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9505 13.7485H1.05076C0.782816 13.7485 0.535227 13.6056 0.401257 13.3735C0.267288 13.1415 0.267289 12.8556 0.401262 12.6235L7.35076 0.623525C7.48484 0.391858 7.73222 0.249207 7.99989 0.249207C8.26755 0.249207 8.51493 0.391858 8.64901 0.623525L15.5985 12.6235C15.7324 12.8555 15.7325 13.1412 15.5987 13.3732C15.4649 13.6052 15.2176 13.7483 14.9498 13.7485H14.9505ZM8.00101 2.49852L2.35276 12.2485H13.6508L8.00101 2.49852ZM8.74726 9.24927H7.24726V5.49852H8.74726V9.24927Z" fill="#E4B8B8"/>
                                        <path d="M7.25101 10H8.75101V11.5H7.25101V10Z" fill="#E4B8B8"/>
                                    </svg>
                                    <p className='text-xs ml-2 font-Poppins-Regular'>24 actions needed</p>
                                    <div className='w-full flex flex-1' />
                                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5587 9.33333L11.7854 14.12L13.6654 16L21.6654 8L13.6654 0L11.7854 1.88L16.5587 6.66667H0.332031V9.33333H16.5587Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pl-2' >
                            <div className='w-full text-white p-6 bg-businesses_color rounded-xl' >
                                <p className='text-lg font-Poppins-Semibold' >24</p>
                                <p className='text-sm font-Poppins-Semibold' >New Businesses</p>
                                <div className='flex flex-row mt-4 items-center' >
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9505 13.7485H1.05076C0.782816 13.7485 0.535227 13.6056 0.401257 13.3735C0.267288 13.1415 0.267289 12.8556 0.401262 12.6235L7.35076 0.623525C7.48484 0.391858 7.73222 0.249207 7.99989 0.249207C8.26755 0.249207 8.51493 0.391858 8.64901 0.623525L15.5985 12.6235C15.7324 12.8555 15.7325 13.1412 15.5987 13.3732C15.4649 13.6052 15.2176 13.7483 14.9498 13.7485H14.9505ZM8.00101 2.49852L2.35276 12.2485H13.6508L8.00101 2.49852ZM8.74726 9.24927H7.24726V5.49852H8.74726V9.24927Z" fill="#E4B8B8"/>
                                        <path d="M7.25101 10H8.75101V11.5H7.25101V10Z" fill="#E4B8B8"/>
                                    </svg>
                                    <p className='text-xs ml-2 font-Poppins-Regular'>4 actions needed</p>
                                    <div className='w-full flex flex-1' />
                                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5587 9.33333L11.7854 14.12L13.6654 16L21.6654 8L13.6654 0L11.7854 1.88L16.5587 6.66667H0.332031V9.33333H16.5587Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className='w-full flex flex-row mt-10 pb-10' style={{height:'650px'}} >
                <div className='flex flex-col' >  
                    <div className='w-80' > 
                        <BarGraph/> 
                    </div>
                    <div> 
                        <PieGraph /> 
                    </div>
                </div>
                <div className='w-auto pl-8' >
                    <AreaGraph />
                </div>
            </div> 
            <div className='w-full flex pb-8'>
                <RecentOrder />
            </div>
        </div>
    )
}
