import { Textarea } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router'

export default function FAQ() {

    const history = useHistory()    

    return (
        <div className='w-full h-full flex flex-col items-center' >
            <div style={{width:'650px'}} className='pt-8 pb-12' > 
                <div className='w-full flex flex-row items-center' >
                    <p className='font-Poppins-Semibold text-lg ' >Frequently Asked Questions</p>
                    <div className='w-full flex flex-1' /> 
                    <button onClick={()=> history.push('/dashboard/editfaq')} className='bg-midlman_color text-white h-10 px-4 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray' >Edit</button>
                </div> 
                <div className='w-full pl-20' >
                    <p className='font-Poppins-Medium text-sm mt-4'>QUESTION</p>
                    <div className='w-100 my-2 ' >
                        <Textarea height='130' fontSize='xs' placeholder='Write here...' />
                    </div>
                    <p className='font-Poppins-Medium text-sm mt-4'>ANSWER</p>
                    <div className='w-100 my-2 ' >
                        <Textarea height='130' fontSize='xs' placeholder='Write here...' />
                    </div> 
                    <div className=' w-100 flex flex-row items-center py-8 justify-end' >
                        <svg className='mr-2' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="#00A69C"/>
                        </svg> 
                        <p className='ml-1 font-Poppins-Medium text-xs text-midlman_color'>Add</p>
                    </div>
                    <div className=' w-100 flex flex-row py-10 justify-center ' >
                        <button className='h-10 px-10 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md mx-4' >SUBMIT</button> 
                        <button className='bg-login_buttton h-10 px-10 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray mx-4' >CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
