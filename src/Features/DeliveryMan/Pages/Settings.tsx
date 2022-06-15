import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import PasswordForm from '../Components/settings/PasswordForm'
import ProfileForm from '../Components/settings/ProfileForm'

const INACTIVE = 'flex-1 h-full flex justify-center items-center rounded-md text-gray-600 cursor-pointer text-sm'
const ACTIVE = 'flex-1 h-full flex justify-center items-center bg-white rounded-md cursor-pointer text-gray-600 text-sm'

export default function Settings() {
    const [tab, setTab] = React.useState(1)
    return (
        <div className="w-full h-full">

            {/* logout button */}
            <div className="w-full flex justify-end text-red-500 font-Poppins-Medium text-md">
                <FiLogOut size={20} color="red" className="mr-2 cursor-pointer" />
                <p className="cursor-pointer">Logout</p>
            </div>

            <div className="w-full h-10 flex justify-center">
                <div className="w-96 bg-gray-300 h-10 rounded-md p-1 flex font-Poppins-Medium">

                    <div className={tab === 1 ? ACTIVE:INACTIVE} onClick={() => setTab(1)}>
                        View Profile
                    </div>

                    <div className={tab === 2 ? ACTIVE:INACTIVE} onClick={() => setTab(2)}>
                        Change Password
                    </div>

                </div>
            </div>
           <div className="w-full flex justify-center mt-6">
           {
               tab === 1 ?
                <ProfileForm />
                :
                <PasswordForm />
           }
           </div>
        </div>
    )
}
