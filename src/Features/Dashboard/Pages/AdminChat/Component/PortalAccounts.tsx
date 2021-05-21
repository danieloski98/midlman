import React from 'react' 
import photo from '../../../../../assets/images/photo.png'

export default function PortalAccounts() {

    const data = [
        { 
            name: 'Ernest Chris',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '12:20am', 
        },
        { 
            name: 'Ernest Chris',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '12:20am', 
        },
        { 
            name: 'Ernest Chris',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '12:20am', 
        },
        { 
            name: 'Ernest Chris',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '12:20am', 
        },
        { 
            name: 'Ernest Chris',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '12:20am', 
        },
        { 
            name: 'Ernest Chris',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '12:20am', 
        },
        { 
            name: 'Ernest Chris',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '12:20am', 
        },
        { 
            name: 'Ernest Chris',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '12:20am', 
        },
    ]

    const Account =(source:any)=> {
        return source.map((item: any, index: any) =>{
            return( 
                <div key={index} className='w-full flex flex-row py-4 border-b-1 border-entries' >
                    <img src={photo} className='w-12 h-12 rounded-full' alt='' />
                    <div className=' w-full flex flex-col mx-2' >
                        <p className='font-Poppins-Semibold text-base' >{item.name}</p>
                        <p className='font-Poppins-Regular text-xs text-menu_gray' >{item.detail}</p>
                    </div>
                    <p style={{color:'#1B75BB'}} className='font-Poppins-Medium text-xs '>{item.date}</p>
                </div>
            )
        })
    }

    return (
        <div style={{width:'480px'}}>
            <div className='w-full flex flex-row mb-4 px-4 ' >
                <p className='font-Poppins-Semibold text-lg'>Portal Accounts</p>
                <div className='w-full flex flex-1' />
                <p className='font-Poppins-Semibold text-lg text-midlman_color '>(3)</p>
            </div>
            <div className='w-full bg-white py-4 px-8 mx-4 rounded-lg shadow-2xl'>
                {Account(data)}
                <div className='w-full flex flex-row items-center justify-end pt-4 cursor-pointer' >
                    <p className='font-Poppins-Medium text-sm mr-2 text-midlman_color' >See all</p>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.273014 1.57245L0.202354 1.64316L0.273039 1.71385L5.92971 7.37052L6.00042 7.44123L6.07113 7.37052L11.7278 1.71385L11.7985 1.64316L11.7278 1.57245L10.7852 0.629119L10.7144 0.558353L10.6437 0.629099L6.00042 5.27304L1.35713 0.629099L1.2864 0.558353L1.21568 0.629119L0.273014 1.57245Z" fill="#00A69C" stroke="#00A69C" stroke-width="0.2"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
