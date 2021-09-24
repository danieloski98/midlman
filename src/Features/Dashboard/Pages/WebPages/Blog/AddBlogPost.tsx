import React from 'react';
import { Input, Select } from '@chakra-ui/react'
import Editor from '../Component/Editor'; 
import { useHistory } from 'react-router-dom';
import LoadingModal from '../../../../Modals/LoadingModal';
import useDetails from '../../../../../Hooks/useDetails';
import { url } from '../../../../../Utils/URL';

export default function AddBlogPost() {  
    const [body, setBody] = React.useState('');
    const [header, setHeader] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const { token } = useDetails();
    
    const history = useHistory() 
    const edit = (str: string) => {
        setBody(str);
    }

    const submit = async() => {
        if (header === '' || body === '') {
            alert('Please filling the forms properly');
            return;
        }
        // make request
        setLoading(true);
        const request = await fetch(`${url}/blog/create`, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ heading: header, content: body})
        });
        const json = await request.json();
        setLoading(false);

        if (!request.ok) {
            alert('An Error Occured');
            return;
        }

        alert('Post created');
        console.log(json);
        history.push('/dashboard/blog');
    }
    return (
        <div className='w-full h-full flex flex-col items-center' >
            <LoadingModal open={loading} text="Creating content" onClose={() => setLoading(false)} />
            <div style={{width:'650px'}} className='pt-8 pb-12' > 
                <div className='w-full flex flex-row items-center' >
                    <p className='font-Poppins-Semibold text-lg ' >Add New Blog</p>
                </div> 
                <div className='w-full mt-12 pl-20' >
                    <p className='font-Poppins-Medium text-sm mt-4'>Heading</p>
                    <div className='w-100 my-2 ' >  
                        <Input fontSize='xs' placeholder='Name' marginRight='2' value={header} onChange={(e) => setHeader(e.target.value)} />
                    </div>
                    <p className='font-Poppins-Medium text-sm mt-4'>Article</p>
                    <div className='w-100 my-2 ' >
                        <Editor editing={edit}/> 
                    </div> 
                    {/* <p className='font-Poppins-Medium text-sm mt-4'>Heading</p>
                    <div className='w-100 my-2 ' >    
                        <Select fontSize='xs' color='#828282' placeholder='Tags'>
                            <option>Recommended</option>
                            <option>Latest</option>
                            <option>Popular</option>
                            <option>None</option>
                        </Select>
                    </div> */}
                    <div className=' w-100 flex flex-row py-10 justify-center mt-24' >
                        <button onClick={submit} className='h-10 px-10 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md mx-4' >SUBMIT</button> 
                        <button onClick={()=> history.push('/dashboard/blog')} className='bg-login_buttton h-10 px-10 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray mx-4' >CANCEL</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}
