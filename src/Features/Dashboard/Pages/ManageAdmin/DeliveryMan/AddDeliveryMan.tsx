import { Select, Input, Spinner } from '@chakra-ui/react';
import React from 'react'
import { useHistory } from 'react-router-dom';
import pic from '../../../../../assets/images/photo.png'
import { useFormik  } from 'formik'
import * as yup from 'yup';
import { url } from '../../../../../Utils/URL';

const validationSchema = yup.object({
    firstName: yup.string().required('This field is required'),
    lastName: yup.string().required(),
    middleName: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email('Invalid email').required(),
    password: yup.string().required().min(8, 'cannot be less than 8 charaters'),
    phone: yup.string().required(),
    vehicleNumber: yup.string(),
});

export default function AddDeliveryMan() {
    const fileReader = React.useRef(new FileReader()).current;

    // states
    const [photo, setPhoto] = React.useState('');
    const [guarrantor, setGuarrantor] = React.useState('');
    const [verification, setVerification] = React.useState('');
    const [opener, setOpener] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    // formik
    const formik = useFormik({
        initialValues: { firstName: '', lastName: '', middleName: '', username: '', password: '', phone: '', vehicleNumber: '', email: '', },
        validationSchema,
        onSubmit: () => {},
    })
    
    const history = useHistory();

    // effects
    React.useEffect(() => {
        fileReader.addEventListener('load', () => {
            switch(opener) {
                case 1: {
                    setPhoto(fileReader.result as string);
                    setOpener(0)
                    break;
                }
                case 2: {
                    setVerification(fileReader.result as string);
                    setOpener(0)
                    break;
                }
                case 3: {
                    setGuarrantor(fileReader.result as string);
                    setOpener(0)
                    break;
                }
            }
        })

        return () => {
            fileReader.removeEventListener('load', () => {console.log('done')});
        }
    }, [fileReader, opener])

    const pick = (e: any) => {
        const file = e.target.files[0];
        fileReader.readAsDataURL(file);
    }

    const open = (openner: number) => {
        setOpener(openner);
        document.getElementById('picker')?.click();
    }

    const submit = async () => {
        if (!formik.dirty) {
            alert('Please fillin the form to continue');
            return;
        }
        if ( !formik.isValid) {
            alert('Please fillin the form properly');
            return;
        }

        // construct the object
        const obj = {
            photo,
            ...formik.values,
            deliveryManDocs: {
                vehicleNumber: formik.values.vehicleNumber,
                verification: verification,
                guarrantor: guarrantor,
            }
        }
        setLoading(true);
         // make the request
         const request = await fetch(`${url}/admin/add/delivery/man`, {
             method: 'post',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(obj),
         });

         const json = await request.json();
         setLoading(false);

         if (!request.ok) {
             alert(json.message);
         }else {
             alert('Deliveryman created');
             history.goBack();
         }

       
    }

    return (
        <div className='w-full h-full flex flex-col items-center py-8 ' >  
            <input type="file" accept="image/*" onChange={pick} id='picker' hidden />
            <p className=' w-100 font-Poppins-Semibold text-lg -ml-48' >Add Delivery Man</p> 
            <div className='w-full flex flex-col items-center pt-14 pb-8' >
                <div onClick={()=> history.push('/dashboard/delivery')}  className='w-100 flex flex-row cursor-pointer ' >
                    <svg width="10" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.53578 0.515015L0.0507812 9.00001L8.53578 17.485L9.95078 16.071L2.87878 9.00001L9.95078 1.92901L8.53578 0.515015Z" fill="#828282"/>
                    </svg> 
                    <p className='font-Poppins-Bold text-menu_gray text-xs ml-2' >Back to Delivery</p>
                </div>
                <div className='w-100 py-8 flex flex-row items-center' >
                    <div className='w-16 h-16' >  
                        <img src={photo === '' ? pic:photo} className='w-full h-full' alt='profile' />
                    </div>
                    <button onClick={() => open(1)} className='h-10 ml-4  border-1 rounded-lg border-midlman_color font-Poppins-Medium text-xs text-midlman_color px-6' >Upload Picture</button>
                </div>
                <div className='w-100 flex flex-col pb-8' > 
                    <div className='w-full pt-8' >
                        <p className='font-Poppins-Semibold text-sm'>Personal Information</p>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>FIRST NAME</p>
                            <Input fontSize='xs' name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.touched.firstName && formik.errors.firstName && (
                                    <p className="text-red-400 text-md mt-2">{formik.errors.firstName}</p>
                                )
                            }
                        </div>
                        <div className='py-2' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>LAST NAME</p>
                            <Input fontSize='xs' name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.touched.lastName && formik.errors.lastName && (
                                    <p className="text-red-400 text-md mt-2">{formik.errors.lastName}</p>
                                )
                            }
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>VEHICLE NUMBER</p>
                            <Input fontSize='xs' name="vehicleNumber" value={formik.values.vehicleNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.touched.vehicleNumber && formik.errors.vehicleNumber && (
                                    <p className="text-red-400 text-md mt-2">{formik.errors.vehicleNumber}</p>
                                )
                            }
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>PHONE</p>
                            <Input fontSize='xs' name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.touched.phone && formik.errors.phone && (
                                    <p className="text-red-400 text-md mt-2">{formik.errors.phone}</p>
                                )
                            }
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>MIDDLENAME</p>
                            <Input fontSize='xs' name="middleName" value={formik.values.middleName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.touched.middleName && formik.errors.middleName && (
                                    <p className="text-red-400 text-md mt-2">{formik.errors.middleName}</p>
                                )
                            }
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>USERNAME</p>
                            <Input fontSize='xs' name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.touched.username && formik.errors.username && (
                                    <p className="text-red-400 text-md mt-2">{formik.errors.username}</p>
                                )
                            }
                        </div>
                    </div> 
                    <div className='w-full py-8' >
                        <p className='font-Poppins-Semibold text-sm'>Login Information</p>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>EMAIL ADDRESS</p>
                            <Input fontSize='xs' name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.touched.email && formik.errors.email && (
                                    <p className="text-red-400 text-md mt-2">{formik.errors.email}</p>
                                )
                            }
                        </div>
                        <div className='py-2' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>PASSWORD</p>
                            <Input type="password" fontSize='xs' name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.touched.password && formik.errors.password && (
                                    <p className="text-red-400 text-md mt-2">{formik.errors.password}</p>
                                )
                            }
                        </div> 
                        {/* <div className='py-2' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>CONFIRM PASSWORD</p>
                            <Input fontSize='xs'/>
                        </div>  */}
                        <div className='py-2' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>SELECT VERIFICATION DOCUMENT TYPE</p>
                            <Select fontSize='xs' placeholder='Document Type'> 
                                <option>Driver’s Liscence</option>
                                <option>Voter’s Card</option>
                                <option>National Identity Card</option>
                            </Select>
                        </div> 
                        <div className='py-4' > 
                            <p className='text-xs mb-1 font-Poppins-Medium'>Attach Verification Document</p>
                            <div onClick={() => open(2)} style={{backgroundColor:'#FAFAFA'}} className='w-full h-40 flex flex-col justify-center items-center border-dashed border-1 border-entries rounded-lg my-2 cursor-pointer' >
                                {
                                    verification === '' ?
                                    <>
                                    `<svg className='cursor-pointer'  width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.044 14.0759C36.0972 6.61825 29.712 0.833252 21.9987 0.833252C16.0274 0.833252 10.8404 4.32375 8.4722 9.82492C3.8182 11.2159 0.332031 15.6099 0.332031 20.3333C0.332031 26.3067 5.19186 31.1666 11.1654 31.1666H34.9987C39.7784 31.1666 43.6654 27.2796 43.6654 22.4999C43.662 20.5577 43.0081 18.6727 41.8079 17.1457C40.6077 15.6188 38.9305 14.538 37.044 14.0759ZM24.1654 20.3333V26.8333H19.832V20.3333H13.332L21.9987 9.49992L30.6654 20.3333H24.1654Z" fill="#BDBDBD"/>
                                        </svg>
                                        {/* <p className='text-xs text-menu_gray font-Poppins-Regular mt-6 text-center w-36' >Drag & drop files here or</p>  */}
                                        <div className='flex flex-row' >
                                            <p className='text-xs text-midlman_color font-Poppins-Regular mt-1' >Click</p> 
                                        <p className='text-xs text-menu_gray font-Poppins-Regular mt-1 ml-1' >to upload</p> 
                                        </div>`
                                    </>
                                    :
                                    <div className="w-full h-full">
                                        <img src={verification} alt="verification" className="w-full h-full" />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='py-4' > 
                            <p className='text-xs mb-1 font-Poppins-Medium'>Attach Guarrantor’s Form</p>
                            <div onClick={() => open(3)} style={{backgroundColor:'#FAFAFA'}} className='w-full h-40 flex flex-col justify-center items-center border-dashed border-1 border-entries rounded-lg my-2 cursor-pointer' >
                            {
                                    guarrantor === '' ?
                                    <>
                                    `<svg className='cursor-pointer'  width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.044 14.0759C36.0972 6.61825 29.712 0.833252 21.9987 0.833252C16.0274 0.833252 10.8404 4.32375 8.4722 9.82492C3.8182 11.2159 0.332031 15.6099 0.332031 20.3333C0.332031 26.3067 5.19186 31.1666 11.1654 31.1666H34.9987C39.7784 31.1666 43.6654 27.2796 43.6654 22.4999C43.662 20.5577 43.0081 18.6727 41.8079 17.1457C40.6077 15.6188 38.9305 14.538 37.044 14.0759ZM24.1654 20.3333V26.8333H19.832V20.3333H13.332L21.9987 9.49992L30.6654 20.3333H24.1654Z" fill="#BDBDBD"/>
                                        </svg>
                                        {/* <p className='text-xs text-menu_gray font-Poppins-Regular mt-6 text-center w-36' >Drag & drop files here or</p>  */}
                                        <div className='flex flex-row' >
                                            <p className='text-xs text-midlman_color font-Poppins-Regular mt-1' >Click</p> 
                                        <p className='text-xs text-menu_gray font-Poppins-Regular mt-1 ml-1' >to upload</p> 
                                        </div>`
                                    </>
                                    :
                                    <div className="w-full h-full">
                                        <img src={guarrantor} alt="verification" className="w-full h-full" />
                                    </div>
                                }
                            </div>
                        </div>
                    </div> 
                    <div className='w-full pb-8' >
                        <p className='text-sm font-Poppins-Semibold' >STATUS</p>
                        <div className='flex flex-row  mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Active</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full flex flex-row' >
                        <button onClick={submit} className='bg-midlman_color font-Poppins-Semibold text-white text-xs py-3 w-full rounded-md mr-4' >
                            {
                                loading && <Spinner size="md" color="white" />
                            }
                            {
                                !loading && <span>Upload Product</span>
                            }
                        </button>
                        <button onClick={() => history.goBack()} className='bg-entries font-Poppins-Semibold text-menu_gray text-xs py-3 w-full rounded-md ml-4' >CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
