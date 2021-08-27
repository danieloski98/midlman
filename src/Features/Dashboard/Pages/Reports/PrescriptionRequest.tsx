import React from 'react'
import { FiChevronRight, FiChevronLeft, FiX } from 'react-icons/fi'
import { Input, Divider } from '@chakra-ui/react'
import {motion, AnimatePresence} from 'framer-motion'
import { useHistory } from 'react-router-dom'

export default function PrescriptionRequest() {

    const history = useHistory();

    const [products, setProducts] = React.useState([0]);

    const del = (index: number) => {
        products.splice(index, 1);
        setProducts([...products])
    }
    return (
        <div className="w-full px-8 flex flex-col">
            <h3 className="text-xl font-Poppins-Bold">Send Request</h3>
            <p className="text-xs text-gray-600 flex mt-4">
                PrescriptionReport <FiChevronRight size={15} className="mr-3 ml-3" /> Send Request <FiChevronRight size={15} className="mr-3 ml-3" />
            </p>

            <p onClick={() => history.goBack()} className="text-xs text-gray-600 flex mt-10 cursor-pointer ml-6">
                <FiChevronLeft size={15} className="mr-3" /> Back to Prescription Report
            </p>

            <div className="w-ful overflow-y-scroll flex justify-center pt-5" style={{ height: '430px'}}>
                <div className="w-100 h-full flex flex-col items-center">
                    <div className="w-full">
                        <p className="text-sm font-Poppins-Medium text-gray-600">Customer ID</p>
                        <Input size="md" className="w-full mt-2" />
                    </div>

                    <Divider className="mt-8" />

                    {
                        products.map((item, index) => (
                            <AnimatePresence>
                                <motion.div 
                                    animate={{ opacity: 1, x: -0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ type: 'spring', stiffness: 100 }}
                                    key={index} className="w-full pt-8">

                                        <div className="w-full flex justify-end">
                                            {
                                                products.length > 1 ? <FiX size={25} color="red" className="cursor-pointer" onClick={() => del(index)}/>: null
                                            }
                                        </div>

                                        <div className="w-full mb-4">
                                            <p className="text-sm font-Poppins-Medium text-gray-600">Product Name</p>
                                            <Input size="md" className="w-full mt-2" />
                                        </div>

                                        <div className="w-full mb-4">
                                            <p className="text-sm font-Poppins-Medium text-gray-600">Product Prize</p>
                                            <Input size="md" className="w-full mt-2" />
                                        </div>

                                        <div className="w-full mb-4">
                                            <p className="text-sm font-Poppins-Medium text-gray-600">Product Type</p>
                                            <Input size="md" className="w-full mt-2" />
                                        </div>

                                        <div className="w-full mb-4">
                                            <p className="text-sm font-Poppins-Medium text-gray-600">Quantity</p>
                                            <Input size="md" className="w-full mt-2" />
                                        </div>

                                        <Divider className="mt-8" />

                                </motion.div>
                            </AnimatePresence>
                        ))
                    }


                    <div className="w-full flex justify-end mt-6">
                        <p className=" text-midlman_color cursor-pointer" onClick={() => setProducts(prev => [...prev, 2])}> + Add More</p>
                    </div>

                    <Divider className="mt-8" />

                    <div className="w-full mt-8 flex flex-col">
                        <div className="w-full flex items-center">
                            <div className="flex-1">
                                <p>Prescription Image</p>
                                <div className="w-full h-24 border-2 border-gray-400 rounded-lg my-4"></div>
                                <p className="text-xs">Use png or jpg file type</p>
                            </div>

                            <div className="flex-1 flex justify-end">
                                <button className="w-40 h-12 text-xs rounded-lg font-Poppins-Medium border-2 border-midlman_color">
                                    Upload Image
                                </button>
                            </div>
                        </div>

                        <div className="flex w-full justify-between mt-6 mb-10">
                            <button className="w-45/100 h-12 rounded-lg bg-midlman_color text-white">Send</button>
                            <button className="w-45/100 h-12 rounded-lg bg-gray-400 text-gray-600" onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
