import React from 'react' 

export default function Roles(props: any) {     
    return (
        <div className='w-full h-full flex flex-col items-center py-8 ' >  
            <p className=' w-100 font-Poppins-Semibold text-lg -ml-48' >Roles</p> 
            <div className='w-auto pb-8 flex mt-4 flex-row' >
                <div className=' w-72 px-4 flex flex-col' > 
                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >1. Manage Dashboard</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                       
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Dashboard</p>
                            
                        </div>
                    </div>
                    <div className='w-full py-4' >

                        <div className="w-full flex">

                            <p className='text-sm font-Poppins-Semibold pb-2' >2. Manage Orders</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>

                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Order Details</p>
                            
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Order Status</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Assign Delivery Man</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Payment Status</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Completed Orders</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                    </div>
                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >3. Manage Catelogue</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Categories</p>
                            
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Create  Categories</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Categories</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Categories</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>

                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Brands</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>

                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Products</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>

                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Ratings</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>

                    </div>
                    <div className='w-full py-4' >
                        
                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >4. Manage Blog</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Create Article</p>
                            
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Article</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Article</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                    </div>
                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >5. Manage Coupon</p>
                            <label className="switch mt-1 ml-4">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Coupons</p>
                            
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Create Coupons</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Coupons</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Coupons</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                    </div>
                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >6. Manage Transactions</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Manual Top</p>
                            
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Bank Payments</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                    </div>

                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >7. Manage Shipping Methods</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Shipping Methods</p>
                            
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Flat-Rate</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View GeoLocation</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                    </div>
                    
                   
                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >8. Manage Admins</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Admin</p>
                            
                        </div>
                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Delivery Man</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Manage Roles</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                       
                    </div>
                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >9. Manage Chat</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Chat System</p>
                            
                        </div> 
                    </div>
                </div>
                <div className='w-72 px-4 flex flex-col' >
                   
                  
                    <div className='w-full py-4' >

                        <div className="w-full flex">
                        <p className='text-sm font-Poppins-Semibold pb-2' >10. Manage Express Account</p>
                        <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Express Account</p>
                            
                        </div>
                     
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Express Account</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>

                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Activate or Deactivate Express Account</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>

                    </div>
                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >11. Manage Portal Account</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Portal Account</p>
                            
                        </div>
                    
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Portal Account</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>

                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Activate or Deactivate Portal Account</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>

                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Accept or Decline portal Account</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                    </div>
               
                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >12. Manage Report</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Sales Report</p>
                            
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Low Stock Products</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Product Views</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                       
                    </div>
                    

                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >13. Manage Refund Requests</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Refund Requests</p>
                            
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Accept/Decline Refund Requests</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div> 
                    </div>

                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >14. Manage Prescription Reports</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Prescription Report</p>
                            
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Accept/Decline/Delete Prescription Report</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div> 
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Send Request</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add New Prescription</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                    </div>

                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >15. Manage Content</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Contents</p>
                            
                        </div>
                    </div>

                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >16. Manage Web Pages</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Web Pages</p>
                            {/* <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                    </div>

                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >17. Manage Media Content</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Media Content</p>
                            
                        </div>
                    </div>

                    <div className='w-full py-4' >

                        <div className="w-full flex">
                            <p className='text-sm font-Poppins-Semibold pb-2' >18. Manage Dashboard Notification</p>
                            <label className="switch ml-4 mt-1">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Notification</p>
                            
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full pt-4 pb-12  flex items-cennter justify-center' >
                <button className='bg-midlman_color rounded-lg text-white mx-4 py-3 text-xs font-Poppins-Semibold w-40' >SAVE</button>
                <button className='bg-entries text-menu_gray mx-4 rounded-lg py-3 text-xs font-Poppins-Semibold w-40'>CANCEL</button>
            </div>
        </div>
    )
}
