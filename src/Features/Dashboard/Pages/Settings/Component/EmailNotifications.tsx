import { Input, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function EmailNotifications() {
    return (
        <div className='w-auto mt-8 py-8 ' >
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >NEW PORTAL ACCOUNT REGISTRATION</p>
                <Input fontSize='xs' type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >NEW PRESCRIPTION</p>
                <Input fontSize='xs' type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >PORTAL ORDERS</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >EXPRESS ORDERS</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >NEW PORTAL CHAT MESSAGE</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >NEW EXPRESS CHAT MESSAGE</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >WITHDRAWAL REQUEST</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >RETURN REQUEST</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >ORDER STATUS</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >E-WALLET TOP UP (ADMIN)</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >NEW PORTAL PAYMENT NOTIFICATION</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >APPROVED PORTAL ACCOUNT</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >LOW STOCK PRODUCT</p>
                <Input fontSize='xs'  type="password" />
                
            </div>
            <div className='w-full flex justify-center py-12' >
                <button className='w-80 bg-midlman_color rounded-lg font-Poppins-Semibold text-xs text-white py-3' >
                    <span>Save Changes</span>
                  {/* {mutation.isLoading ? <Spinner color="white" size="sm" />: <span>Change Password</span>} */}
                </button>
            </div>
        </div>
    )
}
