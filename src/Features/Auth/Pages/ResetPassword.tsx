import React from 'react'

// import { Input, Checkbox } from '@chakra-ui/input'
import { Input, Spinner, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { url } from '../../../Utils/URL';
import { FiMail, FiEye, FiEyeOff, FiLock } from 'react-icons/fi'
import SuccessModal from '../../Modals/SuccessModal';


const validationSchema = yup.object({
  newpassword: yup.string().min(8, 'Minimium length of 8 character').required('This fields is required'),
  confirmpassword: yup.string().min(8, 'Minimium length of 8 character').required('This fields is required'),
})


export default function ResetPassword() {
    const [loading, setLoading] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [text, setText]= React.useState('');
    const [pass1, setPass1] = React.useState(false);
    const [pass2, setPass2] = React.useState(false);

    const history = useHistory();

    const formik = useFormik({
      initialValues: {newpassword: '', confirmpassword: ''},
      validationSchema,
      onSubmit: () => {},
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
        const request = await fetch(`${url}/admin/auth/change/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formik.values),
        });

        const json = await request.json();

        if (request.status === 200) {
          // save details
          setLoading(false);
          setText('Password Reset successful!')
          setShowModal(true);
        }else {
          setText(json.message);
          alert(json.message);
          setLoading(false);
        }
      }
    }

    return (
        <div className='w-full h-screen flex flex-1 text-white items-center justify-center flex-col bg-midlman_color'>
            <SuccessModal open={showModal} onClose={() => setShowModal(false)} text={text} />
            <div style={{width:'563px'}} className="mb-6">
                <p className='font-Poppins-Semibold text-xl mt-14 text-left' >Reset Password</p>
            </div>

            <div style={{width:'563px'}} >
                <div className='relative w-full pt-4' >

                    <InputGroup size='lg' fontSize='xs' borderRadius='lg'  backgroundColor='#00B8AD' focusBorderColor='#6071EA' borderColor='#00B8AD'>
                      <InputLeftElement children={<FiLock color="#FFF" />} />
                      <Input type={pass1 ? 'text':'password'} className='font-Poppins-Regular' size='lg' paddingLeft='14' placeholder='New Password' _placeholder={{ color: 'white' }} fontSize="xs"  name="newpassword" value={formik.values.newpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('newpassword', true, true)} />
                      <InputRightElement children={pass1 ? <FiEye size={20} color="white" onClick={() => setPass1(prev => !prev)} /> : <FiEyeOff size={20} color="white" onClick={() => setPass1(prev => !prev)} /> }  />
                    </InputGroup>
                    
                    {
                      formik.touched.newpassword && formik.errors.newpassword && (
                        <p className="text-xs text-red-500 mt-2 font-bold">{formik.errors.newpassword}</p>
                      )
                    }
                </div>

                <div className='relative w-full pt-4 mt-0' >

                    <InputGroup size='lg' fontSize='xs' borderRadius='lg'  backgroundColor='#00B8AD' focusBorderColor='#6071EA' borderColor='#00B8AD'>
                      <InputLeftElement children={<FiLock color="#FFF" />} />
                      <Input type={pass2 ? 'text':'password'} className='font-Poppins-Regular' size='lg' paddingLeft='14' placeholder='Confirm New Password' _placeholder={{ color: 'white' }} fontSize="xs"  name="confirmpassword" value={formik.values.confirmpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('confirmpassword', true, true)} />
                      <InputRightElement children={pass2 ? <FiEye size={20} color="white" onClick={() => setPass2(prev => !prev)} /> : <FiEyeOff size={20} color="white" onClick={() => setPass2(prev => !prev)} /> }  />
                    </InputGroup>
                    
                    {
                      formik.touched.confirmpassword && formik.errors.confirmpassword && (
                        <p className="text-xs text-red-500 mt-2 font-bold">{formik.errors.confirmpassword}</p>
                      )
                    }
                </div>
                
        
                <button disabled={loading} onClick={submit} className='font-Poppins-Bold text-sm w-full bg-login_buttton py-3 text-midlman_color rounded-lg mt-8' >
                  {
                    loading ?
                    <Spinner size="md" color="green.500" />
                    :
                    <span>Save</span>
                  }
                </button>

            </div>
        </div>
    )
}
