import React from 'react'
import { useHistory } from 'react-router-dom'
import product from '../../../assets/images/product.png'

export default function RecentOrder() {

    const history = useHistory()
    const Orders = (props: any) => {
        return(
            <div className='w-full flex flex-row items-center py-4 border-b-2 border-login_buttton ' >
                <div className='w-full flex flex-1' >
                    <p className='font-Poppins-Medium text-sm text-menu_gray' >#2345hfjsd</p>
                </div>
                <div className='w-56 flex flex-row justify-center items-center' >
                    <div className='bg-login_buttton p-1  rounded-lg' >
                        <img src={product} alt='product' className='w-12' />
                    </div>
                    <div className='flex flex-col justify-center ml-2' >
                        <p className='font-Poppins-Semibold text-xs' >Piriton Syrup</p>
                        <p className='font-Poppins-Regular text-xs mt-1 text-menu_gray' >Anti-allergies</p>
                    </div>
                </div>
                <div className='w-40 flex justify-center' >
                    <p className='font-Poppins-Medium text-sm' >500mg bottle</p>
                </div>
                <div className='w-14 flex justify-center' >
                    <p className='font-Poppins-Medium text-sm' >x1</p>
                </div>
                <div className='w-48 flex justify-center' >
                    <div className={props.container} > 
                        <p className='font-Poppins-Medium text-sm' >{props.text}</p>
                    </div>
                </div>
                <div className='w-40 flex justify-center' >
                    <p className='font-Poppins-Medium text-sm' >₦5,900</p>
                </div>
            </div>
        )
    } 

    const ClickHandler =(path: any)=> {
        history.replace(path);
        history.go(0);
    }

    return (
        <div className='w-full h-full flex flex-col bg-white rounded-lg shadow-2xl' >
            <div className='w-full shadow-lg rounded-t-lg pt-8 px-8' >
                <div className='w-full flex flex-row items-center border-b-2 border-gray-200 pb-4' >
                    <p className='font-Poppins-Medium text-lg' >Recent Orders</p>
                    <div className='w-full flex flex-1' />
                    <div className='rounded-md border-2 border-gray-200 py-2 px-4 cursor-pointer' onClick={()=> ClickHandler('/dashboard/orderlist')} >
                        <p className='font-Poppins-Regular text-sm' >View all orders</p>
                    </div>
                </div>
                <div className='w-full flex flex-row items-center py-4' >
                    <div className='w-full flex flex-1' >
                        <p className='font-Poppins-Medium text-sm' >ID</p>
                    </div>
                    <div className='w-56 flex justify-center' >
                        <p className='font-Poppins-Medium text-sm' >Item</p>
                    </div>
                    <div className='w-40 flex justify-center' >
                        <p className='font-Poppins-Medium text-sm' >Type</p>
                    </div>
                    <div className='w-14 flex justify-center' >
                        <p className='font-Poppins-Medium text-sm' >Quantity</p>
                    </div>
                    <div className='w-48 flex justify-center' >
                        <p className='font-Poppins-Medium text-sm' >Status</p>
                    </div>
                    <div className='w-40 flex justify-center' >
                        <p className='font-Poppins-Medium text-sm' >Price</p>
                    </div>
                </div>
            </div>
            <div className='w-full rounded-t-lg px-8' > 
                <Orders container='bg-pending_bg rounded-lg text-pending_color w-32 flex justify-center py-2' text='Pending' />
                <Orders container='bg-processing_bg rounded-lg text-processing_color w-32 flex justify-center py-2' text='Processing'/>
                <Orders container='bg-completed_bg rounded-lg text-completed_color w-32 flex justify-center py-2' text='Completed'/>
                <div className='w-full flex flex-row py-6 items-center ' >
                    <p className='font-Poppins-Medium text-sm ' >Show entries:</p>
                    <div className='flex flex-row py-2 pl-2 pr-1 ml-2 border-entries border-2 rounded-lg items-center' >
                        <p className='font-Poppins-Medium text-sm ' >3</p>
                        <div className='flex flex-col ml-1' >
                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.682843 4.65049L5.05049 0.282843C5.2067 0.126633 5.45997 0.126633 5.61618 0.282843L9.98382 4.65049C10.2358 4.90248 10.0573 5.33333 9.70098 5.33333H0.965686C0.609324 5.33333 0.430857 4.90248 0.682843 4.65049Z" fill="black"/>
                            </svg>
                            <svg className='mt-1'  width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.682843 1.34951L5.05049 5.71716C5.2067 5.87337 5.45997 5.87337 5.61618 5.71716L9.98382 1.34951C10.2358 1.09752 10.0573 0.666667 9.70098 0.666667H0.965686C0.609324 0.666667 0.430857 1.09752 0.682843 1.34951Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
