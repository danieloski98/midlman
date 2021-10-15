import React from 'react'
import { Input, Spinner } from '@chakra-ui/react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import useDetails from '../../../../Hooks/useDetails'
import { url } from '../../../../Utils/URL'
import LoadingModal from '../../../Modals/LoadingModal'

const validationSchema = yup.object({
    oldPassword: yup.string().required('This field is required'),
    newPassword: yup.string().required('This field is required'),
})

export default function PasswordForm() {
    const [loading, setLoading] = React.useState(false);
    const { adminDetails, token } = useDetails();

    const formik = useFormik({
        validationSchema,
        initialValues: {oldPassword: '', newPassword: ''},
        onSubmit: () => {}
    });

    const submit = async () => {
        if(!formik.dirty) {
            alert('Please fill the form to continue');
            return;
        }
        if(!formik.isValid) {
            alert('Please fill the form corectly to continue');
            return;
        }
        setLoading(true);
        const request = await fetch(`${url}/admin/auth/change/password`, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(formik.values),
        })

        const json = await request.json();
        setLoading(false);

        if (!request.ok) {
            alert(json.message);
        }else {
            alert('password changed');
        }
    }
    return (
        <div className="w-96 rounded h-auto py-5 flex flex-col text-sm">
        <LoadingModal open={loading} onClose={() => setLoading(false)} text="Updating Password" />
        <div className="mb-3">
            <p>Old Password</p>
            <Input type="password" className="w-full h-10 rounded bg-white" size="sm" name="oldPassword" value={formik.values.oldPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {
                formik.touched.oldPassword && formik.errors.oldPassword && (
                    <p className="mt-1 text-sm text-red-400">{formik.errors.oldPassword}</p>
                )
            }
        </div>

        <div className="mb-3">
            <p>New Password</p>
            <Input type="password" className="w-full h-10 rounded bg-white" size="sm" name="newPassword" value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {
                formik.touched.newPassword && formik.errors.newPassword && (
                    <p className="mt-1 text-sm text-red-400">{formik.errors.newPassword}</p>
                )
            }
        </div>

        {/* <div className="mb-3">
            <p>Confirm Password</p>
            <Input className="w-full h-10 rounded bg-white" size="sm" />
        </div> */}

        <div className="mb-3 mt-5">
            <button onClick={submit} disabled={loading} className="w-full h-10 rounded text-sm text-white bg-midlman_color">
               {
                   loading ?
                   <Spinner color="white" size="sm" />
                   :
                   <span>Submit</span>
               }
            </button>
        </div>
    </div>
    )
}
