import React from 'react'

// import { Input, Checkbox } from '@chakra-ui/input'
import { Input, Spinner, InputGroup, InputLeftElement, } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { url } from '../../../Utils/URL';
import { FiMail } from 'react-icons/fi'
import SuccessModal from '../../Modals/SuccessModal';


const validationSchema = yup.object({
  email: yup.string().email('This email is not valid').required('This field is required'),
})


export default function ForgotPassword() {
    const [loading, setLoading] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [text, setText]= React.useState('');

    const history = useHistory();

    const formik = useFormik({
      initialValues: {email: ''},
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
        const request = await fetch(`${url}/admin/auth/forgot/password`, {
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
          setText('Email Sent!')
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
                <p className='font-Poppins-Semibold text-xl mt-14 text-left' >Forgot Password</p>
            </div>

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
                
        
                <button disabled={loading} onClick={submit} className='font-Poppins-Bold text-sm w-full bg-login_buttton py-3 text-midlman_color rounded-lg mt-8' >
                  {
                    loading ?
                    <Spinner size="md" color="green.500" />
                    :
                    <span>Reset</span>
                  }
                </button>
            </div>
        </div>
    )
}
