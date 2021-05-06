import React from 'react'
import { AreaChart, XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from 'recharts'

export default function AreaGraph() {

    const data = [
        {
          "name": "June 25",
          "Gross Profit": 4000,
          "Net Profit": 2400,
          "Discounts": 1400
        },
        {
          "name": "June 26",
          "Gross Profit": 3000,
          "Net Profit": 1398,
          "Discounts": 2210
        },
        {
          "name": "June 27",
          "Gross Profit": 2000,
          "Net Profit": 9800,
          "Discounts": 2290
        },
        {
          "name": "June 28",
          "Gross Profit": 2780,
          "Net Profit": 3908,
          "Discounts": 2000
        },
        {
          "name": "June 29",
          "Gross Profit": 1890,
          "Net Profit": 4800,
          "Discounts": 2181
        },
        {
          "name": "June 30",
          "Gross Profit": 2390,
          "Net Profit": 3800,
          "Discounts": 2500
        },
        {
          "name": "June 31",
          "Gross Profit": 3490,
          "Net Profit": 4300,
          "Discounts": 2100
        }
      ]

    return (
        <div className=' w-full h-full flex flex-col rounded-lg shadow-2xl' >
            <div className=' w-full px-6 pt-8 flex flex-row pb-10 items-center' >
                <p className='font-Poppins-Medium text-lg'>Sales Report</p>
            </div>
            <ResponsiveContainer width={700} height={500}>
            <AreaChart data={data}
                margin={{ top: 10, right: 30, left: 10, bottom: 20 }}>
                <defs>
                    <linearGradient id="Gross" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#B4E4E1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#B4E4E1" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="Net" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1B75BB" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#1B75BB" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="Discounts" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F2994A" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#F2994A" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" fontSize='12px' />
                <YAxis fontSize='12px' /> 
                <Tooltip  wrapperStyle={{ fontSize:'12px' }}  />
                <Area type="monotone" dataKey="Gross Profit" stroke="#00A69C" fillOpacity={1} fill="url(#Gross)" />
                <Area type="monotone" dataKey="Net Profit" stroke="#1B75BB" fillOpacity={1} fill="url(#Net)" />
                <Area type="monotone" dataKey="Discounts" stroke="#F2994A" fillOpacity={1} fill="url(#Discounts)" />
            </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
