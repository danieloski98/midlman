import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Input } from '@chakra-ui/react'

interface IProps {
    open: boolean;
    close: Function;
}

export default function PrescriptionModal({ open, close }: IProps) {
    return (
        <Modal isOpen={open} onClose={() => close()} isCentered scrollBehavior="inside" size="lg">
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody className="w-full flex justify-center ">
                   <div className="w-4/5 ">
                        <h3 className="text-md font-Poppins-Medium">Add Prescription Report</h3>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="" className="text-sm font-Poppins-Regular mb-1">User ID</label>
                            <Input />
                        </div>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="" className="text-sm font-Poppins-Regular mb-1">Name</label>
                            <Input />
                        </div>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="" className="text-sm font-Poppins-Regular mb-1">Email Address</label>
                            <Input />
                        </div>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="" className="text-sm font-Poppins-Regular mb-1">Phone Number</label>
                            <Input />
                        </div>

                        <div className="w-full flex justify-between items-center mt-6">
                            <div className="flex flex-col">
                                <p className="text-sm mb-3 font-Poppins-Regular">Prescription Image</p>
                                <div className="w-40 h-24 rounded-md border-1 border-gray-200"></div>
                            </div>
                            <button className="w-40 text-white h-10 rounded bg-midlman_color text-xs">Upload Image</button>
                        </div>

                        <div className="mt-6">
                            <p className="text-sm mb-3 font-Poppins-Regular">Description</p>
                            <div className="w-full h-24 rounded-md border-1 border-midlman_color mt-6"></div>
                        </div>

                        <button className="w-full text-white h-10 rounded bg-midlman_color text-xs mt-6 mb-10">Upload</button>
                   </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
