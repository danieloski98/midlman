import { Input } from '@chakra-ui/react';
import React from 'react'
import { useHistory } from 'react-router-dom';

export default function NewExpressAccount() { 
    
    const history = useHistory();

    return (
        <div className='w-full h-full flex flex-col items-center py-8 ' >  
            <p className=' w-100 font-Poppins-Semibold text-lg -ml-48' >New Express Account</p>  
            <div className='w-full flex flex-col items-center pt-14 pb-8' >
                <div onClick={()=> history.push('/dashboard/expressaccount')}  className='w-100 flex flex-row cursor-pointer ' >
                    <svg width="10" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.53578 0.515015L0.0507812 9.00001L8.53578 17.485L9.95078 16.071L2.87878 9.00001L9.95078 1.92901L8.53578 0.515015Z" fill="#828282"/>
                    </svg> 
                    <p className='font-Poppins-Bold text-menu_gray text-xs ml-2' >Back to Express Accounts</p>
                </div>
                <div className='w-100 flex flex-col pb-8' > 
                    <div className='w-full pt-8' > 
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>FIRSTNAME</p>
                            <Input fontSize='xs'/>
                        </div>
                        <div className='py-2' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>LAST NAME</p>
                            <Input fontSize='xs'/>
                        </div>
                        <div className='py-2' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>DISPLAY PICTURE</p>
                            <div className='flex flex-row items-center'>
                                <div className='w-40 rounded-md h-16 border-1 border-entries'>

                                </div>
                                <button className=' ml-4 border-1 h-12 border-midlman_color text-midlman_color font-Poppins-Semibold text-xs w-auto px-8 rounded-md' >Upload Display Picture</button>
                            </div>
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>EMAIL ADDRESS</p>
                            <Input fontSize='xs'/>
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>PHONE NUMBER</p>
                            <Input fontSize='xs'/>
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>ADDRESS 1</p>
                            <Input fontSize='xs'/>
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>ADDRESS 2</p>
                            <Input fontSize='xs'/>
                        </div>
                    </div>  
                    <div className='w-full py-2' >
                        <p className='text-sm font-Poppins-Semibold' >STATUS</p>
                        <div className='flex flex-row  mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Active</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                            <p className='text-xs ml-2 font-Poppins-Regular text-menu_gray'>*inactive accounts won’t be able to login</p>
                        </div>
                    </div> 
                    <div className='w-full flex flex-row pt-12' >
                        <button className='bg-midlman_color font-Poppins-Semibold text-white text-xs py-3 w-full rounded-md mr-4' >ADD</button>
                        <button className='py-3 text-xs font-Poppins-Semibold text-menu_gray bg-entries rounded-md w-full mx-4' >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
