import { Input } from '@chakra-ui/react'
import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

const validationSchema = yup.object({
  oldpassword: yup.string().min(6, 'minimium of 6 characters'),
  newpassword: yup.string().min(6, 'minimium of 6 characters'),
  confirmpassword: yup.string().min(6, 'minimium of 6 characters'),
})

export default function Password() {
    const formik = useFormik({
      initialValues: {
        oldpassword: '',
        newpassword: '',
        confirmpassword: '',
      },
      validationSchema,
      onSubmit: () => {},
    })
    return (
        <div className='w-auto mt-8 py-8 ' >
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >OLD PASSWORD</p>
                <Input fontSize='xs' />
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >NEW PASSWORD</p>
                <Input fontSize='xs' />
            </div>
            <div className='w-80 py-4 flex flex-col' >
                <p className='font-Poppins-Medium text-xs mb-1' >COMFIRM NEW PASSWORD</p>
                <Input fontSize='xs' />
            </div>
            <div className='w-full flex justify-center py-12' >
                <button className='w-80 bg-midlman_color rounded-lg font-Poppins-Semibold text-xs text-white py-3' >Change Password</button>
            </div>
        </div>
    )
}
