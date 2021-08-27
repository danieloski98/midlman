import React from 'react'
import { useHistory } from 'react-router';
import Miscellenous from './Component/Miscellenous';
import Email from './Component/Email';
import EmailNotifications from './Component/EmailNotifications';
import Password from './Component/Password';
import Profile from './Component/Profile';

export default function Setting() {

    const tab = 'px-14 py-2 rounded-lg cursor-pointer '
    const tab_text = 'font-Poppins-Semibold text-xs '
    const history = useHistory();

    const [tabIndex, setTabIndex] = React.useState(1); 
    const [tabLink, setTabLink] = React.useState('Edit Profile')

    const HandleTabClick = (index: any) => {
        if(index === 1){
            setTabIndex(index);
            setTabLink('Edit Profile');
        } else if(index === 2){
            setTabIndex(index);
            setTabLink('Change Password');
        } else {
            setTabIndex(index);
            setTabLink('Change Email');
        }
    }

    return (
        <div className='w-full h-full'>
            <div className='w-auto border-b-1 border-entries mx-8' />

            <div className='w-full px-20 py-8' >
                <div className=' w-full flex flex-row' >
                    <p className='font-Poppins-Regular text-xs text-menu_gray' >Settings</p>
                    <svg className='mx-2' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.71309 6.99999L1.70209 0.98999L0.288086 2.40399L4.88809 7.00399L0.288086 11.597L1.70209 13.011L7.71309 6.99999Z" fill="#828282"/>
                    </svg>
                    <p className='font-Poppins-Regular text-xs text-menu_gray' >{tabLink}</p>
                    <svg className='mx-2' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.71309 6.99999L1.70209 0.98999L0.288086 2.40399L4.88809 7.00399L0.288086 11.597L1.70209 13.011L7.71309 6.99999Z" fill="#828282"/>
                    </svg>
                    <div className='w-full flex flex-1' />
                    <div onClick={()=> history.push('/')}  className='flex flex-row cursor-pointer' >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16H1C0.447715 16 0 15.5522 0 15V7.13996C0 6.88062 0.100756 6.63143 0.281 6.44496L5.781 0.744961C5.96945 0.549725 6.22915 0.439453 6.5005 0.439453C6.77185 0.439453 7.03155 0.549725 7.22 0.744961L10.02 3.64496L8.59 5.04696L6.5 2.87996L2 7.53996V13.995H13V14.995C13.0013 15.261 12.8966 15.5167 12.7089 15.7053C12.5212 15.8939 12.2661 16 12 16ZM16 9.99996H8V7.99996H16V9.99996Z" fill="#EB5757"/>
                        </svg> 
                        <p style={{color:'#EB5757'}} className='font-Poppins-Regular text-xs text-menu_gray ml-4' >Logout</p>
                    </div>
                </div>
                <div className='w-full flex justify-center pt-12 items-center' >
                    <div className='w-auto bg-login_buttton flex flex-row rounded-lg' style={{padding:'1px'}} >
                        <div onClick={()=> HandleTabClick(1)} className={tabIndex === 1 ? tab+'bg-white shadow' : tab+'bg-login_buttton'} >
                            <p className={tabIndex === 1 ? tab_text : tab_text+'menu_gray'}  >Edit Profile</p>
                        </div>
                        <div onClick={()=> HandleTabClick(2)} className={tabIndex === 2 ? tab+'bg-white shadow' : tab+'bg-login_buttton'} >
                            <p className={tabIndex === 2 ? tab_text : tab_text+'menu_gray'} >Change Password</p>
                        </div>
                        <div onClick={()=> HandleTabClick(3)} className={tabIndex === 3 ? tab+'bg-white' : tab+'bg-login_buttton'} >
                            <p className={tabIndex === 3 ? tab_text : tab_text+'menu_gray'} >Change Email</p>
                        </div>
                        <div onClick={()=> HandleTabClick(4)} className={tabIndex === 4 ? tab+'bg-white' : tab+'bg-login_buttton'} >
                            <p className={tabIndex === 4 ? tab_text : tab_text+'menu_gray'} >Miscellenous</p>
                        </div>
                        <div onClick={()=> HandleTabClick(5)} className={tabIndex === 5 ? tab+'bg-white' : tab+'bg-login_buttton'} >
                            <p className={tabIndex === 5 ? tab_text : tab_text+'menu_gray'} >Email Notifications</p>
                        </div>
                    </div>
                </div>
                <div className={tabIndex === 1 ? 'w-full flex flex-col justify-center items-center ' : 'hidden'}>
                    <Profile />
                </div>
                <div className={tabIndex === 2 ? 'w-full flex flex-col justify-center items-center ' : 'hidden'}>
                    <Password />
                </div>
                <div className={tabIndex === 3 ? 'w-full flex flex-col justify-center items-center ' : 'hidden'}>
                    <Email />
                </div>
                <div className={tabIndex === 4 ? 'w-full flex flex-col justify-center items-center ' : 'hidden'}>
                    <Miscellenous />
                </div>
                <div className={tabIndex === 5 ? 'w-full flex flex-col justify-center items-center ' : 'hidden'}>
                    <EmailNotifications />
                </div>
            </div>
        </div>
    )
}
