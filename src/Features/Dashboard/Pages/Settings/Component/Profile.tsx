import { Input, Select } from '@chakra-ui/react'
import React from 'react'

import pic from '../../../../../assets/images/photo.png' 

export default function Profile() {
    return (
        <div className='w-auto' >
            <div className='w-full flex py-8 flex-row items-center' >
                <div className='w-full flex flex-1' />
                <div className='w-16 h-16' >  
                    <img src={pic} className='w-full h-full' alt='profile' />
                </div>
                <button className='h-10 ml-4  border-1 rounded-lg border-midlman_color font-Poppins-Medium text-xs text-midlman_color px-4' >Change Profile Image</button>
            </div>
            <div className='w-full py-10 border-b-1 border-entries' >
                <div className='w-full flex py-4 flex-row' >
                    <div className='w-80 flex flex-col mr-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >ADMIN NAME</p> 
                        <Input fontSize='xs' />
                    </div>
                    <div className='w-80 flex flex-col ml-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >ROLE</p> 
                        <Select fontSize='xs' />
                    </div>
                </div>
                <div className='w-full flex py-4 flex-row' >
                    <div className='w-80 flex flex-col mr-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >PHONE NUMBER</p> 
                        <Input fontSize='xs' />
                    </div>
                    <div className='w-80 flex flex-col ml-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >EMAIL ADDRESS</p> 
                        <Input fontSize='xs' />
                    </div>
                </div>
                <div className='w-full flex py-4 flex-row' >
                    <div className='w-80 flex flex-col mr-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >ADDRESS 1</p> 
                        <Input fontSize='xs' />
                    </div>
                    <div className='w-80 flex flex-col ml-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >ADDRESS 2</p> 
                        <Input fontSize='xs' />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center py-12' > 
                <button className='w-80 bg-midlman_color rounded-lg font-Poppins-Semibold text-xs text-white py-3' >Save Changes</button>            
            </div>
        </div>
    )
}
