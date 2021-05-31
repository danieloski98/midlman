import { Input } from '@chakra-ui/react'
import React from 'react'
import photo from '../../../../assets/images/View.png'
import Editor from './Component/Editor'

export default function AboutUs() {
    return (
        <div className='w-full h-full flex flex-col items-center' >
            <div style={{width:'650px'}} className='pt-8 pb-12' >
                <p className='font-Poppins-Semibold text-lg ' >About Us</p>
                <div className=' w-full flex flex-row items-center border-b-2 border-entries py-8' >
                    <p className='font-Poppins-Medium text-sm '>Hero Image:</p>
                    <div className=' w-56 h-10 ml-4 relative' >
                        <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                        <img src={photo} alt='' className='w-full h-full' />
                    </div>
                    <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Browse</button>
                    <div className='w-full flex flex-1' />
                    <div className='flex flex-row' >
                        <button className='h-10 px-4 ml-2 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md' >SAVE</button>
                        <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray' >RESET</button>
                    </div>
                </div>
                <div className='w-full py-8 border-b-2 border-entries' >
                    <p className='font-Poppins-Medium text-sm '>Hero Image:</p>
                    <p className='font-Poppins-Medium text-menu_gray text-sm mt-4'>Alternate Image:</p>
                    <div className='w-full flex mt-2 flex-row' >
                        <div className=' w-56 h-10 relative' >
                            <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                            <img src={photo} alt='' className='w-full h-full' />
                        </div>
                        <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Upload</button>
                    </div> 
                    <p className='font-Poppins-Medium text-menu_gray text-sm mt-4'>Altrenate Text:</p>
                    <div className='w-100 my-2 ' >
                        <Editor />
                        {/* <Textarea height='130' fontSize='xs' placeholder='Write here...' /> */}
                    </div>
                    <p className='font-Poppins-Medium text-sm '>Our Vision:</p>
                    <p className='font-Poppins-Medium text-menu_gray text-sm mt-4'>Alternate Image:</p>
                    <div className='w-full flex mt-2 flex-row' >
                        <div className=' w-56 h-10 relative' >
                            <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                            <img src={photo} alt='' className='w-full h-full' />
                        </div>
                        <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Upload</button>
                    </div> 
                    <p className='font-Poppins-Medium text-menu_gray text-sm mt-4'>Altrenate Text:</p>
                    <div className='w-100 mt-2 ' >
                        <Editor />
                    </div>
                    <div className='w-full flex flex-row mt-8' >
                        <div className='w-full flex flex-1' />
                        <button className='h-10 px-4 ml-2 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md' >SAVE</button>
                        <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray' >RESET</button>
                    </div>
                </div>
                <div className='w-full py-8'>
                    <p className='font-Poppins-Medium text-sm mt-4'>Meet our Team section:</p>
                    <div className='w-full py-8 px-10' >
                        <p className='font-Poppins-Medium text-sm my-4'>Team Member 1:</p>
                        <p className='font-Poppins-Medium text-sm mt-4 text-menu_gray'>Display Picture:</p>
                        <div className='w-full flex mt-2 flex-row' >
                            <div className=' w-56 h-10 relative' >
                                <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                                <img src={photo} alt='' className='w-full h-full' />
                            </div>
                            <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Browse</button>
                        </div> 
                        <p className='font-Poppins-Medium text-sm mt-10 text-menu_gray'>Details:</p> 
                        <div className='w-100 pb-8 border-b-2 border-entries ' >
                            <div className='w-full flex flex-row py-4' >
                                <Input fontSize='xs' placeholder='Name' marginRight='2' />
                                <Input fontSize='xs' placeholder='Subtitle' marginLeft='2' />
                            </div>
                            <Editor />
                        </div> 
                        <div className=' w-100 flex flex-row items-center py-8 justify-end' >
                            <svg className='mr-2' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="#00A69C"/>
                            </svg> 
                            <p className='ml-1 font-Poppins-Medium text-xs text-midlman_color'>Add</p>
                        </div>
                        <div className='w-full flex flex-row mt-8' >
                            <div className='w-full flex flex-1' />
                            <button className='h-10 px-4 ml-2 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md' >SAVE</button>
                            <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray' >RESET</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
