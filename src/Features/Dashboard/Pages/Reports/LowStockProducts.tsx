import { Select, Input } from '@chakra-ui/react'
import React from 'react' 

export default function LowStockProducts() { 

    const data = [
        { 
            product: 'Ernest Chris',  
            package: 'Carton',
            viewstock: '4', 
        },
        { 
            product: 'Ernest Chris',
            package: 'Bottle',
            viewstock: '0', 
        },
        { 
            product: 'Ernest Chris',
            package: 'Carton',
            viewstock: '4', 
        },
        { 
            product: 'Ernest Chris',
            package: 'Carton',
            viewstock: '4', 
        },
    ]

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <p className='font-Poppins-Semibold text-lg' >Low Stock Products</p>
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
            </div>
            <div className='w-auto my-14' >
                <table className='text-sm '>
                    <thead>
                        <tr className='font-Poppins-Semibold' >
                            <th className='bg-white'>ID</th>
                            <th className='bg-white'>Product</th>
                            <th className='bg-white'>Package</th>
                            <th className='bg-white'>View Stock</th> 
                            <th className='bg-white'>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td>{item.product}</td>
                                    <td>{item.package}</td>
                                    <td>{item.viewstock}</td> 
                                    <td> 
                                        <div className=' w-full h-full flex flex-row items-center' >
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.7071 0.707107L16.5355 3.53553C16.9261 3.92606 16.9261 4.55922 16.5355 4.94975L15.1213 6.36396L10.8787 2.12132L12.2929 0.707107C12.6834 0.316583 13.3166 0.316583 13.7071 0.707107ZM9.46447 3.53553L1.27208 11.7279L0.979185 16.2635L5.51472 15.9706L13.7071 7.77817L9.46447 3.53553Z" fill="#1B75BB"/>
                                            </svg>
                                            <p className='ml-1' style={{color:'#1B75BB'}} >Add</p> 
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