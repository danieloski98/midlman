import React from 'react'
import { useHistory } from 'react-router-dom'
import Invoice from './Invoice'

export default function DeliveredOrder() {

    const history = useHistory();
    const [showModal, setShowModal] = React.useState(false);

    const data = [
        { 
            order: 'fdskfdsjlfdls',
            accounttype: 'Portal',
            item: 'this will have a long scrollable list of all items purchased',
            total: '#40000',  
            purchase: '24/24/2024 (3;30pm)',  
            completed: '24/24/2024 (3;30pm)',  
            Status: 'Active', 
        },
        { 
            order: 'fdskfdsjlfdls',
            accounttype: 'Express',
            item: 'this will have a long scrollable list of all items purchased',
            total: '#40000',  
            purchase: '24/24/2024 (3;30pm)',  
            completed: '24/24/2024 (3;30pm)',  
            Status: 'Active', 
        },
        { 
            order: 'fdskfdsjlfdls',
            accounttype: 'Portal',
            item: 'this will have a long scrollable list of all items purchased',
            total: '#40000',  
            purchase: '24/24/2024 (3;30pm)',  
            completed: '24/24/2024 (3;30pm)',  
            Status: 'Active', 
        },
        { 
            order: 'fdskfdsjlfdls',
            accounttype: 'Express',
            item: 'this will have a long scrollable list of all items purchased',
            total: '#40000',  
            purchase: '24/24/2024 (3;30pm)',  
            completed: '24/24/2024 (3;30pm)',  
            Status: 'Active', 
        },
    ]

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <p className='font-Poppins-Semibold text-lg' >Delivered Orders by<span className='text-midlman_color ml-1' >Ernest</span></p> 

            <div className='w-auto mt-20 py-8' >
                <table className='text-sm '>
                    <thead>
                        <tr className='font-Poppins-Semibold' >
                            <th className='bg-white'>ID</th>
                            <th className='bg-white'>Order ID</th>
                            <th className='bg-white'>Account Type</th>
                            <th className='bg-white'>Items</th>
                            <th className='bg-white'>Order Total</th> 
                            <th className='bg-white'>Date/Time Purchased</th> 
                            <th className='bg-white'>Date/Time Completed</th> 
                            <th className='bg-white'>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td>{item.order}</td> 
                                    <td>{item.accounttype}</td>
                                    <td>{item.item}</td>
                                    <td>{item.total}</td> 
                                    <td>{item.purchase}</td> 
                                    <td>{item.completed}</td>  
                                    <td> 
                                        <div className=' w-full h-full flex flex-row justify-center items-center' > 
                                            <p onClick={()=> setShowModal(true)} className='font-Poppins-Medium text-xs text-midlman_color cursor-pointer text-center ' >View Details</p>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='w-full flex flex-row justify-center items-center py-10' >
                    <button className='py-3 bg-midlman_color font-Poppins-Semibold text-xs w-40 text-white rounded-md mx-4' >PRINT INVOICE</button> 
                    <button onClick={()=> history.push('/dashboard/delivery')}  className='py-3 bg-entries font-Poppins-Semibold text-xs w-40 text-menu_gray rounded-md mx-4'>CANCEL</button>
            </div>
            {showModal ? (
                    <>
                        <div className="justify-center flex overflow-x-hidden my-2 overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none"> 
                            <Invoice close={setShowModal} order='completed' type='Delivered Orders' /> 
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null} 
        </div>
    )
}
