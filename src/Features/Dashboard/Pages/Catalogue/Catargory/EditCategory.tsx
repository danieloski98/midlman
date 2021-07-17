import { Input } from '@chakra-ui/react';
import React from 'react'
import { useHistory } from 'react-router-dom';

export default function EditCategory() {
    
    const history = useHistory();

    return (
        <div className='w-full h-full flex flex-col items-center py-8 ' >  
            <p className=' w-100 font-Poppins-Semibold text-lg -ml-48' >Edit Category</p>  
            <div className=' w-100 flex flex-row -ml-48 mt-8' >
                <p className='font-Poppins-Regular text-xs text-menu_gray' >Categories</p>
                <svg className='mx-2' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.71309 6.99999L1.70209 0.98999L0.288086 2.40399L4.88809 7.00399L0.288086 11.597L1.70209 13.011L7.71309 6.99999Z" fill="#828282"/>
                </svg>
                <p className='font-Poppins-Regular text-xs text-menu_gray' >Edit Categories</p>
                <svg className='mx-2' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.71309 6.99999L1.70209 0.98999L0.288086 2.40399L4.88809 7.00399L0.288086 11.597L1.70209 13.011L7.71309 6.99999Z" fill="#828282"/>
                </svg> 
            </div>
            <div className='w-full flex flex-col items-center pt-14 pb-8' >
                <div onClick={()=> history.push('/dashboard/catergories')}  className='w-100 flex flex-row cursor-pointer ' >
                    <svg width="10" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.53578 0.515015L0.0507812 9.00001L8.53578 17.485L9.95078 16.071L2.87878 9.00001L9.95078 1.92901L8.53578 0.515015Z" fill="#828282"/>
                    </svg> 
                    <p className='font-Poppins-Bold text-menu_gray text-xs ml-2' >Back to Categories</p>
                </div>
                <div className='w-100 flex flex-col pb-8' > 
                    <div className='w-full pt-8' > 
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>CATEGORY NAME</p>
                            <Input fontSize='xs'/>
                        </div> 
                        <div className=' w-full py-2 flex flex-row ' >
                            <div className='flex flex-col' >
                                <p className='font-Poppins-Semibold text-xs mb-1'>COVER IMAGE</p>
                                <div className='w-40 rounded-md h-16 border-1 border-entries'>

                                </div>
                                <button className='bg-entries font-Poppins-Semibold text-menu_gray text-xs py-3 w-40 rounded-md mt-2' >Browse</button>
                            </div>
                            <div className='w-full flex flex-1' />
                            <div className='flex flex-col' >
                                <p className='font-Poppins-Semibold text-xs mb-1'>ICON</p>
                                <div className='w-40 rounded-md h-16 border-1 border-entries'>

                                </div>
                                <button className='bg-entries font-Poppins-Semibold text-menu_gray text-xs py-3 w-40 rounded-md mt-2' >Browse</button>
                            </div>
                        </div> 
                    </div>  
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold' >STATUS</p>
                        <div className='flex flex-row  mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Active</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div> 
                    <div className='w-full flex flex-row pt-12' >
                        <button className='bg-midlman_color font-Poppins-Semibold text-white text-xs py-3 w-full rounded-md mr-4' >Submit</button>
                        <button style={{backgroundColor:'#EB5757'}} className='font-Poppins-Semibold text-white text-xs py-3 w-full rounded-md ml-4' >Edit Category</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
