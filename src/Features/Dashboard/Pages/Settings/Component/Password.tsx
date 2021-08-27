import { Input, Spinner } from '@chakra-ui/react'
import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { url } from '../../../../../Utils/URL'
import * as axios from 'axios'
import { useMutation } from 'react-query'
import useDetails from '../../../../../Hooks/useDetails'

const validationSchema = yup.object({
  oldpassword: yup.string().min(6, 'minimium of 6 characters'),
  newpassword: yup.string().min(6, 'minimium of 6 characters'),
  confirmpassword: yup.string().min(6, 'minimium of 6 characters'),
})



export default function Password() {
  // mutation
  const mutation = useMutation(async(data: any) => {
    const request = await fetch(`${url}/admin/auth/change/password`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${details.token}`
      },
      body: JSON.stringify(data),
    })
    const json = await request.json();
    return json
  });
  const details = useDetails();
    const formik = useFormik({
      initialValues: {
        oldpassword: '',
        newpassword: '',
        confirmpassword: '',
      },
      validationSchema,
      onSubmit: () => {},
    })

    React.useEffect(() => {
      if (mutation.error !== null) {
        const error = mutation.error as any;
        console.log(error)
      }
    }, [mutation.error])

    const submit = () => {

      if (!formik.dirty) {
        alert('You have to provide the neccessary details')
        return;
      }
      if (!formik.isValid) {
        alert('You have to fill in the form correctly')
        return;
      }

      // make the request
      mutation.mutate(formik.values);

    }
    return (
        <div className='w-auto mt-8 py-8 ' >
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >OLD PASSWORD</p>
                <Input fontSize='xs' type="password" name="oldpassword" value={formik.values.oldpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('oldpassword', true, true)} />
                {formik.touched.oldpassword && formik.errors.oldpassword && <p className="text-xs text-red-500 mt-2">{formik.errors.oldpassword}</p>}
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >NEW PASSWORD</p>
                <Input fontSize='xs' type="password" name="newpassword" value={formik.values.newpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('newpassword', true, true)} />
                {formik.touched.newpassword && formik.errors.newpassword && <p className="text-xs text-red-500 mt-2">{formik.errors.newpassword}</p>}
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >COMFIRM NEW PASSWORD</p>
                <Input fontSize='xs'  type="password" name="confirmpassword" value={formik.values.confirmpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('confirmpassword', true, true)}  />
                {formik.touched.confirmpassword && formik.errors.confirmpassword && <p className="text-xs text-red-500 mt-2">{formik.errors.confirmpassword}</p>}
            </div>
            <div className='w-full flex justify-center py-12' >
                <button onClick={submit} className='w-80 bg-midlman_color rounded-lg font-Poppins-Semibold text-xs text-white py-3' >
                  {mutation.isLoading ? <Spinner color="white" size="sm" />: <span>Change Password</span>}
                </button>
            </div>
        </div>
    )
}
