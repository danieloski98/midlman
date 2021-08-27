import React from 'react'
import pic from '../../../../../assets/images/profile.png'
import { MenuContext } from '../../../../../Context/MenuContext';
import useDetails from '../../../../../Hooks/useDetails'

export default function Navbar() {

  const {adminDetails} = useDetails();
  const menuContext = React.useContext(MenuContext);
    return (
        <div className='w-full h-10 flex flex-row items-center' >
            <div onClick={() => menuContext.setShowModal((prev: boolean) => !prev)} className="cursor-pointer" >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12H0V10H18V12ZM18 7H0V5H18V7ZM18 2H0V0H18V2Z" fill="#828282"/>
            </svg>
            </div>
            <div className='w-full flex flex-1' />
            <img src={pic} className='w-10 h-10' alt='profile' />
            <div className='flex flex-col ml-4' >
                <div className='flex flex-row items-center' >
                    <p className='ml-1 mr-2 text-xs font-Poppins-Regular' >{adminDetails.username}</p>
                    <svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                        <path className='fill-current' d="M0.273014 1.57264L0.202354 1.64335L0.273039 1.71403L5.92971 7.3707L6.00042 7.44141L6.07113 7.3707L11.7278 1.71403L11.7985 1.64335L11.7278 1.57264L10.7852 0.629302L10.7144 0.558537L10.6437 0.629282L6.00042 5.27322L1.35713 0.629282L1.2864 0.558537L1.21568 0.629302L0.273014 1.57264Z" fill="#B4E4E1" stroke="#B4E4E1" />
                    </svg>
                </div>
                {/* <p className='ml-1 text-xs font-Poppins-Regular text-right text-menu_gray' >Super Admin</p> */}
            </div>
        </div>
    )
}
