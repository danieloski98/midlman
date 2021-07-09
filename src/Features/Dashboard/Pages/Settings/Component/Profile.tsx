import { Input, Select , Spinner} from '@chakra-ui/react'
import React from 'react'
import pic from '../../../../../assets/images/photo.png';
import * as yup from 'yup'
import { useFormik } from 'formik'
import useDetails from '../../../../../Hooks/useDetails';
import { url } from '../../../../../Utils/URL';

// validationSchema
const validationSchema = yup.object({
  firstname: yup.string(),
  lastname: yup.string(),
  username: yup.string(),
  phone: yup.string(),
  // roles: yup.string(),
})

export default function Profile() {
  const { adminDetails, token } = useDetails();
  const [loading, setLoading] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: adminDetails.firstName,
      lastname: adminDetails.lastName,
      username: adminDetails.username,
      phone: adminDetails.phone,
      // roles: ''
    },
    validationSchema,
    onSubmit: () => {},
  })

  const submit = async () => {
    formik.setFieldValue('roles', adminDetails.roles);
    alert(adminDetails._id);
    setLoading(true);

    const request = await fetch(`${url}/admin/update/${adminDetails._id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formik.values),
    });

    const json = await request.json();

    alert(JSON.stringify(json));

    setLoading(false);
  }

    return (
        <div className='w-auto' >
            <div className='w-full flex py-8 flex-row items-center' >
                <div className='w-full flex flex-1' />
                <div className='w-16 h-16' >
                    <img src={pic} className='w-full h-full' alt='profile' />
                </div>
                <button className='h-10 ml-4  border-1 rounded-lg border-midlman_color font-Poppins-Medium text-xs text-midlman_color px-4' >Change Profile Image</button>
            </div>
            <div className='w-full py-10 border-b-1 border-entries' >
              <div className='w-full flex py-4 flex-row' >
                    <div className='w-80 flex flex-col mr-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >Firstname</p>
                        <Input fontSize='xs' name="firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div>
                    <div className='w-80 flex flex-col ml-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >Lastname</p>
                        <Input fontSize='xs' name="lastname" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div>
                </div>
                <div className='w-full flex py-4 flex-row' >
                    <div className='w-80 flex flex-col mr-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >Username</p>
                        <Input fontSize='xs' name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div>
                    <div className='w-80 flex flex-col ml-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >Phone</p>
                        <Input fontSize='xs' name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div>
                </div>
                <div className='w-full flex py-4 flex-row' >
                    <div className='w-80 flex flex-col ml-0' >
                      <p className='font-Poppins-Medium text-xs mb-1' >Role</p>
                        <Select fontSize='xs' name="roles" onChange={formik.handleChange} onBlur={formik.handleBlur} >
                          {adminDetails.roles?.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                          ))}
                        </Select>
                    </div>
                </div>
                {/* <div className='w-full flex py-4 flex-row' >
                    <div className='w-80 flex flex-col mr-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >ADDRESS 1</p>
                        <Input fontSize='xs' />
                    </div>
                    <div className='w-80 flex flex-col ml-4' >
                        <p className='font-Poppins-Medium text-xs mb-1' >ADDRESS 2</p>
                        <Input fontSize='xs' />
                    </div>
                </div> */}
            </div>
            <div className='w-full flex py-1' >
                <button disabled={loading} onClick={submit} className='w-80 bg-midlman_color rounded-lg font-Poppins-Semibold text-xs text-white py-3' >
                  {
                    loading ?
                    <Spinner color="white" size="sm" />
                    :
                    <span>Save Changes</span>
                  }
                </button>
            </div>
        </div>
    )
}
