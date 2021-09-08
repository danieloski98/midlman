import React from 'react'
import { Input } from '@chakra-ui/react'

export default function ProfileForm() {
    return (
        <div className="w-96 rounded h-auto py-5 flex flex-col text-sm">
            <div className="mb-3">
                <p>Firstname</p>
                <Input className="w-full h-10 rounded bg-white" size="sm" />
            </div>

            <div className="mb-3">
                <p>Lastname</p>
                <Input className="w-full h-10 rounded bg-white" size="sm" />
            </div>

            <div className="mb-3">
                <p>Phone</p>
                <Input className="w-full h-10 rounded bg-white" size="sm" />
            </div>

            <div className="mb-3">
                <p>Email</p>
                <Input className="w-full h-10 rounded bg-white" size="sm" />
            </div>
        </div>
    )
}
