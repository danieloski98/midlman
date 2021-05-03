import React from 'react'

import pic from '../../../assets/images/profile.png' 
import AreaGraph from './AreaGraph'
import BarGraph from './BarGraph'
import PieGraph from './PieGraph'
import RecentOrder from './RecentOrder'

export default function Contents() {
    return ( 
        <div className='w-full h-full flex flex-col flex-1 py-8 px-8 bg-white' >
            <div className='w-full h-10 flex flex-row items-center' >
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 12H0V10H18V12ZM18 7H0V5H18V7ZM18 2H0V0H18V2Z" fill="#828282"/>
                </svg> 
                <div className='w-full flex flex-1' />
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4 0C16.615 0 17.6 0.984974 17.6 2.2L2.2 2.2L2.2 14.4941C0.984975 14.4941 0 13.5091 0 12.2941V2.2C0 0.984971 0.984974 0 2.2 0H15.4Z" fill="#828282"/>
                    <path d="M13.2 22L10.2667 18.8941H6.6C5.38497 18.8941 4.4 17.9091 4.4 16.6941V6.6C4.4 5.38497 5.38497 4.4 6.6 4.4H19.8C21.015 4.4 22 5.38497 22 6.6V16.6941C22 17.9091 21.015 18.8941 19.8 18.8941H16.1333L13.2 22ZM15.185 16.6941L19.8 16.6941V6.6L6.6 6.6V16.6941H11.215L13.2 18.7959L15.185 16.6941Z" fill="#828282"/>
                </svg>  
                <svg width="22" height="24" className='ml-12 mr-12' viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.43456 16.6667L4.81122 15.2877C5.25222 14.8467 5.49489 14.2611 5.49489 13.6381V8.18155C5.49489 6.59838 6.18322 5.08522 7.38489 4.03288C8.59589 2.97122 10.1382 2.50455 11.7447 2.71572C14.4596 3.07622 16.5071 5.53088 16.5071 8.42655V13.6381C16.5071 14.2611 16.7497 14.8467 17.1896 15.2866L18.5674 16.6667H3.43456ZM13.3337 19.3979C13.3337 20.4467 12.2651 21.3334 11.0004 21.3334C9.73572 21.3334 8.66706 20.4467 8.66706 19.3979V19H13.3337V19.3979ZM20.9416 15.7427L18.8404 13.638V8.42655C18.8404 4.36538 15.9214 0.91555 12.0504 0.403383C9.80806 0.104716 7.54472 0.78955 5.84723 2.27822C4.13923 3.77388 3.16156 5.92522 3.16156 8.18155L3.16039 13.638L1.05922 15.7427C0.512058 16.291 0.349891 17.1065 0.646225 17.8217C0.943725 18.538 1.63556 19 2.41022 19H6.33372V19.3979C6.33372 21.7522 8.42673 23.6667 11.0004 23.6667C13.5741 23.6667 15.6671 21.7522 15.6671 19.3979V19H19.5906C20.3652 19 21.0559 18.538 21.3522 17.8229C21.6497 17.1065 21.4887 16.2899 20.9416 15.7427Z" fill="#828282"/>
                </svg>
                <img src={pic} className='w-10 h-10' alt='profile' />
                <div className='flex flex-col ml-4' >
                    <div className='flex flex-row items-center' >
                        <p className='ml-1 mr-2 text-xs font-Poppins-Regular' >Best Option</p>
                        <svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current' d="M0.273014 1.57264L0.202354 1.64335L0.273039 1.71403L5.92971 7.3707L6.00042 7.44141L6.07113 7.3707L11.7278 1.71403L11.7985 1.64335L11.7278 1.57264L10.7852 0.629302L10.7144 0.558537L10.6437 0.629282L6.00042 5.27322L1.35713 0.629282L1.2864 0.558537L1.21568 0.629302L0.273014 1.57264Z" fill="#B4E4E1" stroke="#B4E4E1" stroke-width="0.2"/>
                        </svg>
                    </div>
                    <p className='ml-1 text-xs font-Poppins-Regular text-right text-menu_gray' >Super Admin</p>
                </div>
            </div>
            <div className='w-full h-full pt-14' >
                <div className='w-full flex' >
                    <div className='w-full flex flex-1' />
                    <button className='bg-midlman_color flex flex-row  font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md' >
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
