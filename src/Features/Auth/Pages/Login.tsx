import React from 'react'

// import { Input, Checkbox } from '@chakra-ui/input'
import { Input, Checkbox, Spinner, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import logo from '../../../assets/images/logo.png'
import * as yup from 'yup';
import { useFormik } from 'formik';
import useDetails from '../../../Hooks/useDetails';
import { url } from '../../../Utils/URL';
import { FiMail, FiEye, FiEyeOff, FiLock} from 'react-icons/fi'
const  Icon = require('react-eva-icons');


const validationSchema = yup.object({
  email: yup.string().email('This email is not valid').required('This field is required'),
  password: yup.string().required('This field is required').min(6, 'A minimium of 8 alphanumeric character is required')
})


export default function Login() {
    const [loading, setLoading] = React.useState(false);
    const [showpassword, setShowpassword] = React.useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = React.useState(false);
    const {setAdminDetails, setToken, adminDetails, token} = useDetails();

    const history = useHistory();
    const formik = useFormik({
      initialValues: {email: '', password: ''},
      validationSchema,
      onSubmit: () => {},
    });

    const handleCheckBox = () => {
      setKeepLoggedIn(prev => !prev);

    }

    const submit = async () => {
      if (!formik.dirty) {
        alert('You have to fill in th form to continue');
        return;
      }else if (!formik.isValid) {
        alert('You have to fill in the form correctly to continue');
        return;
      }else {
        setLoading(true);
        const request = await fetch(`${url}/admin/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formik.values),
        });

        const json = await request.json();

        if (request.status === 200) {
          // save details

          setAdminDetails(json.user);
          setToken(json.token);

          // console.log(json);
          // console.log(token);
          // check if the user wants to remain logged in

          if (keepLoggedIn) {
            // store in local storage
            localStorage.setItem('details', JSON.stringify(json.user));
            localStorage.setItem('token', json.token);
            localStorage.setItem('keeploggedin', '1');
            sessionStorage.setItem('details', JSON.stringify(json.user));
            sessionStorage.setItem('token', json.token);
            setLoading(false);

            const t1 = setTimeout(() => {
              history.push('/dashboard');
              clearTimeout(t1);
            }, 1000);


          }else {
            localStorage.removeItem('details');
            localStorage.removeItem('token');
             // store in session storage
             sessionStorage.setItem('details', JSON.stringify(json.user));
             sessionStorage.setItem('token', json.token);
             localStorage.setItem('keeploggedin', '0');
             setLoading(false);

             const t1 = setTimeout(() => {
              history.push('/dashboard');
              clearTimeout(t1);
            }, 1000);
          }

          setLoading(false);
        }else {
          alert(json.message);
          setLoading(false);
        }
      }
    }

    return (
        <div className='w-full h-screen flex flex-1 text-white items-center flex-col bg-midlman_color'>
            <img src={logo} alt='logo' className='w-40 mt-24' />
            <p className='font-Poppins-Semibold text-xl mt-14 ' >Admin</p>
            <div style={{width:'563px'}} >
                <div className='relative w-full pt-4' >

                    <InputGroup size='lg' fontSize='xs' borderRadius='lg'  backgroundColor='#00B8AD' focusBorderColor='#6071EA' borderColor='#00B8AD'>
                      <InputLeftElement children={<FiMail color="#FFF" />} />
                      <Input className='font-Poppins-Regular' size='lg' paddingLeft='14' placeholder='Email or Username' _placeholder={{ color: 'white' }} fontSize="xs"  name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('email', true, true)} />
                    </InputGroup>
                    
                    {
                      formik.touched.email && formik.errors.email && (
                        <p className="text-xs text-red-500 mt-2 font-bold">{formik.errors.email}</p>
                      )
                    }
                </div>
                <div className='relative w-full py-4' >
                    
                    <InputGroup  size='lg' fontSize='xs' borderRadius='lg'  backgroundColor='#00B8AD' focusBorderColor='#6071EA' borderColor='#00B8AD' >
                      <InputLeftElement children={<FiLock color="#FFF" className="ml-3" />} />
                      <Input type={showpassword ? 'text':'password'} className='font-Poppins-Regular' paddingLeft='14' placeholder='Password' _placeholder={{ color: 'white' }} fontSize="xs"  name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('password', true, true)}  />
                      <InputRightElement children={showpassword ? <FiEyeOff size={25} color="#FFF" onClick={() => setShowpassword(false)} /> : <FiEye onClick={() => setShowpassword(true)} size={25} color="#FFF" />} />
                    </InputGroup>
                    {
                      formik.touched.password && formik.errors.password && (
                        <p className="text-xs text-red-500 mt-2 font-bold">{formik.errors.password}</p>
                      )
                    }
                </div>
                <div className='w-full flex flex-row items-center'>
                    <Checkbox backgroundColor='white' colorScheme='white' iconColor="#00A69C" borderRadius='sm' onChange={handleCheckBox} />
                    <p className='font-Poppins-Regular text-xs ml-3' >Keep me logged in</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Poppins-Regular text-xs' >Forgot Password?</p>
                </div>
                <button disabled={loading} onClick={submit} className='font-Poppins-Bold text-md w-full bg-login_buttton py-3 text-midlman_color rounded-lg mt-24' >
                  {
                    loading ?
                    <Spinner size="md" color="green.500" />
                    :
                    <span>Login</span>
                  }
                </button>
            </div>
        </div>
    )
}
