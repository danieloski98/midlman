import { Input } from '@chakra-ui/react'
import React from 'react'

export default function Email() {
    return (
        <div className='w-auto mt-8 py-8 ' >
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >OLD EMAIL ADDRESS</p> 
                <Input fontSize='xs' />
            </div>   
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >NEW EMAIL ADDRESS</p> 
                <Input fontSize='xs' />
            </div>         
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >PASSWORD</p> 
                <Input fontSize='xs' />
            </div>         
            <div className='w-full flex justify-center py-12' > 
                <button className='w-80 bg-midlman_color rounded-lg font-Poppins-Semibold text-xs text-white py-3' >Change EMAIL ADDRESS</button>            
            </div>         
        </div>
    )
}
