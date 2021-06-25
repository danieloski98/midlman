import React from 'react'

// import { Input, Checkbox } from '@chakra-ui/input'
import { Input, Checkbox, Spinner } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import logo from '../../../assets/images/logo.png'
import * as yup from 'yup';
import { useFormik } from 'formik';
import useDetails from '../../../Hooks/useDetails';
import { url } from '../../../Utils/URL';

const validationSchema = yup.object({
  email: yup.string().email('This email is not valid').required('This field is required'),
  password: yup.string().required('This field is required').min(6, 'A minimium of 8 alphanumeric character is required')
})


export default function Login() {
    const [loading, setLoading] = React.useState(false);
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

          setToken(json.token);
          setAdminDetails(json.user);

          console.log(adminDetails);
          console.log(token);
          // check if the user wants to remain logged in

          if (keepLoggedIn) {
            // store in local storage
            localStorage.setItem('details', JSON.stringify(adminDetails));
            localStorage.setItem('token', token);
            localStorage.setItem('keeploggedin', '1');
            history.push('/dashboard');
            setLoading(false);
          }else {
             // store in session storage
             sessionStorage.setItem('details', JSON.stringify(adminDetails));
             sessionStorage.setItem('token', token);
             localStorage.setItem('keeploggedin', '0');
             history.push('/dashboard');
             setLoading(false);
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
            <img src={logo} alt='logo' className='w-28 mt-24' />
            <p className='font-Poppins-Semibold text-xl mt-14 ' >Admin</p>
            <div style={{width:'563px'}} >
                <div className='relative w-full pt-4' >
                    <svg className=' absolute z-10 ml-4' style={{marginTop:'14px'}}  width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.332 19.3334H2.66536C1.3767 19.3334 0.332031 18.2887 0.332031 17.0001V2.89858C0.386408 1.64972 1.41532 0.665567 2.66536 0.666749H21.332C22.6207 0.666749 23.6654 1.71142 23.6654 3.00008V17.0001C23.6654 18.2887 22.6207 19.3334 21.332 19.3334ZM2.66536 5.17942V17.0001H21.332V5.17942L11.9987 11.4001L2.66536 5.17942ZM3.5987 3.00008L11.9987 8.60008L20.3987 3.00008H3.5987Z" fill="#B4E4E1"/>
                    </svg>
                    <Input className='font-Poppins-Regular' size='lg' paddingLeft='14' placeholder='email' _placeholder={{ color: 'white' }} fontSize='xs' borderRadius='lg'  backgroundColor='#00B8AD' focusBorderColor='#6071EA' borderColor='#00B8AD' name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('email', true, true)} />
                    {
                      formik.touched.email && formik.errors.email && (
                        <p className="text-xs text-red-500 mt-2 font-bold">{formik.errors.email}</p>
                      )
                    }
                </div>
                <div className='relative w-full py-4' >
                    <svg className=' absolute z-10 ml-5' style={{marginTop:'10px'}} width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="-0.332031" y="-0.666748" width="20" height="25" fill="black">
                        <rect fill="white" x="-0.332031" y="-0.666748" width="20" height="25"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0013 16.6666C9.35728 16.6666 8.83462 16.1439 8.83462 15.4999C8.83462 14.8559 9.35728 14.3333 10.0013 14.3333C10.6453 14.3333 11.1679 14.8559 11.1679 15.4999C11.1679 16.1439 10.6453 16.6666 10.0013 16.6666ZM10.0013 11.9999C8.07166 11.9999 6.50132 13.5703 6.50132 15.4999C6.50132 17.4296 8.07166 18.9999 10.0013 18.9999C11.931 18.9999 13.5013 17.4296 13.5013 15.4999C13.5013 13.5703 11.931 11.9999 10.0013 11.9999ZM17.0013 20.1666C17.0013 20.8106 16.4787 21.3333 15.8347 21.3333H4.16799C3.52399 21.3333 3.00132 20.8106 3.00132 20.1666V10.8333C3.00132 10.1893 3.52399 9.66658 4.16799 9.66658H5.33466H7.66799H12.3347H14.668H15.8347C16.4787 9.66658 17.0013 10.1893 17.0013 10.8333V20.1666ZM7.66797 5.12942C7.66797 3.77142 8.71447 2.66659 10.0013 2.66659C11.2881 2.66659 12.3346 3.77142 12.3346 5.12942V7.33325H7.66797V5.12942ZM15.8346 7.33325H14.668V5.12942C14.668 2.48575 12.575 0.333252 10.0013 0.333252C7.42764 0.333252 5.33464 2.48575 5.33464 5.12942V7.33325H4.16797C2.2383 7.33325 0.667969 8.90358 0.667969 10.8333V20.1666C0.667969 22.0963 2.2383 23.6666 4.16797 23.6666H15.8346C17.7643 23.6666 19.3346 22.0963 19.3346 20.1666V10.8333C19.3346 8.90358 17.7643 7.33325 15.8346 7.33325Z"/>
                        </mask>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0013 16.6666C9.35728 16.6666 8.83462 16.1439 8.83462 15.4999C8.83462 14.8559 9.35728 14.3333 10.0013 14.3333C10.6453 14.3333 11.1679 14.8559 11.1679 15.4999C11.1679 16.1439 10.6453 16.6666 10.0013 16.6666ZM10.0013 11.9999C8.07166 11.9999 6.50132 13.5703 6.50132 15.4999C6.50132 17.4296 8.07166 18.9999 10.0013 18.9999C11.931 18.9999 13.5013 17.4296 13.5013 15.4999C13.5013 13.5703 11.931 11.9999 10.0013 11.9999ZM17.0013 20.1666C17.0013 20.8106 16.4787 21.3333 15.8347 21.3333H4.16799C3.52399 21.3333 3.00132 20.8106 3.00132 20.1666V10.8333C3.00132 10.1893 3.52399 9.66658 4.16799 9.66658H5.33466H7.66799H12.3347H14.668H15.8347C16.4787 9.66658 17.0013 10.1893 17.0013 10.8333V20.1666ZM7.66797 5.12942C7.66797 3.77142 8.71447 2.66659 10.0013 2.66659C11.2881 2.66659 12.3346 3.77142 12.3346 5.12942V7.33325H7.66797V5.12942ZM15.8346 7.33325H14.668V5.12942C14.668 2.48575 12.575 0.333252 10.0013 0.333252C7.42764 0.333252 5.33464 2.48575 5.33464 5.12942V7.33325H4.16797C2.2383 7.33325 0.667969 8.90358 0.667969 10.8333V20.1666C0.667969 22.0963 2.2383 23.6666 4.16797 23.6666H15.8346C17.7643 23.6666 19.3346 22.0963 19.3346 20.1666V10.8333C19.3346 8.90358 17.7643 7.33325 15.8346 7.33325Z" fill="#B4E4E1"/>
                        <path d="M12.3346 7.33325V7.53325H12.5346V7.33325H12.3346ZM7.66797 7.33325H7.46797V7.53325H7.66797V7.33325ZM14.668 7.33325H14.468V7.53325H14.668V7.33325ZM5.33464 7.33325V7.53325H5.53464V7.33325H5.33464ZM10.0013 16.4666C9.46774 16.4666 9.03462 16.0335 9.03462 15.4999H8.63462C8.63462 16.2544 9.24683 16.8666 10.0013 16.8666V16.4666ZM9.03462 15.4999C9.03462 14.9664 9.46774 14.5333 10.0013 14.5333V14.1333C9.24683 14.1333 8.63462 14.7455 8.63462 15.4999H9.03462ZM10.0013 14.5333C10.5348 14.5333 10.9679 14.9664 10.9679 15.4999H11.3679C11.3679 14.7455 10.7557 14.1333 10.0013 14.1333V14.5333ZM10.9679 15.4999C10.9679 16.0335 10.5348 16.4666 10.0013 16.4666V16.8666C10.7557 16.8666 11.3679 16.2544 11.3679 15.4999H10.9679ZM10.0013 11.7999C7.9612 11.7999 6.30132 13.4598 6.30132 15.4999H6.70132C6.70132 13.6807 8.18211 12.1999 10.0013 12.1999V11.7999ZM6.30132 15.4999C6.30132 17.54 7.9612 19.1999 10.0013 19.1999V18.7999C8.18211 18.7999 6.70132 17.3191 6.70132 15.4999H6.30132ZM10.0013 19.1999C12.0414 19.1999 13.7013 17.54 13.7013 15.4999H13.3013C13.3013 17.3191 11.8205 18.7999 10.0013 18.7999V19.1999ZM13.7013 15.4999C13.7013 13.4598 12.0414 11.7999 10.0013 11.7999V12.1999C11.8205 12.1999 13.3013 13.6807 13.3013 15.4999H13.7013ZM16.8013 20.1666C16.8013 20.7001 16.3682 21.1333 15.8347 21.1333V21.5333C16.5891 21.5333 17.2013 20.921 17.2013 20.1666H16.8013ZM15.8347 21.1333H4.16799V21.5333H15.8347V21.1333ZM4.16799 21.1333C3.63445 21.1333 3.20132 20.7001 3.20132 20.1666H2.80132C2.80132 20.921 3.41353 21.5333 4.16799 21.5333V21.1333ZM3.20132 20.1666V10.8333H2.80132V20.1666H3.20132ZM3.20132 10.8333C3.20132 10.2997 3.63445 9.86658 4.16799 9.86658V9.46659C3.41353 9.46659 2.80132 10.0788 2.80132 10.8333H3.20132ZM4.16799 9.86658H5.33466V9.46659H4.16799V9.86658ZM5.33466 9.86658H7.66799V9.46659H5.33466V9.86658ZM7.66799 9.86658H12.3347V9.46659H7.66799V9.86658ZM12.3347 9.86658H14.668V9.46659H12.3347V9.86658ZM14.668 9.86658H15.8347V9.46659H14.668V9.86658ZM15.8347 9.86658C16.3682 9.86658 16.8013 10.2997 16.8013 10.8333H17.2013C17.2013 10.0788 16.5891 9.46659 15.8347 9.46659V9.86658ZM16.8013 10.8333V20.1666H17.2013V10.8333H16.8013ZM7.86797 5.12942C7.86797 3.87155 8.83498 2.86659 10.0013 2.86659V2.46659C8.59396 2.46659 7.46797 3.67129 7.46797 5.12942H7.86797ZM10.0013 2.86659C11.1676 2.86659 12.1346 3.87155 12.1346 5.12942H12.5346C12.5346 3.67129 11.4086 2.46659 10.0013 2.46659V2.86659ZM12.1346 5.12942V7.33325H12.5346V5.12942H12.1346ZM12.3346 7.13325H7.66797V7.53325H12.3346V7.13325ZM7.86797 7.33325V5.12942H7.46797V7.33325H7.86797ZM15.8346 7.13325H14.668V7.53325H15.8346V7.13325ZM14.868 7.33325V5.12942H14.468V7.33325H14.868ZM14.868 5.12942C14.868 2.38053 12.6906 0.133252 10.0013 0.133252V0.533252C12.4593 0.533252 14.468 2.59097 14.468 5.12942H14.868ZM10.0013 0.133252C7.31202 0.133252 5.13464 2.38053 5.13464 5.12942H5.53464C5.53464 2.59097 7.54326 0.533252 10.0013 0.533252V0.133252ZM5.13464 5.12942V7.33325H5.53464V5.12942H5.13464ZM5.33464 7.13325H4.16797V7.53325H5.33464V7.13325ZM4.16797 7.13325C2.12785 7.13325 0.467969 8.79313 0.467969 10.8333H0.867969C0.867969 9.01404 2.34876 7.53325 4.16797 7.53325V7.13325ZM0.467969 10.8333V20.1666H0.867969V10.8333H0.467969ZM0.467969 20.1666C0.467969 22.2067 2.12785 23.8666 4.16797 23.8666V23.4666C2.34876 23.4666 0.867969 21.9858 0.867969 20.1666H0.467969ZM4.16797 23.8666H15.8346V23.4666H4.16797V23.8666ZM15.8346 23.8666C17.8748 23.8666 19.5346 22.2067 19.5346 20.1666H19.1346C19.1346 21.9858 17.6538 23.4666 15.8346 23.4666V23.8666ZM19.5346 20.1666V10.8333H19.1346V20.1666H19.5346ZM19.5346 10.8333C19.5346 8.79313 17.8748 7.13325 15.8346 7.13325V7.53325C17.6538 7.53325 19.1346 9.01404 19.1346 10.8333H19.5346Z" fill="#B4E4E1" mask="url(#path-1-outside-1)"/>
                    </svg>
                    <Input className='font-Poppins-Regular' size='lg' paddingLeft='14' placeholder='Password' _placeholder={{ color: 'white' }} fontSize='xs' borderRadius='lg'  backgroundColor='#00B8AD' focusBorderColor='#6071EA' borderColor='#00B8AD' name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('password', true, true)}  />
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
                <button disabled={loading} onClick={submit} className='font-Poppins-Bold text-sm w-full bg-login_buttton py-3 text-midlman_color rounded-lg mt-24' >
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
