 import { Textarea } from '@chakra-ui/react'
import React from 'react'
import profile from '../../../../../assets/images/profilepic.png'

export default function Chats() {

    const Reciever =()=> {
        return(
            <div className=' w-64 my-2 bg-login_buttton rounded-tl-2xl rounded-tr-2xl rounded-br-2xl px-2 py-5' >
                <p className='text-sm font-Poppins-Medium text-right mr-4'>helllo when you high like this, we could go to the west coast take it to the west coast</p>
            </div>
        )
    }

    const Sender =()=> {
        return(
            <div className='w-full flex items-center justify-end' >
                <div className=' w-64 my-2 bg-midlman_color text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl px-2 py-5' >
                    <p className='text-sm font-Poppins-Medium text-right mr-4'>helllo when you high like this, we could go to the west coast take it to the west coast</p>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full bg-white pt-4 pb-8 px-8 mx-4 rounded-lg shadow-2xl'  >
            <p className='text-base font-Poppins-Semibold ' >You’re chatting with:</p>
            <div className='flex flex-row py-4 items-center' >
                <img src={profile} className='w-16 h-16 rounded-full' alt='' />
                <div className='ml-4' >
                    <p className='text-base font-Poppins-Semibold ' >Ernest Chris</p>
                    <p className='text-base font-Poppins-Regular text-menu_gray ' >Customer Support</p>
                </div>
            </div>
            <div className='w-full mt-6' > 
                <Reciever />
                <Sender />
                <Reciever />
                <Sender />
            </div>
            <div className=' w-full flex flex-row items-center pt-8' >
                <Textarea  />
                <div className='ml-4' >
                    <div className=' w-10 h-10 flex cursor-pointer justify-center items-center bg-midlman_color rounded-full' > 
                        <svg className='mr-1' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.2744 1.12056C21.1559 1.00257 21.0061 0.920879 20.8427 0.88509C20.6793 0.849302 20.5091 0.860904 20.3521 0.918533L1.0278 7.94556C0.861145 8.00877 0.717663 8.12119 0.616413 8.26788C0.515164 8.41458 0.460938 8.5886 0.460938 8.76684C0.460938 8.94508 0.515164 9.11911 0.616413 9.2658C0.717663 9.41249 0.861145 9.52491 1.0278 9.58813L8.57307 12.601L14.142 7.01448L15.3805 8.25299L9.78523 13.8483L12.8069 21.3935C12.8719 21.557 12.9846 21.6971 13.1303 21.7958C13.2759 21.8944 13.4478 21.9471 13.6237 21.9469C13.8013 21.9433 13.9735 21.8859 14.1178 21.7824C14.262 21.6789 14.3715 21.5342 14.4319 21.3672L21.4589 2.04286C21.5187 1.88745 21.5332 1.71824 21.5005 1.55494C21.4678 1.39164 21.3894 1.24099 21.2744 1.12056Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
