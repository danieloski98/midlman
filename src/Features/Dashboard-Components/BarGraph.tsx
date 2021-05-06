import React from 'react';  
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export default function BarGraph() {
    const data = [
        {
          "date": "June 25",
          "Portal": 4000,
          "Express": 2400
        },
        {
          "date": "June 26",
          "Portal": 3000,
          "Express": 1398
        },
        {
          "date": "June 27",
          "Portal": 2000,
          "Express": 9800
        },
        {
          "date": "June 28",
          "Portal": 2780,
          "Express": 3908
        },
        {
          "date": "June 29",
          "Portal": 1890,
          "Express": 4800
        },
        {
          "date": "June 30",
          "Portal": 2390,
          "Express": 3800
        },
        {
          "date": "June 31",
          "Portal": 3490,
          "Express": 4300
        }
      ]
      
    return(                
        <div className=' w-full flex flex-col rounded-lg shadow-2xl' style={{height:'370px'}}>
            <div className=' w-full px-6 pt-8 flex flex-row pb-20 items-center' >
                <div className='flex flex-col' >
                    <p className='font-Poppins-Medium text-lg' >Active Users</p>
                    <p className='font-Poppins-Regular text-xs text-menu_gray '>Account usage per day</p>
                </div>
                <div className='w-full flex flex-1' />
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.08203 3.66667C2.08203 2.05584 3.38787 0.75 4.9987 0.75C6.60953 0.75 7.91536 2.05584 7.91536 3.66667C7.91536 5.2775 6.60953 6.58333 4.9987 6.58333C3.38787 6.58333 2.08203 5.2775 2.08203 3.66667ZM4.9987 5.41667C5.9652 5.41667 6.7487 4.63317 6.7487 3.66667C6.7487 2.70017 5.9652 1.91667 4.9987 1.91667C4.0322 1.91667 3.2487 2.70017 3.2487 3.66667C3.2487 4.63317 4.0322 5.41667 4.9987 5.41667Z" fill="#00A69C"/>
                    <path d="M1.69887 8.5335C0.823697 9.40867 0.332031 10.5957 0.332031 11.8333H1.4987C1.4987 10.9051 1.86745 10.0148 2.52382 9.35846C3.1802 8.70208 4.07044 8.33333 4.9987 8.33333C5.92695 8.33333 6.81719 8.70208 7.47357 9.35846C8.12995 10.0148 8.4987 10.9051 8.4987 11.8333H9.66536C9.66536 10.5957 9.1737 9.40867 8.29853 8.5335C7.42336 7.65833 6.23637 7.16667 4.9987 7.16667C3.76102 7.16667 2.57404 7.65833 1.69887 8.5335Z" fill="#00A69C"/>
                </svg>
                <p className='ml-1 text-midlman_color text-xs font-Poppins-Regular' >602</p>
            </div>
            <BarChart width={300} height={240} data={data}
                margin={{ top: 10, right: 30, left: 10, bottom: 20 }}>
                <XAxis dataKey="date" fontSize='12px' />
                <YAxis fontSize='12px'/>
                <Tooltip  wrapperStyle={{ width: 100, fontSize:'12px' }}  />
                <Legend width={150} wrapperStyle={{ top: -45, right: -5, backgroundColor: 'white', fontSize:'12px'}}/>
                <Bar dataKey="Portal" fill="#00A69C" />
                <Bar dataKey="Express" fill="#1B75BB" />
            </BarChart>
        </div> 
    )    
}
