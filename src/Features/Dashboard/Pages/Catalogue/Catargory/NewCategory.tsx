import { Input, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { url } from '../../../../../Utils/URL';
import useDetails from '../../../../../Hooks/useDetails';

// validation schema
const validationSchema = yup.object({
    name: yup.string().required('This field is required'),
})

export default function NewCategory() {
    const fileReader1 = React.useRef(new FileReader()).current;
    const fileReader2 = React.useRef(new FileReader()).current;
    
    const history = useHistory();
    // hooks
    const { token } = useDetails();

    const formik = useFormik({
        initialValues: {name: ''},
        onSubmit: () => {},
        validationSchema
    });


    // states
    const [coverImage, setCoverImage] = React.useState(null as any);
    const [icon, setIcon] = React.useState(null as any);
    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState(false);

     // effects
     React.useEffect(() => {
        fileReader1.addEventListener('load', () => {
             setCoverImage(fileReader1.result);
         })
  
         fileReader2.addEventListener('load', () => {
             setIcon(fileReader2.result)
         })
  
         return () => {
             fileReader1.removeEventListener('load', () => {});
             fileReader2.removeEventListener('load', () => {});
         }
      })

    // functions

    const goback = () => {
        history.goBack();
    }

    const pickCoverImage = () => {
        const picker = document.getElementById('picker1');
        picker?.click();
    }

    const onCoverPicked = (file: FileList) => {
        console.log(file[0])
        fileReader1.readAsDataURL(file[0]);
    }

    const pickIcon = () => {
        const picker = document.getElementById('picker2');
        picker?.click();
    }

    const onIconPicked = (file: FileList) => {
        console.log(file[0])
        fileReader2.readAsDataURL(file[0]);
    }

    const submit = async () => {
        if (!formik.isValid) {
            alert('Please fill in the form correcrly');
            return;
        }

        if (!formik.dirty) {
            alert('You have to fill in the form to continue');
            return;
        }

        if (coverImage === null || icon === null) {
            alert('you have to pick the images to continue');
            return;
        }
        setLoading(true);
        // make request
        const request = await fetch(`${url}/category`, {
            method: 'post',
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: formik.values.name,
                coverImage,
                icon,
                status,
            })
        });
        const json = await request.json() as any;
        setLoading(false);

        if (request.status !== 200) {
            alert(json.message);
        }else {
            alert('Category created successfully');
            history.goBack();
        }
    }

    return (
        <div className='w-full h-full flex flex-col items-center py-8 ' >  
            <input type="file" accept="image/*" id="picker1" hidden onChange={(e) => {onCoverPicked(e.target.files as FileList)}} />
            <input type="file" accept="image/*" id="picker2" hidden onChange={(e) => {onIconPicked(e.target.files as FileList)}} />
            <p className=' w-100 font-Poppins-Semibold text-lg -ml-48' >New Category</p>   
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
                            <Input fontSize='xs' name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleChange} onFocus={() => formik.setFieldTouched('name', true, true)} />
                            {formik.touched.name && formik.errors.name && (<p className="text-xs text-red-400 mt-2">{formik.errors.name}</p>)}
                        </div> 
                        <div className=' w-full py-2' > 
                            <p className='font-Poppins-Semibold text-xs mb-1'>COVER IMAGE</p>
                            <div className='flex flex-row items-center'>
                                <div className='w-40 rounded-md h-16 border-1 border-entries'>
                                    {coverImage !== null && (<img src={coverImage} alt="coverimage" className="w-full h-full object-cover" />)}
                                </div>
                                <button className=' ml-4 border-1 h-12 border-midlman_color text-midlman_color font-Poppins-Semibold text-xs w-auto px-8 rounded-md' onClick={pickCoverImage} >Upload Cover Image</button>
                            </div> 
                            <p className='font-Poppins-Regular text-xs mt-1'>Use image size: 350 X 500px</p>
                        </div> 
                        <div className=' w-full py-2' > 
                            <p className='font-Poppins-Semibold text-xs mb-1'>ICON</p>
                            <div className='flex flex-row items-center'>
                                <div className='w-40 rounded-md h-16 border-1 border-entries'>
                                    {icon !== null && (<img src={icon} alt="coverimage" className="w-full h-full object-cover" />)}
                                </div>
                                <button className=' ml-4 border-1 h-12 border-midlman_color text-midlman_color font-Poppins-Semibold text-xs w-auto px-8 rounded-md' onClick={pickIcon} >Upload Icon</button>
                            </div> 
                            <p className='font-Poppins-Regular text-xs mt-1'>Use image size: 350 X 500px</p>
                        </div> 
                    </div>  
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold' >STATUS</p>
                        <div className='flex flex-row  mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Active</p>
                            <label className="switch">
                                <input type="checkbox" onChange={() => setStatus(prev => !prev)}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div> 
                    <div className='w-full flex flex-row pt-12' >
                        <button onClick={submit} className='bg-midlman_color font-Poppins-Semibold text-white text-xs py-3 w-full rounded-md mr-4' >
                        {
                               loading ?
                               <Spinner size="sm" />
                               :
                               <span>ADD</span>
                           }
                        </button>
                        <button onClick={goback} className='py-3 text-xs font-Poppins-Semibold text-menu_gray bg-entries rounded-md w-full mx-4' >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
