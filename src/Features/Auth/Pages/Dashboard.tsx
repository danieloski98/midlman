import React from 'react';
import Contents from '../Dashboard-Components/Contents';

import Menu from '../Dashboard-Components/Menu'; 

export default function Dashboard() {
    return (
        <div className='w-full h-screen flex flex-col  overflow-hidden' >
            <div className="flex-1 flex overflow-auto"> 
                <div className="w-full flex flex-row ">
                    <div className='overflow-y-auto overflow-x-hidden w-64 m-0 bg-midlman_color '>
                        <Menu />
                    </div>
                    <div className='w-full h-screen flex flex-1 overflow-y-auto overflow-x-hidden ' >
                        <Contents />
                    </div>
                </div>
            </div>
        </div>
    );
}
