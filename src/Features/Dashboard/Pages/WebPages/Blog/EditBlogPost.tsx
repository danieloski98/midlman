import React from 'react'
import { Input } from '@chakra-ui/react'
import Editor from '../Component/Editor'; 
import { useHistory, useParams } from 'react-router-dom';
import { IPost } from '../../../../../Types/Post';
import { url } from '../../../../../Utils/URL';
import useDetails from '../../../../../Hooks/useDetails';
import LoadingModal from '../../../../Modals/LoadingModal';

export default function EditBlogPost() {
    const [post, setPost] = React.useState({} as IPost);
    const [content, setContent] = React.useState('');
    const history = useHistory() 
    const params = useParams<{id: string}>()
    const {token} = useDetails();
    const [loading, setLoading] = React.useState(true);
    const [text, setText] = React.useState('Getting Post');

    // effect
    React.useMemo(() => {
        (async function() {
            console.log(params);
            const request = await fetch(`${url}/blog/${params['id']}`, {
                method: 'get',
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            const json = await request.json();
            console.log(json);
            setPost(json.response);
            setContent(json.response.content);
            setLoading(false);

        })();
    }, [params, token]);

    const edit = (str: string) => {
        post.heading = str;
        setPost({ ...post, heading: str});
    }

    const editContent = (str: string) => {
        setContent(str);
    }


    const submit = async() => {
        if (post.heading === '' || post.content === '') {
            alert('Please filling the forms properly');
            return;
        }
        // make request
        setLoading(true);
        setText("Editing Post")
        const request = await fetch(`${url}/blog/update/${post._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(post)
        });
        const json = await request.json();
        setLoading(false);

        if (!request.ok) {
            alert(json.message? json.message: 'An error occured');
            return;
        }

        alert('Post created');
        console.log(json);
        history.push('/dashboard/blog');
    }

    return (
        <div className='w-full h-full flex flex-col items-center' >
            <LoadingModal open={loading} onClose={() => setLoading(false)} text={text} />
            <div style={{width:'650px'}} className='pt-8 pb-12' > 
                <div className='w-full flex flex-row items-center' >
                    <p className='font-Poppins-Semibold text-lg ' >Edit New Blog</p>
                </div> 
                <div className='w-full mt-12 pl-20' >
                    <p className='font-Poppins-Medium text-sm mt-4'>Heading</p>
                    <div className='w-100 my-2 ' >  
                        <Input fontSize='xs' placeholder='Name' marginRight='2' value={post.heading} onChange={(e) => edit(e.target.value)} />
                    </div>
                    <p className='font-Poppins-Medium text-sm mt-4'>Article</p>
                    <div className='w-100 my-2 ' >
                        <Editor value={content} editing={editContent} /> 
                    </div>  
                    <div className=' w-100 flex flex-row py-10 justify-center mt-24' >
                        <button onClick={submit} className='h-10 px-10 text-xs font-Poppins-Medium bg-midlman_color text-white rounded-md mx-4' >SUBMIT</button> 
                        <button onClick={()=> history.push('/dashboard/blog')} className='bg-login_buttton h-10 px-10 ml-2 text-xs font-Poppins-Medium rounded-md text-menu_gray mx-4' >CANCEL</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}
