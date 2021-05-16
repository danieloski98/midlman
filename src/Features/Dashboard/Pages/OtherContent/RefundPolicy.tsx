import { Input, Textarea } from '@chakra-ui/react'
import React from 'react'

export default function RefundPolicy() {
    return (
        <div className='w-full h-full flex flex-col items-center' > 
            <div style={{width:'650px'}} className='pt-8 pb-12' >  
                <p className='font-Poppins-Semibold text-lg ' >Refund Policy</p>
                <div className='w-full py-12 px-20' >
                    <p className='font-Poppins-Medium text-sm mt-4'>Refund Policy</p>
                    <div className='w-full my-2 ' >
                        <Textarea height='150' fontSize='xs' placeholder='Write here...' />
                    </div>
                    <p className='font-Poppins-Medium text-sm mt-4'>Reason for Refund</p>
                    <div className='w-full my-2 ' >
                        <Input fontSize='xs' paddingLeft='10' />
                    </div>
                    <div className=' w-full flex flex-row items-center py-8 justify-end' >
                        <svg className='mr-2' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="#00A69C"/>
                        </svg> 
                        <p className='ml-1 font-Poppins-Medium text-xs text-midlman_color'>Add New Reason</p>
                    </div>
                    <div className='w-full flex flex-row justify-center items-center py-10' >
                         <button className='py-3 bg-midlman_color font-Poppins-Semibold text-sm px-12 text-white rounded-md mx-4' >SUBMIT</button> 
                         <button className='py-3 bg-entries font-Poppins-Semibold text-sm px-12 text-menu_gray rounded-md mx-4'>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
