import React from 'react' 
import { useQuery } from 'react-query'
import { IContact } from '../../../../Types/Contact';
import { url } from '../../../../Utils/URL'
import LoadingModal from '../../../Modals/LoadingModal';
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'

// get contact forms
const getMessage = async() => {
    const request = await fetch(`${url}/contact`);
    const json = await request.json();

    if (!request.ok) {
        throw new Error("An error occured")
    }
    return json;
}

export default function ContactForm() { 
    const [loading, setLoading] = React.useState(true);
    const [text, setText] = React.useState("Loading Messages");
    const [error, setError] = React.useState(false);
    const [messages, setMessages] = React.useState([] as Array<IContact>);
    const [showModal, setShowModal] = React.useState(false);
    const [message, setMessage] = React.useState({} as IContact);

    // query
    const { refetch } = useQuery('getContacts', getMessage, {
        onSuccess: (data: { response: Array<IContact>}) => {
            console.log(data);
            setMessages(data.response);
            setMessage(data.response[0])
            setLoading(false);
            setError(false)
        },
        onError: (error) => {
            alert(JSON.stringify(error));
            setLoading(false);
            setError(true);
        }
    })

    const retry = async () => {
        setLoading(true);
        await refetch();
    }

    const openModal = (item: IContact) => {
        setMessage(item);
        setShowModal(true)
    }


    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  

            {/* modals */}
            <DetailsModal open={showModal} onClose={() => setShowModal(false)} message={message} />
            <LoadingModal open={loading} text={text} onClose ={() => setLoading(false)} />
            <p className='font-Poppins-Semibold text-lg' >Contact Form</p> 
            {
                !loading && error && (
                    <div className="w-full flex flex-col justify-start items-center">
                              <img src="/images/error.svg" alt="" className="w-56 h-56" />
                              <p className="text-md font-Poppins-Medium text-gray-600 mt-5"> An Error Occoured</p>
                              <button onClick={retry} className="w-56 h-10 rounded shadow text-white bg-midlman_color mt-6">Retry</button>
                          </div>
                )
            }
           {
               !loading && !error && messages.length > 0 && (
                <div className='w-auto my-24' >
                    <table className='text-sm '>
                        <thead>
                            <tr className='font-Poppins-Semibold' >
                                <th className='bg-white'>ID</th>
                                <th className='bg-white'>Full Name</th>
                                <th className='bg-white'>Email</th>
                                <th className='bg-white'>Phone Number</th>
                                <th className='bg-white'>Message</th> 
                                <th className='bg-white'>Date/Time</th> 
                                <th className='bg-white'>Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((item, index) => {
                                return(
                                    <tr key={index} className='font-Poppins-Regular' >
                                        <td className='font-Poppins-Semibold'>{index+1}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.email}</td> 
                                        <td>{item.phone}</td> 
                                        <td>{item.message}</td> 
                                        <td>{item.createdAt}</td>  
                                        <td onClick={() => openModal(item)} className='text-midlman_color pr-10 cursor-pointer' >View</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
               )
           }
           {
               !loading && !error && messages.length > 0 && (
                <div className='w-full flex flex-row items-center pb-12'>
                    <p className='font-Poppins-Regular text-xs' >Showing 1-10 of 30 items</p>
                    <div className='w-full flex flex-1' />
                    <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ' >1</div>
                    <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >2</div>
                    <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >3</div>
                </div>
               )
           }
        </div>
    )
}


// modal

const DetailsModal = ({ open, onClose, message}: {open: boolean; onClose: Function; message: IContact}) => {
    return (
        <Modal isOpen={open} isCentered onClose={() => onClose()} closeOnOverlayClick={false} closeOnEsc size="lg">
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <h1 className="font-Poppins-Bold">Details</h1>
                    <div className="w-full h-auto flex flex-col mt-8">

                        <div className="w-full flex flex-col mb-6">
                            <p className="text-md font-Poppins-Medium">
                                Fullname
                            </p>
                            <p className="text-sm">{message.fullname}</p>
                        </div>

                        <div className="w-full flex flex-col mb-6">
                            <p className="text-md font-Poppins-Medium">
                                Email
                            </p>
                            <p className="text-sm">{message.email}</p>
                        </div>

                        <div className="w-full flex flex-col mb-6">
                            <p className="text-md font-Poppins-Medium">
                                Phone
                            </p>
                            <p className="text-sm">{message.phone}</p>
                        </div>

                        <div className="w-full h-auto flex flex-col mb-10">
                            <p className="text-md font-Poppins-Medium">Message</p>
                            <div className="mt-2 w-full max-h-40 border-1 border-gray-400 rounded-md p-3 overflow-y-auto overflow-x-hidden">
                                {message.message}
                            </div>
                        </div>

                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}