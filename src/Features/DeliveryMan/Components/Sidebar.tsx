import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const ACTIVE_CLASS = 'w-full h-16 flex items-center pl-16  border-l-4 border-white bg-gray-300 font-Poppins-Medium';
const INACTIVE_CLASS = 'w-full h-16 flex items-center pl-16  border-l-4 border-midlman_color text-white font-Poppins-Medium';

export default function Sidebar() {
    const location = useLocation();
    
    return (
        <div className="w-full h-full bg-midlman_color flex flex-col shadow-lg z-10">
            <div className="w-full h-16 flex justify-center items-center">
                <img src="/images/logo.png" alt="" className="object-contain font-Poppins-Bold" />
            </div>

            <div className="flex-1 pt-8 flex flex-col">
                <div className={location.pathname ==='/deliveryman' ? ACTIVE_CLASS:INACTIVE_CLASS}>
                    <NavLink to="/deliveryman">Dashboard</NavLink>
                </div>
                <div className={location.pathname ==='/deliveryman/statistics' ? ACTIVE_CLASS:INACTIVE_CLASS}>
                    <NavLink to="/deliveryman/statistics">Statistics</NavLink>
                </div>
                <div className={location.pathname ==='/deliveryman/settings' ? ACTIVE_CLASS:INACTIVE_CLASS}>
                    <NavLink to="/deliveryman/settings">Settings</NavLink>
                </div>
            </div>

        </div>
    )
}
