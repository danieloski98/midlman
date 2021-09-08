import React from 'react'
import { Input, Spinner } from '@chakra-ui/react'

export default function PasswordForm() {
    return (
        <div className="w-96 rounded h-auto py-5 flex flex-col text-sm">
        <div className="mb-3">
            <p>Old Password</p>
            <Input className="w-full h-10 rounded bg-white" size="sm" />
        </div>

        <div className="mb-3">
            <p>New Password</p>
            <Input className="w-full h-10 rounded bg-white" size="sm" />
        </div>

        <div className="mb-3">
            <p>Confirm Password</p>
            <Input className="w-full h-10 rounded bg-white" size="sm" />
        </div>

        <div className="mb-3 mt-5">
            <button className="w-full h-10 rounded text-sm text-white bg-midlman_color">
                Submit
            </button>
        </div>
    </div>
    )
}
