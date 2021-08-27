import React from 'react' 

export default function ContactForm() { 

    const data = [
        { 
            fullname: 'Ernest Chris',
            email: 'ernest@email.com',
            contact: '08123456789',
            message: 'this will have a long scrollable list of message text', 
            date: '24/24/2024 3:45pm',  
        },
        { 
            fullname: 'Ernest Chris',
            email: 'ernest@email.com',
            contact: '08123456789',
            message: 'this will have a long scrollable list of message text', 
            date: '24/24/2024 3:45pm',  
        },
        { 
            fullname: 'Ernest Chris',
            email: 'ernest@email.com',
            contact: '08123456789',
            message: 'this will have a long scrollable list of message text', 
            date: '24/24/2024 3:45pm',  
        },
        { 
            fullname: 'Ernest Chris',
            email: 'ernest@email.com',
            contact: '08123456789',
            message: 'this will have a long scrollable list of message text', 
            date: '24/24/2024 3:45pm',  
        },
    ]

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <p className='font-Poppins-Semibold text-lg' >Contact Form</p> 
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
                        {data.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.email}</td> 
                                    <td>{item.contact}</td> 
                                    <td>{item.message}</td> 
                                    <td>{item.date}</td>  
                                    <td className='text-midlman_color pr-10' >View</td>
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
