import React from 'react'; 

import DashboardRoutes from '../../../Navigation/DashboardRoutes';  
import Menu from '../../Dashboard/Component/Menu';   

export default function Dashboard() {
    return (
        <div className='w-full h-screen flex flex-col  overflow-hidden' >
            <div className="flex-1 flex overflow-auto"> 
                <div className="w-full flex flex-row ">
                    <div className='overflow-y-auto overflow-x-hidden w-64 m-0 bg-midlman_color '>
                        <Menu />
                    </div>
                    <div className='w-full h-screen flex flex-1 overflow-y-auto overflow-x-hidden ' >
                        <DashboardRoutes/>
                    </div>
                </div>
            </div>
        </div>
    );
}
