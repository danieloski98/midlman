import React from 'react'
import Navbar from '../../Component/Navbar' 
import Chats from './Component/Chats'
import ExpressAccounts from './Component/ExpressAccounts'
import PortalAccounts from './Component/PortalAccounts'

export default function index() {
    return (
        
        <div style={{backgroundColor:'#FAFAFA'}} className='w-full h-full'>
            <div className='w-auto border-b-1 border-entries mx-8 mt-0' />

            <div className='w-full py-8 px-4' >
                <div className='w-full flex flex-row' >
                    <div className='w-45/100 flex flex-col mx-0' >
                        <div className='w-full my-4'>
                            <ExpressAccounts/>
                        </div>
                        <div className='w-full mt-10'>
                            <PortalAccounts/>
                        </div>
                    </div>
                    <div className='w-45/100 mt-14 pt-1 ml-12'>
                        <Chats/>
                    </div>
                </div>
            </div>
        </div>
    )
}
