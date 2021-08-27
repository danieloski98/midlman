import React from 'react'
import {Switch} from '@chakra-ui/react'

export default function AutoWithdrawals() {
    return (
        <div className='w-auto mt-8 py-8 ' >
                <div className="w-auto flex flex-col items-center">
                    <div className="w-64 flex h-12 justify-between items-center">
                        <p className="font-Poppins-Medium text-black">Auto Withdrawal</p>
                        <Switch  size="md" colorScheme="teal" className="ml-6" />
                    </div>
                    <div className="w-64 flex h-12 justify-between items-center mt-10">
                        <p className="font-Poppins-Medium text-black">Auto Refund</p>
                        <Switch  size="md" colorScheme="teal" className="ml-6" />
                    </div>
                    <div className='w-full flex justify-center py-12 mt-24' >
                        <button className='w-80 bg-midlman_color rounded-lg font-Poppins-Semibold text-xs text-white py-3' >
                            <span>Save Changes</span>
                        {/* {mutation.isLoading ? <Spinner color="white" size="sm" />: <span>Change Password</span>} */}
                        </button>
                    </div>
                </div>
        </div>
    )
}
