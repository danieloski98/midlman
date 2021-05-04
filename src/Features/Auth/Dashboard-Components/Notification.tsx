import React from 'react';

export default function Notification( props: any ) {
    return (
        <div className=' w-auto h-auto bg-white'>
            <div className='w-full py-8 px-8' >
                <svg onClick={()=> props.close(false)} className='cursor-pointer'  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z" fill="#828282"/>
                </svg>
                <p className='mt-6 text-lg font-Poppins-Semibold' >Notifications</p>
            </div>
            <div className='w-full flex flex-row pl-8 py-4 items-center' style={{backgroundColor:'#F0FAF9'}} >
                <div className='w-24 h-20 bg-login_buttton rounded-lg' />
                <div className='w-full flex flex-col px-4' > 
                    <p className='text-sm font-Poppins-Medium mr-8'>Order fffghsnds has been delivered by Ernest</p>
                    <p className='text-xs font-Poppins-Regular mt-1 text-menu_gray'>Estimated time: 2 days</p>
                    <div className='w-full flex flex-row items-center px-2' >
                        <div className='w-full flex flex-1' />
                        <p className='text-sm font-Poppins-Bold mt-1 text-midlman_color'>Order List</p>
                        <svg className='mt-1 ml-1' width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.394 0.873281L4.462 4.90528L8.512 0.873281V3.77128L4.462 7.80328L0.394 3.77128V0.873281Z" fill="#00A69C"/>
                        </svg> 
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row pl-8 py-4 items-center'>
                <div className='w-24 h-20 bg-login_buttton rounded-lg' />
                <div className='w-full flex flex-col px-4' > 
                    <p className='text-sm font-Poppins-Medium mr-8'>Your Profile has been Updated</p>
                    <p className='text-xs font-Poppins-Regular mt-1 text-menu_gray'>12:24am</p>
                    <div className='w-full flex flex-row items-center px-2' >
                        <div className='w-full flex flex-1' />
                        <p className='text-sm font-Poppins-Bold mt-1 text-midlman_color'>Track</p> 
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row pl-8 py-4 items-center'>
                <div className='w-24 h-20 bg-login_buttton rounded-lg' />
                <div className='w-full flex flex-col px-4' > 
                    <p className='text-sm font-Poppins-Medium mr-8'>Your order has been picked up</p>
                    <p className='text-xs font-Poppins-Regular mt-1 text-menu_gray'>Estimated time: 4 days</p>
                    <div className='w-full flex flex-row items-center px-2' >
                        <div className='w-full flex flex-1' />
                        <p className='text-sm font-Poppins-Bold mt-1 text-midlman_color'>Track</p> 
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row pl-8 py-4 items-center'>
                <div className='w-24 h-20 bg-login_buttton rounded-lg' />
                <div className='w-full flex flex-col px-4' > 
                    <p className='text-sm font-Poppins-Medium mr-8'>Your order is arriving soon!</p>
                    <p className='text-xs font-Poppins-Regular mt-1 text-menu_gray'>Estimated time: 2 days</p>
                    <div className='w-full flex flex-row items-center px-2' >
                        <div className='w-full flex flex-1' />
                        <p className='text-sm font-Poppins-Bold mt-1 text-midlman_color'>Track</p> 
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center py-6' >
                <p className='text-xs font-Poppins-Regular text-menu_gray'>This is the end of this list</p>
            </div>
        </div>
    );
}
