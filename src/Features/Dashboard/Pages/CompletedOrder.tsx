import { Select, Input } from '@chakra-ui/react';
import React from 'react';
// import { useHistory } from 'react-router-dom';

export default function CompletedOrder() {
    // const history = useHistory()

    const data = [
        { 
            id: 'fdskfdsjlfdls',
            orderby: 'Ernest Chris',
            accounttype: 'Portal',
            item: 'this will have a long scrollable list of all items purchased', 
            total: '#40000', 
            purchasedate: '24/24/2024 (3;30pm)', 
            deliveredby: 'Ernest', 
            datadelivered: '24/24/2024 (3;30pm)',  
        },
        { 
            id: 'fdskfdsjlfdls',
            orderby: 'Ernest Chris',
            accounttype: 'Portal',
            item: 'this will have a long scrollable list of all items purchased', 
            total: '#40000', 
            purchasedate: '24/24/2024 (3;30pm)', 
            deliveredby: 'Ernest', 
            datadelivered: '24/24/2024 (3;30pm)',  
        },
        { 
            id: 'fdskfdsjlfdls',
            orderby: 'Ernest Chris',
            accounttype: 'Portal',
            item: 'this will have a long scrollable list of all items purchased', 
            total: '#40000', 
            purchasedate: '24/24/2024 (3;30pm)', 
            deliveredby: 'Ernest', 
            datadelivered: '24/24/2024 (3;30pm)',  
        },
        { 
            id: 'fdskfdsjlfdls',
            orderby: 'Ernest Chris',
            accounttype: 'Portal',
            item: 'this will have a long scrollable list of all items purchased', 
            total: '#40000', 
            purchasedate: '24/24/2024 (3;30pm)', 
            deliveredby: 'Ernest', 
            datadelivered: '24/24/2024 (3;30pm)',  
        },
    ]  

    return (
        <div className='w-full h-full flex flex-col px-8 py-8 ' >  
            <p className='font-Poppins-Semibold text-lg' >Completed Orders</p>
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
                {/* <button onClick={()=> history.push('/dashboard/uploadproduct')}  className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' > Save As </button> */}
            </div>
            <div className='w-full flex flex-row py-4 items-center text-base' >
                <p className='font-Poppins-Semibold ' >Download Statement of Completed Orders</p>
                <div className='w-full flex flex-1' />
                <div className='flex flex-row mr-4 items-center' >
                    <div className='font-Poppins-Medium text-xs mr-2 flex flex-row items-center' >
                        <p >Start:</p> 
                        <p className='mx-3 p-1 border-2 border-entries rounded-md' >14/</p>
                        <p className='p-1 border-2 border-entries rounded-md'>03</p> 
                    </div> 
                    <svg width="16" height="18"  viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4137 1.81812C13.4137 1.26583 12.966 0.818115 12.4137 0.818115C11.8614 0.818115 11.4137 1.26583 11.4137 1.81812V2.45448H6.86825V1.81812C6.86825 1.26583 6.42054 0.818115 5.86825 0.818115C5.31597 0.818115 4.86825 1.26583 4.86825 1.81812V2.45448H3.41371C1.95768 2.45448 0.777344 3.63482 0.777344 5.09084V8.36357V16.5454C0.777344 18.0014 1.95768 19.1818 3.41371 19.1818H14.8683C16.3243 19.1818 17.5046 18.0014 17.5046 16.5454V8.36357V5.09084C17.5046 3.63482 16.3243 2.45448 14.8683 2.45448H13.4137V1.81812ZM15.5046 7.36357V5.09084C15.5046 4.73939 15.2197 4.45448 14.8683 4.45448H13.4137V5.09084C13.4137 5.64313 12.966 6.09084 12.4137 6.09084C11.8614 6.09084 11.4137 5.64313 11.4137 5.09084V4.45448H6.86825V5.09084C6.86825 5.64313 6.42054 6.09084 5.86825 6.09084C5.31597 6.09084 4.86825 5.64313 4.86825 5.09084V4.45448H3.41371C3.06225 4.45448 2.77734 4.73939 2.77734 5.09084V7.36357H15.5046ZM2.77734 9.36357H15.5046V16.5454C15.5046 16.8968 15.2197 17.1818 14.8683 17.1818H3.41371C3.06225 17.1818 2.77734 16.8968 2.77734 16.5454V9.36357Z" fill="#9AA0A6"/>
                    </svg>
                </div> 
                <div className='flex flex-row ml-4 items-center' >
                    <div className='font-Poppins-Medium text-xs mr-2 flex flex-row items-center' >
                        <p >End:</p> 
                        <p className='mx-3 p-1 border-2 border-entries rounded-md' >14/</p>
                        <p className='p-1 border-2 border-entries rounded-md'>03</p> 
                    </div>
                    <svg width="16" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4137 1.81812C13.4137 1.26583 12.966 0.818115 12.4137 0.818115C11.8614 0.818115 11.4137 1.26583 11.4137 1.81812V2.45448H6.86825V1.81812C6.86825 1.26583 6.42054 0.818115 5.86825 0.818115C5.31597 0.818115 4.86825 1.26583 4.86825 1.81812V2.45448H3.41371C1.95768 2.45448 0.777344 3.63482 0.777344 5.09084V8.36357V16.5454C0.777344 18.0014 1.95768 19.1818 3.41371 19.1818H14.8683C16.3243 19.1818 17.5046 18.0014 17.5046 16.5454V8.36357V5.09084C17.5046 3.63482 16.3243 2.45448 14.8683 2.45448H13.4137V1.81812ZM15.5046 7.36357V5.09084C15.5046 4.73939 15.2197 4.45448 14.8683 4.45448H13.4137V5.09084C13.4137 5.64313 12.966 6.09084 12.4137 6.09084C11.8614 6.09084 11.4137 5.64313 11.4137 5.09084V4.45448H6.86825V5.09084C6.86825 5.64313 6.42054 6.09084 5.86825 6.09084C5.31597 6.09084 4.86825 5.64313 4.86825 5.09084V4.45448H3.41371C3.06225 4.45448 2.77734 4.73939 2.77734 5.09084V7.36357H15.5046ZM2.77734 9.36357H15.5046V16.5454C15.5046 16.8968 15.2197 17.1818 14.8683 17.1818H3.41371C3.06225 17.1818 2.77734 16.8968 2.77734 16.5454V9.36357Z" fill="#9AA0A6"/>
                    </svg>
                </div> 
                <div className='w-full flex flex-1' />
                <button className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-12 rounded-md mx-1' > Print </button>
            </div>
            <div className='w-auto mt-8 mb-14 px-2' >
                <table className='text-xs '>
                    <thead>
                        <tr className='font-Poppins-Semibold' >
                            <th className='bg-white'>ID</th>
                            <th className='bg-white'>Order ID</th>
                            <th className='bg-white'>Order By</th>
                            <th className='bg-white'>Account Type</th>
                            <th className='bg-white'>Items</th> 
                            <th className='bg-white'>Order Total</th> 
                            <th className='bg-white'>Date/Time Purchased</th> 
                            <th className='bg-white'>Delivery By</th> 
                            <th className='bg-white'>Date/Time Delivered</th>  
                            <th className='bg-white'>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return(
                                <tr key={index} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.orderby}</td>
                                    <td>{item.accounttype}</td>
                                    <td><p className='text-xs text-menu_gray' >{item.item}</p></td>
                                    <td>{item.total}</td>
                                    <td>{item.purchasedate}</td>
                                    <td>{item.deliveredby}</td>
                                    <td>{item.datadelivered}</td> 
                                    <td className='text-processing_color font-Poppins-Regular' >View Invoice</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='w-full flex flex-row items-center pr-12'>
                <p className='font-Poppins-Regular text-xs' >Showing 1-10 of 30 items</p>
                <div className='w-full flex flex-1' />
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ' >1</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >2</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >3</div>
            </div>
        </div>
    )
}
