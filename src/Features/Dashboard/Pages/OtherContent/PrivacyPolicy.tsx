import { Textarea } from '@chakra-ui/react'
import React from 'react'

export default function PrivacyPolicy() {
    return (
        <div className='w-full h-full flex flex-col items-center' > 
            <div style={{width:'650px'}} className='pt-8 pb-12' >  
                <p className='font-Poppins-Semibold text-lg ' >Privacy Policy</p>
                <div className='w-full py-12 px-20' >
                    <p className='font-Poppins-Medium text-sm mt-4'>Privacy Policy</p>
                    <div className='w-full my-2 ' >
                        <Textarea height='150' fontSize='xs' placeholder='Write here...' />
                    </div>
                    <div className='w-full flex flex-row justify-center items-center py-10' >
                         <button className='py-3 bg-midlman_color font-Poppins-Semibold text-xs px-12 text-white rounded-md mx-4' >SUBMIT</button> 
                         <button className='py-3 bg-entries font-Poppins-Semibold text-xs px-12 text-menu_gray rounded-md mx-4'>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
