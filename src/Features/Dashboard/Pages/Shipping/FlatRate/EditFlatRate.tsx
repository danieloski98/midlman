import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function EditFlatRate() {
    const history = useHistory();
    const [showModal, setShowModal] = React.useState(false);
    const ClickHandler =()=>{
        setShowModal(false);
        history.push('/dashboard/flatrate')
    }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <p className='font-Poppins-Semibold text-lg' >Edit Flat Rate</p>
            <div className='w-full flex relative flex-row items-center py-8' > 
                <div className='w-24 flex items-center mr-4' >  
                    <Select fontSize='xs' color='#828282' placeholder='Sort By' />
                </div>
                <div className='w-48 flex items-center' > 
                    <div className='fixed z-10 ml-4' >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#BDBDBD"/>
                        </svg>
                    </div>
                    <Input fontSize='xs' paddingLeft='10'  placeholder='Search ...' />
                </div>
                <div className='w-full flex flex-1' />
                <button onClick={()=> setShowModal(true)}  className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' >
                    <svg className='mr-2' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="white"/>
                    </svg> Add New Location Type
                </button>
            </div>
            <div className='w-full flex py-8 flex-row items-center justify-center' >
                <div className=' w-80 mr-6' >
                    <Input fontSize='xs' placeholder='Location name' />
                </div>
                <div className=' w-72 mr-6' >
                    <Select fontSize='xs' placeholder='Select'>
                        <option>Give me more data</option>
                    </Select>
                </div>
                <div className=' w-64 mr-6' >
                    <Input fontSize='xs' placeholder='Select Price' />
                </div>
            </div>
            <div className='w-full flex py-2 flex-row items-center text-midlman_color font-Poppins-Bold text-xs justify-end' >
                <svg className='mr-2' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="#00A69C"/>
                </svg> Add New Location Type
            </div>
            <div className='w-full flex py-8 flex-row items-center justify-center' >
                <button className='bg-midlman_color font-Poppins-Bold text-white text-xs py-3 px-14 rounded-md mx-1'>DONE</button>
            </div>
            {showModal ? (
                    <>
                        <div className="justify-center items-center overflow-x-hidden flex overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none"> 
                            <div style={{width:'400px'}}  className='rounded-lg bg-white p-8' >
                                <p className='font-Poppins-Semibold text-lg mt-8'>Add New Location Type</p>
                                <div className='w-full py-8' > 
                                    <p className='font-Poppins-Medium text-xs mb-2'>Location Type</p>
                                    <Input fontSize='xs'/>
                                </div>
                                <div className='w-full flex flex-row justify-center' >
                                    <button onClick={()=> ClickHandler()} className='py-3 rounded-md mb-4 text-xs px-12 mx-4 bg-midlman_color text-white font-Poppins-Semibold' >ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null} 
        </div>
    )
}
