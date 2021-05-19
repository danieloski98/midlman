import React from 'react' 

export default function Roles(props: any) {     
    return (
        <div className='w-full h-full flex flex-col items-center py-8 ' >  
            <p className=' w-100 font-Poppins-Semibold text-lg -ml-48' >Roles</p> 
            <div className='w-auto pb-8 flex mt-4 flex-row' >
                <div className=' w-72 px-4 flex flex-col' > 
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >1. Manage Dashboard</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Dashboard</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >2. Manage Orders</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Order Details</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Order Status</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Order</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >3. Manage Categories</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Categories</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Create  Categories</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Categories</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Categories</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >4. Manage Blog</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Create Article</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Article</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Article</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >5. Manage Coupon</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Coupons</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Create Coupons</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Coupons</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Coupons</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >6. Manage Payment</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Manual Top</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >7. Manage Shipping Methods</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Shipping Methods</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add Shipping Methods</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Shipping Methods</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Shipping Methods</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >8. Manage Flat rate</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add Location</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add Prices</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >9. Manage Geolocation</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add Location</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add Prices</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >10. Manage Admins</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Admin</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add Admin</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Admin</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Admin Role</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Admin Type</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Admin</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >11. Manage Chat</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Respond Chat</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div> 
                    </div>
                </div>
                <div className='w-72 px-4 flex flex-col' >
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >12. Manage Brands</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Brands</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add Brands</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Brands</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Brands</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >13. Manage Delivery Man</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Delivery Man</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Delivery Man</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Delivery Man</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div> 
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >14. Manage Express Account</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Express Account</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add Express Account</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Express Account</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Express Account</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >15. Manage Portal Account</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Portal Account</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add Portal Account</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Portal Account</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Portal Account</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >16. Manage Products</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Products</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Create Products</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Edit Products</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Products</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Product Rating</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >17. Manage Sales Report</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Sales Report</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Print Sales Report</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div> 
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >18. Manage Low Stock Products</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Low Stock Products</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Add Low Stock Products</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div> 
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >19. Manage Refund Requests</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Refund  Requests</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Accept/Decline Refund Requests</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div> 
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >19. Manage Prescription Reports</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Prescription Report</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Delete Prescription Report</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div> 
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >20. Manage Content</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Web Pages</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Media Content</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Other Web Content</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div> 
                    </div>
                    <div className='w-full py-4' >
                        <p className='text-sm font-Poppins-Semibold pb-2' >21. Manage Dashboard Notification</p>
                        <div className='flex flex-row pt-2 mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>View Notification</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
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
