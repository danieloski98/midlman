import { Checkbox } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'

export default function Newsletter() {

    const data = [  
            'Ernest@email.com', 
            'Best Option', 
            'Quintin Kelvin',
            'Dazeign',
            'Ernest@email.com',
            'Best Option',
            'Quintin Kelvin',
            'Dazeign',
            'Ernest@email.com', 
    ]

    return (
        <div className='w-full h-full flex flex-col items-center' style={{backgroundColor: '#FAFAFA'}} >
            <div style={{width:'650px'}} className='pt-8 pb-12' >
                <p className='font-Poppins-Semibold text-lg ' >Newsletter</p>
                <div className=' w-full flex flex-col pl-24 pt-10'>
                    <p className='font-Poppins-Medium text-sm '>COMPOSE MAIL</p>
                    <div className='w-full mt-2 ' > 
                        <Textarea bg='white' height='130' fontSize='xs' placeholder='Write here...' />
                    </div>
                    <div className='w-full flex flex-row mt-4' >
                        <div className='w-full flex flex-1' />
                        <button className='px-10 py-3 bg-midlman_color rounded-md text-white font-Poppins-Semibold text-sm' >SEND</button>
                    </div>
                </div> 
                <div className='w-full flex items-center my-14'> 
                    <div className='w-full flex flex-1' />
                    <table className='text-sm w-auto '>
                        <thead>
                            <tr className='font-Poppins-Semibold ' > 
                                <th className='bg-white border-l-0 border-t-0'>Email</th>
                                <th className='bg-white border-l-0 border-t-0'>Select</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return(
                                    <tr key={index} className='font-Poppins-Regular ' > 
                                        <td  className='pr-10 border-l-0' >{item}</td> 
                                        <td className='border-transparent' style={{backgroundColor: '#FAFAFA'}} >
                                            <div className='w-28 h-full flex items-center justify-center' >
                                                <Checkbox backgroundColor='white'  colorScheme='linkedin' isChecked iconColor="white" borderRadius='sm' />
                                            </div>
                                        </td> 
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='w-full flex flex-1' />
                </div>
            </div>
        </div>
    )
}
