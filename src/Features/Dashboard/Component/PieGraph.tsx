import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';

export default function PieGraph() { 

        const data = [
            { 
              "name": 'Completed 58.6%',
              "pv": 1398,
              "fill": "#00A69C"
            },
            { 
              "name": 'Processing 28.9%',
              "pv": 2398,
              "fill": "#F2994A"
            },
            { 
              "name": 'Pending 12.5%',
              "pv": 4567,
              "fill": "#1B75BB"
            },
            {
              "name": "",
              "uv": '',
              "pv": 7567,
              "fill": "#fff"
            },
          ]

    return( 
        <div className=' w-full rounded-lg shadow-2xl mt-8' style={{height:'209px'}}> 
            <RadialBarChart 
                width={220} 
                height={220}  
                cx="50%" 
                cy="50%" 
                startAngle={0} 
                endAngle={360}  
                innerRadius="60%" 
                outerRadius="80%" 
                barSize={5} 
                data={data}>
                <RadialBar 
                    label={{ position: 'insideStart', fill: 'transparent' }}
                    background 
                    dataKey="pv"
                /> 
                {/* <Legend width={130} wrapperStyle={{ top: 80, right: -70, backgroundColor: 'transparent', fontSize:'12px', alignContent:'start'}} /> */}
            </RadialBarChart> 
        </div>
    ) 
}
