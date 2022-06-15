import { Select, Spinner, Input } from '@chakra-ui/react'
import React from 'react';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { url } from '../../../../Utils/URL';
import { request } from 'http';
import useDetails from '../../../../Hooks/useDetails';

const validationSchema = yup.object({
    transferId: yup.string().required('This field is required'),
    status: yup.string(),
})

export default function ManualTopUp() {
    // states
    const [loading, setLoading] = React.useState(false);

    // hooks
    const { token } = useDetails();

    const formik = useFormik({
        initialValues: {transferId: '', status: ''},
        onSubmit: () => {},
        validationSchema,
    });

    const submit = async() => {
        try {
            setLoading(true);
            const request = await fetch(`${url}/transfer`, {
                method: 'put',
                headers: {
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify({...formik.values, status: formik.values.status === 'Approved' ? true:false }),
            });
            const json = await request.json() as any;
            console.log(json);
            setLoading(false);
            if (!request.ok) {
                alert(json.message);
            }else {
                alert(JSON.stringify(json))
            }
        } catch (error) {
            alert('Anrror occured ')
        }
    }
    return (
        <div className='w-full h-full flex flex-col justify-center items-center' >
            <div > 
                <p className='text-lg font-Poppins-Semibold' >Manual Top up</p>
                <div className='w-96 py-2 mt-4' >
                    <p className='text-sm font-Poppins-Medium mb-1' >Transfer ID</p>
                    <Input fontSize="sm" name="transferId" value={formik.values.transferId} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    { formik.touched.transferId && formik.errors.transferId && (
                        <p>{formik.errors.transferId}</p>
                    )}
                </div>
                <div className='w-96 py-3' >
                    <p className='text-sm font-Poppins-Medium mb-1' >STatus</p>
                    <Select fontSize="sm" name="status" value={formik.values.status} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </Select>
                </div>
                <div className='w-full flex justify-center py-8' > 
                    <button onClick={submit} className='px-14 py-3 bg-midlman_color text-white text-sm font-Poppins-Medium rounded-md' >
                       {loading ? <Spinner color="white" size="sm" /> : <span> TOP UP</span>}
                    </button>
                </div>
            </div>
        </div>
    )
}
