import React from 'react';
import { Input, Select } from '@chakra-ui/react'
import Editor from '../Component/Editor'; 
import { useHistory } from 'react-router-dom';

export default function AddBlogPost() {  
    
    const history = useHistory() 

    return (
        <div className='w-full h-full flex flex-col items-center' >
            <div style={{width:'650px'}} className='pt-8 pb-12' > 
                <div className='w-full flex flex-row items-center' >
                    <p className='font-Poppins-Semibold text-lg ' >Add New Blog</p>
                </div> 
                <div className='w-full mt-12 pl-20' >
                    <p className='font-Poppins-Medium text-sm mt-4'>Heading</p>
                    <div className='w-100 my-2 ' >  
                        <Input fontSize='xs' placeholder='Name' marginRight='2' />
                    </div>
                    <p className='font-Poppins-Medium text-sm mt-4'>Article</p>
                    <div className='w-100 my-2 ' >
                        <Editor/> 
                    </div> 
                    <p className='font-Poppins-Medium text-sm mt-4'>Heading</p>
                    <div className='w-100 my-2 ' >    
                        <Select fontSize='xs' color='#828282' placeholder='Tags'>
                            <option>Recommended</option>
                            <option>Latest</option>
                            <option>Popular</option>
                            <option>None</option>
                        </Select>
                    </div>
                    <div className=' w-100 flex flex-row py-10 justify-center ' >
                        <button onClick={()=> history.push('/dashboard/blog')} className='h-10 px-10 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md mx-4' >SUBMIT</button> 
                        <button onClick={()=> history.push('/dashboard/blog')} className='bg-login_buttton h-10 px-10 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray mx-4' >CANCEL</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}
