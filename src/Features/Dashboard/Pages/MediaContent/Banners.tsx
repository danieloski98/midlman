import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { url } from '../../../../Utils/URL';

export default function Banners() {
    // states
    const [file, setFile] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const fileReader = React.useRef(new FileReader()).current;
    const picker = document.getElementById('picker');

    // effects
    React.useEffect(() => {
        fileReader.addEventListener('load', () => {
            setFile(fileReader.result as string);
        })
         return () => {
             fileReader.removeEventListener('load', () => console.log('removed'));
         }
    }, [fileReader])

    const handlePick = (e: any) => {
        const file = e.target.files[0];
        fileReader.readAsDataURL(file);
    }

    const submit = async() => {
        if (file === '') {
            alert('Please select a file');
            return;
        }
        setLoading(true);
        
        const request = await fetch(`${url}/content/add`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ banners: file })
        });

        const json= await request.json();
        setLoading(false);
        if (!request.ok) {  
            alert(json.message);
        }else {
            alert('Banner Added');
            setFile("");
        }
    }

    return (
        <div className='w-full h-full flex flex-col items-center' > 
            <input type="file" accept="image/*" hidden id="picker" onChange={handlePick} />
            <div className='pt-8 pb-12' >  
                <p className='font-Poppins-Semibold text-lg ' >Banners</p>
                <div className='w-full py-12 px-20' >
                    {/* <p className='font-Poppins-Medium text-sm mt-4'>BANNER 1</p> */}
                    <div onClick={() => picker?.click()} style={{backgroundColor:'#FAFAFA'}} className='w-96 rounded-lg h-40 flex flex-col items-center justify-center border-dashed  border-1 border-entries my-2 cursor-pointer'  >
                       {
                           file === "" ?
                           <>
                                <svg className='cursor-pointer'  width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.044 14.0759C36.0972 6.61825 29.712 0.833252 21.9987 0.833252C16.0274 0.833252 10.8404 4.32375 8.4722 9.82492C3.8182 11.2159 0.332031 15.6099 0.332031 20.3333C0.332031 26.3067 5.19186 31.1666 11.1654 31.1666H34.9987C39.7784 31.1666 43.6654 27.2796 43.6654 22.4999C43.662 20.5577 43.0081 18.6727 41.8079 17.1457C40.6077 15.6188 38.9305 14.538 37.044 14.0759ZM24.1654 20.3333V26.8333H19.832V20.3333H13.332L21.9987 9.49992L30.6654 20.3333H24.1654Z" fill="#BDBDBD"/>
                                </svg>
                                <p className='text-xs text-midlman_color font-Poppins-Medium mt-1' >Browse</p>
                           </>
                           :
                           <img src={file} alt="" className="w-full h-full object-contain" />
                       }
                    </div>
                    {/* <p className='font-Poppins-Medium text-sm mt-4'>URL</p>
                    <div className='w-full my-2 ' >
                        <Input fontSize='xs' paddingLeft='10' />
                    </div> */}
                 
                    <div className='w-full flex flex-row justify-center items-center py-10' >
                         <button onClick={submit} className='py-3 bg-midlman_color font-Poppins-Semibold text-sm px-12 text-white rounded-md mx-4' >
                             {
                                 loading ?
                                 <Spinner size="md" color="white" />
                                 :
                                 <p>SUBMIT</p>
                             }
                         </button> 
                         <button className='py-3 bg-entries font-Poppins-Semibold text-sm px-12 text-menu_gray rounded-md mx-4'>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
