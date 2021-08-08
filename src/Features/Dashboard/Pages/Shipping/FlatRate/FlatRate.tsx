import { Select, Input, Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import LoadingModal from '../../../../Modals/LoadingModal'

interface IProps {
    isOpen: boolean;
    onClose: Function;
}

const LocationModal: React.FC<IProps> = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} isCentered={true} onClose={() => onClose()}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                        <div className=""> 
                            <div style={{width:'400px'}}  className='rounded-lg bg-white p-8' >
                                <p className='font-Poppins-Semibold text-lg mt-8'>Add New Location Type</p>
                                <div className='w-full py-8' > 
                                    <p className='font-Poppins-Medium text-xs mb-2'>Location Type</p>
                                    <Input fontSize='xs'/>
                                </div>
                                <div className='w-full flex flex-row justify-center' >
                                    <button onClick={() => onClose()} className='py-3 rounded-md mb-4 text-xs px-12 mx-4 bg-midlman_color text-white font-Poppins-Semibold' >ADD</button>
                                </div>
                            </div>
                        </div>
                        
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default function FlatRate() {
    const [openLocModal, setLocModal] = React.useState(false);

    const history = useHistory()

    const data = [
        { 
            location: 'Agbani',
            type: 'Zone',
            price: '#300', 
        },
        { 
            location: 'Agbani',
            type: 'Zone',
            price: '#300', 
        },
        { 
            location: 'Agbani',
            type: 'Zone',
            price: '#300', 
        },
        { 
            location: 'Agbani',
            type: 'Zone',
            price: '#300', 
        },
    ]

    const close = () => {
        setLocModal(false);
    }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <LocationModal isOpen={openLocModal} onClose={close} />
            <p className='font-Poppins-Semibold text-lg' >Flat Rate</p>
            <div className='w-full flex relative flex-row items-center justify-between py-8' > 
                <div className="flex">
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
                </div>

                <button onClick={() => setLocModal(true)} className="w-40 h-10 rounded shadow bg-midlman_color text-white text-xs">Add New Location Type</button>

            </div>
            <div className='w-auto my-14' >
                <table className=' w-auto text-sm '>
                    <thead>
                        <tr className='font-Poppins-Semibold' >
                            <th className='bg-white'>ID</th>
                            <th className='bg-white'>Location</th>
                            <th className='bg-white'>Location Type</th>
                            <th className='bg-white'>Price</th> 
                            <th className='bg-white'>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td>{item.location}</td>
                                    <td>{item.type}</td>
                                    <td>{item.price}</td> 
                                    <td> 
                                        <div className=' w-full h-full flex flex-row items-center' >
                                            <div className='flex flex-row cursor-pointer'onClick={()=> history.push('/dashboard/editflatrate')} >
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.7071 0.707107L16.5355 3.53553C16.9261 3.92606 16.9261 4.55922 16.5355 4.94975L15.1213 6.36396L10.8787 2.12132L12.2929 0.707107C12.6834 0.316583 13.3166 0.316583 13.7071 0.707107ZM9.46447 3.53553L1.27208 11.7279L0.979185 16.2635L5.51472 15.9706L13.7071 7.77817L9.46447 3.53553Z" fill="#1B75BB"/>
                                                </svg>
                                                <p className='ml-1' style={{color:'#1B75BB'}} >Edit</p>
                                            </div>
                                            <div className='rounded-full w-4 ml-8 h-4 flex justify-center items-center' style={{backgroundColor:'#EB5757'}} >
                                                <svg width="9" height="9" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.292893 0.292893C0.683417 -0.0976312 1.31658 -0.097631 1.70711 0.292893L4.03033 2.61612L6.35355 0.292893C6.74407 -0.097631 7.37724 -0.0976312 7.76776 0.292893C8.15829 0.683417 8.15829 1.31658 7.76776 1.70711L5.44454 4.03033L7.36396 5.94975C7.75449 6.34027 7.75449 6.97344 7.36396 7.36396C6.97344 7.75449 6.34027 7.75449 5.94975 7.36396L4.03033 5.44454L2.11091 7.36396C1.72039 7.75449 1.08722 7.75449 0.696697 7.36396C0.306172 6.97344 0.306172 6.34027 0.696697 5.94975L2.61612 4.03033L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <p className='ml-1' style={{color:'#EB5757'}} >Delete</p>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='w-full flex flex-row items-center pb-12'>
                <p className='font-Poppins-Regular text-xs' >Showing 1-10 of 30 items</p>
                <div className='w-full flex flex-1' />
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ' >1</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >2</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >3</div>
            </div>
        </div>
    )
}
