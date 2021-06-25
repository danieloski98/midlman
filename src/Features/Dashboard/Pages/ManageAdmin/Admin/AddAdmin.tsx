import { Select, Input, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import pic from '../../../../../assets/images/photo.png'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { url } from '../../../../../Utils/URL';

const validationSchema = yup.object({
  firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
  username: yup.string().required('This field is required'),
  phone: yup.string().required('This field is required'),
  email: yup.string().required().email('invalid email'),
  password: yup.string().required('This field is required'),
  active: yup.bool(),
})

export default function AddAdmin() {
    const [loading, setLoading] = React.useState(false);
    const history = useHistory();
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        username: '',
        phone: '',
        email: '',
        password: '',
        active: false
      },
      onSubmit: () => {},
      validationSchema,
    });

    const submit = async () => {
      if (!formik.dirty) {
        alert('You have to fill in th form to continue');
        return;
      }else if (!formik.isValid) {
        alert('You have to fill in the form correctly to continue');
        return;
      }else {
        setLoading(true);
        const request = await fetch(`${url}/admin/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formik.values),
        });

        const json = await request.json();

        if (request.status === 200) {
          alert(json.message);
          setLoading(false);
          history.goBack();
        }else {
          alert(json.message);
          setLoading(false);
        }
      }
    }

    return (
        <div className='w-full h-full flex flex-col items-center py-8 ' >
            <p className=' w-100 font-Poppins-Semibold text-lg -ml-48' >Add Admin</p>
            <div className='w-full flex flex-col items-center pt-14 pb-8' >
                <div onClick={()=> history.push('/dashboard/admin')}  className='w-100 flex flex-row cursor-pointer ' >
                    <svg width="10" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.53578 0.515015L0.0507812 9.00001L8.53578 17.485L9.95078 16.071L2.87878 9.00001L9.95078 1.92901L8.53578 0.515015Z" fill="#828282"/>
                    </svg>
                    <p className='font-Poppins-Bold text-menu_gray text-xs ml-2' >Back to Admins</p>
                </div>
                {/* <div className='w-100 py-8 flex flex-row items-center' >
                    <div className='w-16 h-16' >
                        <img src={pic} className='w-full h-full' alt='profile' />
                    </div>
                    <button className='h-10 ml-4  border-1 rounded-lg border-midlman_color font-Poppins-Medium text-xs text-midlman_color px-6' >Upload Picture</button>
                </div> */}
                <div className='w-100 flex flex-col pb-8' >
                    {/* <div className='w-full py-4' >
                        <Select fontSize='xs' placeholder='Admin Type'>
                            <option>Give me more option</option>
                        </Select>
                    </div> */}
                    <div className='w-full pt-8' >
                        <p className='font-Poppins-Semibold text-sm'>Personal Information</p>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>FIRST NAME</p>
                            <Input fontSize='xs' name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('firstName', true, true)} />
                            {
                              formik.touched.firstName && formik.errors.firstName && (
                                <p className="mt-2 text-red-500 text-sm">{formik.errors.firstName}</p>
                              )
                            }
                        </div>
                        <div className='py-2' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>LAST NAME</p>
                            <Input fontSize='xs' name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('lastName', true, true)} />
                            {
                              formik.touched.lastName && formik.errors.lastName && (
                                <p className="mt-2 text-red-500 text-sm">{formik.errors.lastName}</p>
                              )
                            }
                        </div>
                        <div className='py-2' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>USER NAME</p>
                            <Input fontSize='xs' name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('username', true, true)} />
                            {
                              formik.touched.username && formik.errors.username && (
                                <p className="mt-2 text-red-500 text-sm">{formik.errors.username}</p>
                              )
                            }
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>TELEPHONE</p>
                            <Input fontSize='xs' name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('phone', true, true)} />
                            {
                              formik.touched.phone && formik.errors.phone && (
                                <p className="mt-2 text-red-500 text-sm">{formik.errors.phone}</p>
                              )
                            }
                        </div>
                        {/* <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>ADDRESS</p>
                            <Input fontSize='xs' name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('firstName', true, true)} />
                        </div> */}
                    </div>
                    <div className='w-full py-8' >
                        <p className='font-Poppins-Semibold text-sm'>Login Information</p>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>EMAIL ADDRESS</p>
                            <Input fontSize='xs' name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('email', true, true)} />
                            {
                              formik.touched.email && formik.errors.email && (
                                <p className="mt-2 text-red-500 text-sm">{formik.errors.email}</p>
                              )
                            }
                        </div>
                        <div className='py-2' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>PASSWORD</p>
                            <Input fontSize='xs' name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('password', true, true)} />
                            {
                              formik.touched.password && formik.errors.password && (
                                <p className="mt-2 text-red-500 text-sm">{formik.errors.password}</p>
                              )
                            }
                        </div>
                    </div>
                    <div className='w-full' >
                        <p className='text-sm font-Poppins-Semibold' >STATUS</p>
                        <div className='flex flex-row  mt-3 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Active</p>
                            <label className="switch">
                                <input type="checkbox" onChange={() => formik.setFieldValue('active', !formik.values.active)}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    {/* <div className='py-8' >
                        <p className='text-xs mb-1 font-Poppins-Medium'>Attach Identification Document</p>
                        <div style={{backgroundColor:'#FAFAFA'}} className='w-full h-40 flex flex-col justify-center items-center border-dashed border-1 border-entries rounded-lg my-2' >
                            <svg className='cursor-pointer'  width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.044 14.0759C36.0972 6.61825 29.712 0.833252 21.9987 0.833252C16.0274 0.833252 10.8404 4.32375 8.4722 9.82492C3.8182 11.2159 0.332031 15.6099 0.332031 20.3333C0.332031 26.3067 5.19186 31.1666 11.1654 31.1666H34.9987C39.7784 31.1666 43.6654 27.2796 43.6654 22.4999C43.662 20.5577 43.0081 18.6727 41.8079 17.1457C40.6077 15.6188 38.9305 14.538 37.044 14.0759ZM24.1654 20.3333V26.8333H19.832V20.3333H13.332L21.9987 9.49992L30.6654 20.3333H24.1654Z" fill="#BDBDBD"/>
                            </svg>
                            <p className='text-xs text-menu_gray font-Poppins-Regular mt-6 text-center w-36' >Drag & drop files here or</p>
                            <div className='flex flex-row' >
                                <p className='text-xs text-midlman_color font-Poppins-Regular mt-1' >Click</p>
                            <p className='text-xs text-menu_gray font-Poppins-Regular mt-1 ml-1' >to upload</p>
                            </div>
                        </div>
                    </div> */}
                    <div className='w-full flex flex-row mt-6' >
                        <button onClick={submit} className='bg-midlman_color font-Poppins-Semibold text-white text-xs py-2 w-40 rounded-md mr-4' >
                          {
                            loading ?
                            <Spinner color="white" size="sm" />
                            :
                            <span>Create Admin</span>
                          }
                          </button>
                        <button onClick={() => history.goBack()} className='bg-entries font-Poppins-Semibold text-menu_gray text-xs py-3 w-40 rounded-md ml-4' >CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
