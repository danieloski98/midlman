import { Select, Input, InputGroup, InputLeftElement, Switch } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { url } from '../../../../../Utils/URL';
import * as axios from 'axios';
import { useQuery } from 'react-query';
import LoadingModal from '../../../../Modals/LoadingModal';
import { FiSearch } from 'react-icons/fi'
import { IPortal } from '../../../../../Types/Portal';

async function getPortal() {
    const request = await axios.default.get(`${url}/admin/express/accounts`);
    return request;
}

export default function PortalAccount() {
    const history = useHistory()
    const [loading, setLoading] = React.useState(true);
    const [accounts, setAccounts] = React.useState([] as Array<IPortal>);
    const [error, setError] = React.useState(false);
    const [text, setText] = React.useState('Loading Amdins');
    const [sort, setSort] = React.useState('name');
    const [search, setSearch] = React.useState('');

    const {} = useQuery('getbrands', getPortal, {
        //   retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
        //   retry: 6,
          onSuccess: (data: any) => {
              console.log(data);
              setLoading(false);
              setAccounts(prev => [...data.data.response]);
            //   alert(JSON.stringify(data));
          },
          onError: (error: any) => {
              setLoading(false);
              setError(true);
              alert(JSON.stringify(error.message));
          },
      })

        // functions
        const close = () => {
            setLoading(false);
            setText('');
        }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  

            {/* Modal  */}
            <LoadingModal open={loading} onClose={close} text={text} />

            <p className='font-Poppins-Semibold text-lg' >List of PORTAL Accounts</p>
            <div className='w-full flex relative flex-row items-center py-8' > 
                <div className='w-24 flex items-center mr-4' >  
                    <Select fontSize='xs' color='#828282' placeholder='Sort By' />
                </div>
                <InputGroup className='w-48 flex items-center' width="sm" > 
                    <InputLeftElement>
                        <FiSearch size={20} color="black" />
                    </InputLeftElement>
                    <Input fontSize='xs' paddingLeft='10' value={search} onChange={(e) => setSearch(e.target.value)}  placeholder='Search ...' />
                </InputGroup>
                <div className='w-full flex flex-1' />
                <button className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-8 rounded-md mx-1' > Print </button>
    
            </div>
            <div className='w-auto my-14 overflow-scroll' >
                <table className='text-xs '>
                    <thead>
                        <tr className='font-Poppins-Semibold' >
                            <td className='bg-white'>
                                <p className="w-24">ID</p>
                            </td>
                            <td className='bg-white'>
                                <p className="w-32">Display Picture</p>
                            </td>
                            <td className='bg-white'>
                                <p className="w-32">Business Name</p>
                            </td>
                            <td className='bg-white'>
                                <p className="w-40">Email Address</p>
                            </td>
                            <td className='bg-white'>
                                <p className="w-40">Phone Number</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-56">Address</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-40">Business Type</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-40">CAC Document</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-32">Licensce Document</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-32">Status</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-56">Action</p>
                            </td> 
                        </tr>
                    </thead>
                    <tbody>
                        {accounts
                        .filter((val) => {
                            if (search === '') {
                                return val;
                            } else if (val.email.toLowerCase().includes(search.toLowerCase())) {
                                return val;
                            }
                        }).map((item, index) => {
                            return(
                                <tr key={index} style={index === 0 ? {backgroundColor: '#EEB259'}:{}} className='font-Poppins-Regular' >
                                    <td className='font-Poppins-Semibold'>{index+1}</td>
                                    <td >
                                        <div className='w-full flex justify-center text-midlman_color text-Poppins-Medium'>
                                           <a href={item.photo}> View Image </a>
                                        </div>
                                    </td>
                                    <td>{item.businessName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address.location}</td>
                                    <td>{item.businessType}</td>
                                    <td >
                                        <div className='w-full flex justify-center text-midlman_color text-Poppins-Medium'>
                                            <a href={item.cacDoc}> View Document  </a>
                                        </div>
                                    </td>
                                    <td >
                                        <div className='w-full flex justify-center text-midlman_color text-Poppins-Medium'>
                                            <a href={item.licenseDoc}> View Document  </a>
                                        </div>
                                    </td>

                                    <td>
                                        <Select size="xs">
                                            <option value={1} selected>Pending</option>
                                            <option value={2}>Accept</option>
                                            <option value={3}>Decline</option>
                                        </Select>
                                    </td>

                                    <td>
                                    <div className="flex"> 
                                            <div className="flex h-full w-24 justify-evenly">
                                            <label className="switch">
                                                <input type="checkbox"/>
                                                <span className="slider round"></span>
                                            </label>
                                            <p>Active</p>
                                            </div>
                                            
                                            
                                                <div className='cursor-pointer flex flex-row ml-4' >
                                                    <div className='rounded-full w-4 h-4 flex justify-center items-center' style={{backgroundColor:'#EB5757'}} >
                                                        <svg width="9" height="9" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.292893 0.292893C0.683417 -0.0976312 1.31658 -0.097631 1.70711 0.292893L4.03033 2.61612L6.35355 0.292893C6.74407 -0.097631 7.37724 -0.0976312 7.76776 0.292893C8.15829 0.683417 8.15829 1.31658 7.76776 1.70711L5.44454 4.03033L7.36396 5.94975C7.75449 6.34027 7.75449 6.97344 7.36396 7.36396C6.97344 7.75449 6.34027 7.75449 5.94975 7.36396L4.03033 5.44454L2.11091 7.36396C1.72039 7.75449 1.08722 7.75449 0.696697 7.36396C0.306172 6.97344 0.306172 6.34027 0.696697 5.94975L2.61612 4.03033L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="white"/>
                                                        </svg>
                                                    </div>
                                                    <p className='ml-1' style={{color:'#EB5757'}} >Delete</p>
                                                </div>
                                            
                                        </div>
                                    </td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='w-full flex flex-row items-center pb-12'>
                <p className='font-Poppins-Regular text-xs' >Showing 1-10 of 30 items</p>
                <div className='w-full flex flex-1' />
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ' >1</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >2</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >3</div>
            </div>
        </div>
    )
}
