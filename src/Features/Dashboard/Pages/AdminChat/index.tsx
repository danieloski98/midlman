import React from 'react'
import Navbar from '../../Component/Navbar' 
import Chats from './Component/Chats'
import ExpressAccounts from './Component/ExpressAccounts'
import PortalAccounts from './Component/PortalAccounts'

export default function index() {
    return (
        
        <div style={{backgroundColor:'#FAFAFA'}} className='w-full h-full'>
            <div className='w-auto px-8 py-4 border-b-1 border-entries mx-10 mt-4' >
                <Navbar icon={false} />
            </div>
            <div className='w-full py-8 px-8' >
                <div className='w-full flex flex-row' >
                    <div className='flex flex-col mx-4' >
                        <div className='w-full my-4'>
                            <ExpressAccounts/>
                        </div>
                        <div className='w-full mt-10'>
                            <PortalAccounts/>
                        </div>
                    </div>
                    <div className='w-full mt-14 pt-1'>
                        <Chats/>
                    </div>
                </div>
            </div>
        </div>
    )
}
