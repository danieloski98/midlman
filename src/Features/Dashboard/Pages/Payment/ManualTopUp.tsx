import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import React from 'react'

export default function ManualTopUp() {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center' >
            <div > 
                <p className='text-lg font-Poppins-Semibold' >Manual Top up</p>
                <div className='w-96 py-8' >
                    <p className='text-sm font-Poppins-Medium mb-1' >SELECT BUSINESS NAME</p>
                    <Select />
                </div>
                <div className='w-96 py-8' >
                    <p className='text-sm font-Poppins-Medium mb-1' >AMOUNT</p>
                    <Input />
                </div>
                <div className='w-full flex justify-center py-8' > 
                    <button className='px-14 py-3 bg-midlman_color text-white text-sm font-Poppins-Medium rounded-md' >TOP UP</button>
                </div>
            </div>
        </div>
    )
}
