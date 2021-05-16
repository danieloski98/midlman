import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'
import photo from '../../../../assets/images/View.png'

export default function LandingPage() {
    return (
        <div className='w-full h-full flex flex-col items-center' >
            <div style={{width:'650px'}} className='pt-8 pb-12' >
                <p className='font-Poppins-Semibold text-lg ' >Landing Page</p>
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
                <div className='w-full flex flex-col border-b-2 border-entries py-8' >
                    <div className='flex flex-row' >
                        <p className='flex font-Poppins-Medium text-sm '>Trusted By:</p>
                        <div className=' flex flex-col mt-8' >
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Company 1</p>
                                <div className='flex flex-row' >
                                    <div className=' w-56 h-10 mt-1 relative' >
                                        <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                                        <img src={photo} alt='' className='w-full h-full' />
                                    </div>
                                    <button className='bg-login_buttton h-10 mt-1 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Browse</button> 
                                </div>
                            </div>
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Company 2</p>
                                <div className='flex flex-row' >
                                    <div className=' w-56 h-10 mt-1 relative' >
                                        <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                                        <img src={photo} alt='' className='w-full h-full' />
                                    </div>
                                    <button className='bg-login_buttton h-10 mt-1 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Browse</button> 
                                </div>
                            </div>
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Company 3</p>
                                <div className='flex flex-row' >
                                    <div className=' w-56 h-10 mt-1 relative' >
                                        <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                                        <img src={photo} alt='' className='w-full h-full' />
                                    </div>
                                    <button className='bg-login_buttton h-10 mt-1 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Browse</button> 
                                </div>
                            </div>
                            <div className='flex flex-row items-center py-2 justify-end' >
                                <svg className='mr-2' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="#00A69C"/>
                                </svg> 
                                <p className='ml-1 font-Poppins-Medium text-xs text-midlman_color'>Add</p>
                            </div>
                        </div> 
                    </div>
                    <div className=' w-full flex flex-row ' >
                        <div className='w-full flex flex-1' />
                        <button className='h-10 px-4 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md' >SAVE</button>
                        <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray' >RESET</button>
                    </div>
                </div>
                <div className='w-full flex flex-col border-b-2 border-entries py-8' >
                    <div className='flex flex-row' >
                        <p className='flex font-Poppins-Medium text-sm '>Our Numbers:</p>
                        <div className=' flex flex-col mt-8' > 
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Number 1</p>
                                <div className='flex flex-row mt-1' >
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Number Text'  fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Sub-heading' fontSize='xs' />
                                    </div>
                                </div>
                            </div> 
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Number 2</p>
                                <div className='flex flex-row mt-1' >
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Number Text'  fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Sub-heading' fontSize='xs' />
                                    </div>
                                </div>
                            </div> 
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Number 3</p>
                                <div className='flex flex-row mt-1' >
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Number Text'  fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Sub-heading' fontSize='xs' />
                                    </div>
                                </div>
                            </div> 
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Number 4</p>
                                <div className='flex flex-row mt-1' >
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Number Text'  fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Sub-heading' fontSize='xs' />
                                    </div>
                                </div>
                            </div> 
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Number 5</p>
                                <div className='flex flex-row mt-1' >
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Number Text'  fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Sub-heading' fontSize='xs' />
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div>
                    <div className=' w-full flex flex-row mt-8' >
                        <div className='w-full flex flex-1' />
                        <button className='h-10 px-4 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md' >SAVE</button>
                        <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray' >RESET</button>
                    </div>
                </div>
                <div className='w-full flex flex-col border-b-2 border-entries py-8' >
                    <div className='flex flex-row' >
                        <p className='flex font-Poppins-Medium text-sm '>Video Section:</p>
                        <div className=' flex flex-col mt-8' > 
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Video:</p>
                                <div className='flex flex-row' >
                                    <div className=' w-56 h-10 mt-1 relative' >
                                        <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>Play Video</p>
                                        <img src={photo} alt='' className='w-full h-full' />
                                    </div>
                                    <button className='bg-login_buttton h-10 mt-1 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Upload</button> 
                                </div>
                            </div>
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Alternate Content</p>
                                <div className='flex flex-row mt-1' >
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Heading'  fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='URL' fontSize='xs' />
                                    </div>
                                </div>
                                <div className='w-auto mx-1 mt-4 ' >
                                    <Textarea height='130' fontSize='xs' placeholder='Write here...' />
                                </div>
                            </div> 
                        </div> 
                    </div>
                    <div className=' w-full flex flex-row mt-4' >
                        <div className='w-full flex flex-1' />
                        <button className='h-10 px-4 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md' >SAVE</button>
                        <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray' >RESET</button>
                    </div>
                </div>
                <div className='w-full flex flex-col border-b-2 border-entries py-8' >
                    <div className='flex flex-row' >
                        <p className='flex font-Poppins-Medium text-sm '>Blog Showcase:</p>
                        <div className=' flex flex-col mt-8' > 
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Blog 1</p>
                                <div className='flex flex-row mt-1' >
                                    <div className='w-56 relative mx-1 flex items-center' > 
                                        <div className=' absolute z-10 ml-4' >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#BDBDBD"/>
                                            </svg>
                                        </div>
                                        <Input placeholder='Search blogs' paddingLeft='10' color='#828282'  fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' > 
                                        <Select placeholder='Set Tag' color='#828282'  fontSize='xs' >
                                            <option>recommended</option>
                                            <option>latest</option>
                                            <option>popular</option>
                                            <option>none</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>   
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Blog 2</p>
                                <div className='flex flex-row mt-1' >
                                    <div className='w-56 relative mx-1 flex items-center' > 
                                        <div className=' absolute z-10 ml-4' >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#BDBDBD"/>
                                            </svg>
                                        </div>
                                        <Input placeholder='Search blogs' paddingLeft='10' color='#828282'  fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' > 
                                        <Select placeholder='Set Tag' fontSize='xs' color='#828282' >
                                            <option>recommended</option>
                                            <option>latest</option>
                                            <option>popular</option>
                                            <option>none</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>  
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Blog 3</p>
                                <div className='flex flex-row mt-1' >
                                    <div className='w-56 relative mx-1 flex items-center' > 
                                        <div className=' absolute z-10 ml-4' >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#BDBDBD"/>
                                            </svg>
                                        </div>
                                        <Input placeholder='Search blogs' paddingLeft='10'color='#828282' fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' > 
                                        <Select placeholder='Set Tag' fontSize='xs' color='#828282'  >
                                            <option>recommended</option>
                                            <option>latest</option>
                                            <option>popular</option>
                                            <option>none</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>  
                        </div> 
                    </div>
                    <div className=' w-full flex flex-row mt-8' >
                        <div className='w-full flex flex-1' />
                        <button className='h-10 px-4 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md' >SAVE</button>
                        <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray' >RESET</button>
                    </div>
                </div>
                <div className='w-full flex flex-col border-b-2 border-entries py-8' >
                    <div className='flex flex-row ' >
                        <p className='flex font-Poppins-Medium text-sm '>Testimonials:</p>
                        <div className=' flex flex-col ' > 
                            <div className='flex flex-col border-b-2 border-entries py-8' >
                                <div className='w-full my-2' > 
                                    <p className='font-Poppins-Medium text-xs text-menu_gray '>Testimonial 1</p>
                                    <div className='w-full mt-2' >
                                        <Textarea height='130' fontSize='xs' placeholder='Testimony' />
                                    </div>
                                </div>
                                <div className='w-full my-4'>
                                    <p className='font-Poppins-Medium text-xs text-menu_gray '>Avatar Image:</p>
                                    <div className='flex flex-row' >
                                        <div className=' w-56 h-10 mt-1 relative' >
                                            <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                                            <img src={photo} alt='' className='w-full h-full' />
                                        </div>
                                        <button className='bg-login_buttton h-10 mt-1 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Upload</button> 
                                    </div>
                                </div>
                                <div className='w-full my-2'> 
                                    <div className='flex flex-row mt-2' >
                                        <div className='w-56 mx-1' >
                                            <Input placeholder='Name'  fontSize='xs' />
                                        </div>
                                        <div className='w-56 mx-1' >
                                            <Input placeholder='Description' fontSize='xs' />
                                        </div>
                                    </div>
                                </div>
                            </div>     
                            <div className='flex flex-col border-b-2 border-entries py-8' >
                                <div className='w-full my-2' > 
                                    <p className='font-Poppins-Medium text-xs text-menu_gray '>Testimonial 2</p>
                                    <div className='w-full mt-2' >
                                        <Textarea height='130' fontSize='xs' placeholder='Testimony' />
                                    </div>
                                </div>
                                <div className='w-full my-4'>
                                    <p className='font-Poppins-Medium text-xs text-menu_gray '>Avatar Image:</p>
                                    <div className='flex flex-row' >
                                        <div className=' w-56 h-10 mt-1 relative' >
                                            <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                                            <img src={photo} alt='' className='w-full h-full' />
                                        </div>
                                        <button className='bg-login_buttton h-10 mt-1 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Upload</button> 
                                    </div>
                                </div>
                                <div className='w-full my-2'> 
                                    <div className='flex flex-row mt-2' >
                                        <div className='w-56 mx-1' >
                                            <Input placeholder='Name'  fontSize='xs' />
                                        </div>
                                        <div className='w-56 mx-1' >
                                            <Input placeholder='Description' fontSize='xs' />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className='flex flex-col border-b-2 border-entries py-8' >
                                <div className='w-full my-2' > 
                                    <p className='font-Poppins-Medium text-xs text-menu_gray '>Testimonial 3</p>
                                    <div className='w-full mt-2' >
                                        <Textarea height='130' fontSize='xs' placeholder='Testimony' />
                                    </div>
                                </div>
                                <div className='w-full my-4'>
                                    <p className='font-Poppins-Medium text-xs text-menu_gray '>Avatar Image:</p>
                                    <div className='flex flex-row' >
                                        <div className=' w-56 h-10 mt-1 relative' >
                                            <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                                            <img src={photo} alt='' className='w-full h-full' />
                                        </div>
                                        <button className='bg-login_buttton h-10 mt-1 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Upload</button> 
                                    </div>
                                </div>
                                <div className='w-full my-2'> 
                                    <div className='flex flex-row mt-2' >
                                        <div className='w-56 mx-1' >
                                            <Input placeholder='Name'  fontSize='xs' />
                                        </div>
                                        <div className='w-56 mx-1' >
                                            <Input placeholder='Description' fontSize='xs' />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className='flex flex-col border-b-2 border-entries py-8' >
                                <div className='w-full my-2' > 
                                    <p className='font-Poppins-Medium text-xs text-menu_gray '>Testimonial 4</p>
                                    <div className='w-full mt-2' >
                                        <Textarea height='130' fontSize='xs' placeholder='Testimony' />
                                    </div>
                                </div>
                                <div className='w-full my-4'>
                                    <p className='font-Poppins-Medium text-xs text-menu_gray '>Avatar Image:</p>
                                    <div className='flex flex-row' >
                                        <div className=' w-56 h-10 mt-1 relative' >
                                            <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                                            <img src={photo} alt='' className='w-full h-full' />
                                        </div>
                                        <button className='bg-login_buttton h-10 mt-1 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Upload</button> 
                                    </div>
                                </div>
                                <div className='w-full my-2'> 
                                    <div className='flex flex-row mt-2' >
                                        <div className='w-56 mx-1' >
                                            <Input placeholder='Name'  fontSize='xs' />
                                        </div>
                                        <div className='w-56 mx-1' >
                                            <Input placeholder='Description' fontSize='xs' />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className='flex flex-col border-b-2 border-entries py-8' >
                                <div className='w-full my-2' > 
                                    <p className='font-Poppins-Medium text-xs text-menu_gray '>Testimonial 5</p>
                                    <div className='w-full mt-2' >
                                        <Textarea height='130' fontSize='xs' placeholder='Testimony' />
                                    </div>
                                </div>
                                <div className='w-full my-4'>
                                    <p className='font-Poppins-Medium text-xs text-menu_gray '>Avatar Image:</p>
                                    <div className='flex flex-row' >
                                        <div className=' w-56 h-10 mt-1 relative' >
                                            <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                                            <img src={photo} alt='' className='w-full h-full' />
                                        </div>
                                        <button className='bg-login_buttton h-10 mt-1 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Upload</button> 
                                    </div>
                                </div>
                                <div className='w-full my-2'> 
                                    <div className='flex flex-row mt-2' >
                                        <div className='w-56 mx-1' >
                                            <Input placeholder='Name'  fontSize='xs' />
                                        </div>
                                        <div className='w-56 mx-1' >
                                            <Input placeholder='Description' fontSize='xs' />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div>
                    <div className=' w-full flex flex-row mt-8' >
                        <div className='w-full flex flex-1' />
                        <button className='h-10 px-4 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md' >SAVE</button>
                        <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray' >RESET</button>
                    </div>
                </div>
                <div className='w-full flex flex-col border-b-2 border-entries py-8' >
                    <div className='flex flex-row' >
                        <p className='flex font-Poppins-Medium text-sm '>Mobile App Section:</p>
                        <div className=' flex flex-col mt-8' > 
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Mockup Image:</p>
                                <div className='flex flex-row' >
                                    <div className=' w-56 h-10 mt-1 relative' >
                                        <p className='font-Poppins-Medium absolute w-full h-full justify-center items-center flex text-white cursor-pointer text-xs '>View</p>
                                        <img src={photo} alt='' className='w-full h-full' />
                                    </div>
                                    <button className='bg-login_buttton h-10 mt-1 px-4 ml-2 text-xs font-Poppins-Medium rounded-md ' >Browse</button> 
                                </div>
                            </div>
                            <div className='flex flex-col my-4' >
                                <p className='font-Poppins-Medium text-xs text-menu_gray '>Text Content</p>
                                <div className='flex flex-row mt-2' >
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Heading'  fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Sub-heading' fontSize='xs' />
                                    </div>
                                </div> 

                                <p className='font-Poppins-Medium text-xs text-menu_gray mt-8'>Alternate Content</p>
                                <div className='flex flex-row mt-2' >
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='Play Store URL'  fontSize='xs' />
                                    </div>
                                    <div className='w-56 mx-1' >
                                        <Input placeholder='App Store URL' fontSize='xs' />
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    </div>
                    <div className=' w-full flex flex-row my-8' >
                        <div className='w-full flex flex-1' />
                        <button className='h-10 px-4 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md' >SAVE</button>
                        <button className='bg-login_buttton h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray' >RESET</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
