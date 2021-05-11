import React from 'react';

import logo from '../../../assets/images/logo.png'
import settings from '../../../assets/images/settings.png'
import { useHistory } from 'react-router-dom'


export default function Menu() {

    const history = useHistory()
    const [dropdown, setDropDown] = React.useState('')
    const [active, setActive] = React.useState(0)
    const [submenu, setSubMenu] = React.useState(0)
    const activeindicator = 'w-full bg-white pl-1 cursor-pointer'
    const menuactivecolor = 'w-full flex pl-8 flex-row items-center py-3 bg-active_menu cursor-pointer'
    const menucolor = 'w-full flex pl-8 flex-row items-center py-3 bg-midlman_color text-menu_textcolor cursor-pointer'

    const ClickHandler =(path: any, index: number)=> { 
        history.push(path); 
        setSubMenu(index)
    }

    const DropDown = (source: string, index: number) => { 
        if(dropdown === source){
            setDropDown('')   
            setSubMenu(0)
        } else {
            setDropDown(source)
            setActive(index)  
        }
    }

    const DashboardTab = (path: any, index: number, source: string, subindex: number) => {
        ClickHandler(path, index);
        DropDown(source, subindex);
    }

    return (
        <div className='w-full h-full py-3 text-white' > 
            <div className='w-full py-6 flex flex-col ml-14' >  
                <img src={logo} alt='logo' className='w-28' />   
                <p className='text-base font-Poppins-Regular' >admin</p>
            </div>
                
            <div onClick={()=> DashboardTab('/dashboard', 0, '', 0)} className={active === 0 ? activeindicator : 'w-full cursor-pointer'} >
                <div  className={active === 0 ? menuactivecolor: menucolor} >
                    <svg width="16" height="19" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                        <path className='fill-current'  d="M15 19H1C0.447715 19 0 18.5523 0 18V8.35698C0.0154912 8.11192 0.119639 7.88088 0.293 7.70698L7.293 0.706983C7.48057 0.519206 7.73509 0.413696 8.0005 0.413696C8.26591 0.413696 8.52043 0.519206 8.708 0.706983L15.708 7.70698C15.8957 7.89426 16.0009 8.1488 16 8.41398V18C16 18.5523 15.5523 19 15 19ZM8 2.82798L2 8.82798V17H14V8.82798L8 2.82798ZM9 14.999H7V11.999H4V9.99898H7V6.99898H9V9.99898H12V11.999H9V14.999Z" fill="white"/>
                    </svg>
                    <p className='text-base font-Poppins-Semibold ml-3' >Dashboard</p>
                </div>
            </div>
            <div className='w-full mt-4'  >
                
                <div onClick={()=> ClickHandler('/dashboard/admin', 1)} className={active === 1  ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('admin', 1)} className={active === 1 ? menuactivecolor: menucolor}>
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                        </svg> 
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Manage Admins</p>

                        {dropdown !== 'admin' ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div onClick={()=> ClickHandler('/dashboard/admin', 1)} className={dropdown === 'admin' ? submenu === 1 ? menuactivecolor: menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Admins</p> 
                </div>
                <div onClick={()=> ClickHandler('/dashboard/delivery', 2)} className={dropdown === 'admin' ? submenu === 2 ? menuactivecolor: menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Delivery Man</p> 
                </div>
                <div onClick={()=> ClickHandler('/dashboard/managerole', 3)}  className={dropdown === 'admin' ? submenu === 3 ? menuactivecolor: menucolor: 'hidden'}  > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Manage Roles</p> 
                </div>
            </div>
            <div className='w-full mt-4' >
                <div onClick={()=> DropDown('order', 2)}  className={active === 2 ? menuactivecolor : menucolor} >
                    <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                        <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                    </svg> 
                    <p className='text-sm ml-3 mr-2 font-Poppins-Medium' >Orders</p> 
                </div>
                <div onClick={()=> ClickHandler('/dashboard/completedorder', 1)} className={active === 2  ? activeindicator : 'w-full cursor-pointer'} > 
                    <div onClick={()=> DropDown('order', 2)} className={active === 2 ? menuactivecolor: menucolor} > 
                        <p className='text-base font-Poppins-Semibold mr-2' >Orders Details</p>
                        {dropdown !== 'order' ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div onClick={()=> ClickHandler('/dashboard/completedorder', 1)} className={dropdown === 'order' ? submenu === 1 ? menuactivecolor: menucolor: 'hidden'}   > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Completed Orders</p> 
                </div> 
            </div>
            <div className='w-full mt-4' >
                <div onClick={()=> ClickHandler('/dashboard/expressaccount', 1)}  className={active === 2.5  ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('account', 2.5)} className={active === 2.5 ? menuactivecolor: menucolor}>
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                        </svg> 
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Accounts</p>
                        {dropdown !== 'catalogue' ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div onClick={()=> ClickHandler('/dashboard/expressaccount', 1)}   className={dropdown === 'account' ? submenu === 1 ? menuactivecolor: menucolor: 'hidden'}   > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Express</p> 
                </div>
                <div onClick={()=> ClickHandler('/dashboard/portalaccount', 2)} className={dropdown === 'account' ? submenu === 2 ? menuactivecolor: menucolor: 'hidden'}  > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Portal</p> 
                </div> 
            </div>
            <div className='w-full mt-4' >
                <div onClick={()=> ClickHandler('/dashboard/catergories', 1)}  className={active === 3  ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('catalogue', 3)} className={active === 3 ? menuactivecolor: menucolor}>
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                        </svg> 
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Catalogue</p>
                        {dropdown !== 'catalogue' ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div onClick={()=> ClickHandler('/dashboard/catergories', 1)}   className={dropdown === 'catalogue' ? submenu === 1 ? menuactivecolor: menucolor: 'hidden'}   > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Categories</p> 
                </div>
                <div onClick={()=> ClickHandler('/dashboard/brand', 2)} className={dropdown === 'catalogue' ? submenu === 2 ? menuactivecolor: menucolor: 'hidden'}  > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Brand</p> 
                </div>
                <div onClick={()=> ClickHandler('/dashboard/product', 3)}   className={dropdown === 'catalogue' ? submenu === 3 ? menuactivecolor: menucolor: 'hidden'}   > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Products</p> 
                </div>
                <div onClick={()=> ClickHandler('/dashboard/productrating', 4)} className={dropdown === 'catalogue'  ? submenu === 4 ? menuactivecolor: menucolor: 'hidden'}  > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Product Rating</p> 
                </div>
            </div>
            <div className='w-full mt-4' >
                <div className={active === 4 ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('report', 4)} className={active === 4 ? menuactivecolor: menucolor}>
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                        </svg> 
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Reports</p>
                        {!dropdown.includes('report') ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div className={dropdown.includes('report') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Low Stock Products</p> 
                </div>
                <div className={dropdown.includes('report') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Product Views</p> 
                </div>
                <div className={dropdown.includes('report') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Refund Requests</p> 
                </div>
                <div className={dropdown.includes('report') ? menucolor: 'hidden'}  > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Prescription Reports</p> 
                </div>
            </div>
            <div className='w-full mt-4' >
                <div className={active === 5  ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('coupons', 5)} className={active === 5 ? menuactivecolor: menucolor}>
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                        </svg> 
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Coupons</p>
                        {!dropdown.includes('coupons') ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div className={dropdown.includes('coupons') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Coupon Manager</p>
                    <svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                        <path className='fill-current' d="M0.273014 1.57264L0.202354 1.64335L0.273039 1.71403L5.92971 7.3707L6.00042 7.44141L6.07113 7.3707L11.7278 1.71403L11.7985 1.64335L11.7278 1.57264L10.7852 0.629302L10.7144 0.558537L10.6437 0.629282L6.00042 5.27322L1.35713 0.629282L1.2864 0.558537L1.21568 0.629302L0.273014 1.57264Z" fill="#B4E4E1" stroke="#B4E4E1" stroke-width="0.2"/>
                    </svg>
                </div>
            </div>
            <div className='w-full mt-4' >
                <div className={active === 6  ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('shipping', 6)} className={active === 6 ? menuactivecolor: menucolor}>
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                        </svg> 
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Shipping</p>
                        {!dropdown.includes('shipping') ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div className={dropdown.includes('shipping') ? menucolor: 'hidden'}  > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Shipping Methods</p> 
                </div>
                <div className={dropdown.includes('shipping') ? menucolor: 'hidden'}  > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Flat Rate</p> 
                </div>
                <div className={dropdown.includes('shipping') ? menucolor: 'hidden'}  > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Geolocation</p> 
                </div> 
            </div>
            <div className='w-full mt-4' >
                <div className={active === 7  ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('payment', 7)} className={active === 7 ? menuactivecolor: menucolor}>
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                        </svg> 
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Payment</p>
                        {!dropdown.includes('payment') ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div className={dropdown.includes('payment') ? menucolor: 'hidden'}> 
                    <p className='text-sm font-Poppins-Regular mr-2' >Manual Top up</p> 
                </div>
            </div>
            <div className='w-full mt-4' >
                <div className={active === 8  ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('web', 8)} className={active === 8 ? menuactivecolor: menucolor}>
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                        </svg> 
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Web Pages</p>
                        {!dropdown.includes('web') ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div className={dropdown.includes('web') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Landing Page</p> 
                </div>
                <div className={dropdown.includes('web') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Contact Us Form</p> 
                </div>
                <div className={dropdown.includes('web') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Newsletter</p> 
                </div> 
                <div className={dropdown.includes('web') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Our Blog</p> 
                </div>
                <div className={dropdown.includes('web') ? menucolor: 'hidden'}  > 
                    <p className='text-sm font-Poppins-Regular mr-2' >About Us</p> 
                </div>
                <div className={dropdown.includes('web') ? menucolor: 'hidden'}   > 
                    <p className='text-sm font-Poppins-Regular mr-2' >FAQ</p> 
                </div> 
            </div>
            <div className='w-full mt-4' >
                <div className={active === 9  ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('other', 9)} className={active === 9 ? menuactivecolor: menucolor}>
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                        </svg> 
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Other Content</p>
                        {!dropdown.includes('other') ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div className={dropdown.includes('other') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Terms & Conditions</p> 
                </div>
                <div className={dropdown.includes('other') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Privacy Policy</p> 
                </div>
                <div className={dropdown.includes('other') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Refund Policy</p> 
                </div> 
            </div>
            <div className='w-full mt-4' >
                <div className={active === 10  ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('media', 10)} className={active === 10 ? menuactivecolor: menucolor}>
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-current'  d="M9.89754 18.968C9.36652 18.9696 8.85696 18.7586 8.48254 18.382L0.648543 10.547C0.235132 10.1348 0.0231528 9.56207 0.0685427 8.98001L0.568543 2.41401C0.639841 1.4264 1.42674 0.641631 2.41454 0.573012L8.98054 0.0730117C9.03154 0.0620117 9.08354 0.0620117 9.13454 0.0620117C9.66439 0.063372 10.1722 0.273991 10.5475 0.648012L18.3825 8.48201C18.7578 8.85711 18.9686 9.36594 18.9686 9.89651C18.9686 10.4271 18.7578 10.9359 18.3825 11.311L11.3115 18.382C10.9374 18.7583 10.4282 18.9693 9.89754 18.968ZM9.13354 2.06201L2.56254 2.56201L2.06254 9.13301L9.89754 16.968L16.9675 9.89801L9.13354 2.06201ZM5.65454 7.65402C4.70038 7.65422 3.87895 6.98037 3.69262 6.04458C3.50629 5.10879 4.00695 4.17169 4.88841 3.80639C5.76987 3.44109 6.78663 3.74933 7.31687 4.54259C7.84711 5.33586 7.74313 6.39322 7.06854 7.06801C6.69437 7.44433 6.18522 7.65534 5.65454 7.65402Z" fill="#B4E4E1"/>
                        </svg> 
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Media Content</p>
                        {!dropdown.includes('media') ?
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M0.929688 2.05417L8.00052 9.125L15.0714 2.05417L13.893 0.875L8.00052 6.76833L2.10802 0.875L0.929688 2.05417Z" fill="#828282"/>
                            </svg>:
                            <svg width="14" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current' d="M15.0703 7.94583L7.99948 0.875L0.928647 7.94583L2.10698 9.125L7.99948 3.23167L13.892 9.125L15.0703 7.94583Z" fill="#828282"/>
                            </svg>
                        }
                    </div>
                </div>
                <div className={dropdown.includes('media') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Logos</p> 
                </div>
                <div className={dropdown.includes('media') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Banners</p> 
                </div>
                <div className={dropdown.includes('media') ? menucolor: 'hidden'}  > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Slider Images</p> 
                </div> 
                <div className={dropdown.includes('media') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Featured Brands</p> 
                </div>
                <div className={dropdown.includes('media') ? menucolor: 'hidden'} > 
                    <p className='text-sm font-Poppins-Regular mr-2' >Social Icons</p> 
                </div>
            </div>
            <div className='w-full mt-4' >
                <div className={active === 11  ? activeindicator : 'w-full cursor-pointer'} >
                    <div onClick={()=> DropDown('other', 11)} className={active === 11 ? menuactivecolor: menucolor}>
                        <img src={settings} alt='' className='12' />
                        <p className='text-base font-Poppins-Semibold ml-3 mr-2' >Settings</p> 
                    </div>
                </div>
            </div>
        </div>
    );
} 

