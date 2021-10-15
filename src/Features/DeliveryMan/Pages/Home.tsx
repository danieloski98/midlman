import React from 'react'
import { InputGroup, InputLeftElement, Input, Select } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { Value, MenuContext } from '../../../Context/MenuContext'
import { url } from '../../../Utils/URL'
import { useQuery } from 'react-query';
import useDetails from '../../../Hooks/useDetails'
import LoadingModal from '../../Modals/LoadingModal'

// get pending deliveries
const getPending = async (id: string) => {
    const request = await fetch(`${url}/admin/deliveryman/total/orders/${id}`);
    const json = await request.json();

    if (!request.ok) {
        throw new Error('An Error Occured');
    }else {
        return json;
    }
}

export default function Home() {
    const menuContaxt: Value = React.useContext(MenuContext);

    // states
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([] as Array<any>);
    const [error, setError] = React.useState(false);
    const [text, setText] = React.useState('Loading Pending Orders');
    const [sort, setSort] = React.useState('type');
    const [search, setSearch] = React.useState('')
    const { adminDetails } = useDetails();
    
    const id = adminDetails._id;

    // query
    const { refetch } = useQuery(['getPending', id ], () => getPending(id as string), {
        onSuccess: (dataa: any) => {
            console.log(dataa);
            setData([...dataa.response, ...data]);
            setLoading(false);
        },
        onError: (error) => {
            setLoading(false);
            setError(true);
        }
    })

    const print = () => {
        if (!menuContaxt.showModal) {
            window.print();
            return;
        } else {
            menuContaxt.setShowModal(false);
            setTimeout(() => {
                window.print();
            }, 3000);
        }
    }

    const Status = (source: any) => {
        if(source === 'Requesting Return'){
            return(
                <p style={{color: '#9B51E0'}} >{source}</p>
            )
        } else if(source === 'Processing'){
            return(
                <p style={{color: '#1B75BB'}} >{source}</p>
            )
        } else if(source === 'Pending'){
            return(
                <p  className='cursor-pointer' style={{color: '#F2994A'}} >{source}</p>
            )
        } else {
            return(
                <p style={{color: '#00A69C'}} >{source}</p>
            )
        } 
    }

    const handleChane = (e: any) => {
        if (e.target.value === 'cancelled') {
            // setShowDeclinedModal(true);
        }
    }

    const close = () => {
        setLoading(false);
    }

    const retry = async () => {
        setText('Loading Categories...')
        setLoading(true);
        const {} = await refetch();
        setLoading(false);
    }
    return (
        <div className="w-full h-full flex flex-col">

            <LoadingModal open={loading} onClose={() => setLoading(false)} text={text} />

            {/* header */}
            <div className="w-full h-20 flex font-Poppins-Bold text-xl">
                <p>Your Deliveries</p>
            </div>

            {/* Search bar */}
            <div className="w-full h-16 flex">
                <div className="w-42 h-8">
                    <Select placeholder="Sort by" size="sm" fontSize="sm" className="rounded-md">
                        <option value="id">id</option>
                    </Select>
                </div>
                <div className="w-64 h-8 ml-6">
                    <InputGroup size="sm" fontSize="sm"  className="rounded-md">
                        <InputLeftElement children={<FiSearch size={20} color="grey" />} />
                        <Input placeholder="Search by..." />
                    </InputGroup>
                </div>
            </div>

            {/* statistic bar */}
           {
               !loading && !error && data.length > 0 && (
                <div className="w-full flex justify-between">

                    <div className="flex">
                        {/* <div className="border-2 rounded border-midlman_color w-40 h-8 text-midlman_color text-sm flex justify-center items-center">
                            <p>Delivered: 4</p>
                        </div> */}
                        {/* <div className="border-2 rounded border-pending_color w-40 h-8 text-pending_color text-sm flex justify-center items-center ml-6">
                            <p>Pending: 6</p>
                        </div> */}
                    </div>

                    <div className="flex">
                        <button onClick={print} className="text-sm bg-midlman_color text-white w-20 rounded h-10">Print</button>
                    </div>

                </div>
               )
           }

            {/* main table */}
           {
               !loading && !error && data.length > 0 && (
                <div className="w-full overflow-auto">
                   {
                       error ?
                       <div className="w-full flex flex-col justify-start items-center">
                              <img src="/images/error.svg" alt="" className="w-56 h-56" />
                              <p className="text-md font-Poppins-Medium text-gray-600 mt-5"> An Error Occoured</p>
                              <button className="w-56 h-10 rounded shadow text-white bg-midlman_color mt-6">Retry</button>
                        </div>
                       :
                       <div className='w-auto h-auto overflow-x-auto py-4' >
                       <table className='text-xs'>
                           <thead>
                               <tr className='font-Poppins-Semibold' >
                                   <th className='bg-white' >
                                       <p className="w-24 text-cen">S/N</p>
                                   </th>
                                   <th className='bg-white' >
                                       <p className="w-24 text-center">Order ID</p>
                                   </th>
                                   <th className='bg-white ' >
                                       <p className="w-24 text-center">Order By</p>
                                   </th>
                                   <th className='bg-white' >
                                       <p className="w-24 text-center">
                                       Type
                                       </p>
                                   </th>
                                   <th className='bg-white'>
                                       <p className="w-24 text-center">Items</p></th> 
                                   <th className='bg-white' >
                                       <p className="w-40 text-center">Quantity</p></th> 
                                   <th className='bg-white' >
                                       <p className="w-24 text-center">Order Total</p></th> 
                                   <th className='bg-white' >
                                       <p className="w-56 text-center">Date/Time Purchased</p></th> 
                                   <th className='bg-white' >
                                       <p className="w-24 text-center">Delivery By</p></th> 
                                   <th className='bg-white' >
                                       <p className="w-32 text-center">Order Status</p></th> 
                                   <th className='bg-white' >
                                       <p className="w-32 text-center">Payment Status</p></th> 
                                   <th className='bg-white' >
                                       <p className="w-56 text-center">Action</p></th> 
                               </tr>
                           </thead>
                           <tbody>
                               {
                               data
                               .sort((a, b): number => {
                               if (sort === '_id') {
                                let x = a._id.toLowerCase();
                                let y = b._id.toLowerCase();
                                if (x < y) { return -1}
                                if (x > y) { return 1 }
                               }
                               if (sort === 'type') {
                                let x = a.type.toLowerCase();
                                let y = b.type.toLowerCase();
                                if (x < y) { return -1}
                                if (x > y) { return 1 }
                               }
                                return 0;
                              })
                              .filter((val) => {
                                  if (search === '') {
                                      return val;
                                  } else if (val._id.toLowerCase().includes(search.toLowerCase()) || val.type.toLowerCase().includes(search.toLowerCase())) {
                                      return val;
                                  }
                              })
                               .map((item, index) => {
                                   return(
                                       
                                       <tr key={index} className='font-Poppins-Regular' >
                                           
                                           <td className='font-Poppins-Semibold'>{index+1}</td>
                                           <td>
                                               <div className='flex flex-row items-center' >
                                                   {item._id}
                                                   <p onClick={()=> setLoading(true)} className='text-xs text-midlman_color ml-3 cursor-pointer'>View</p>
                                               </div></td>
                                           <td>{item.user}</td>
                                           <td>{item.type}</td>
                                           <td className="overflow-y-scroll"><p className='text-xs text-menu_gray w-56 h-20 overflow-scroll' >{item.product}</p></td>
                                           <td>
                                               <p className="text-midlman_color cursor-pointer">{item.quantity}</p>
                                           </td>
                                           <td>item_total</td>
                                           <td>item_purchasedate</td>
                                           
                                           <td >item_deliveredby</td>
                                           <td className="text-yellow-600">
                                               <Select size="xs" onChange={(e) => handleChane(e)}>
                                                   <option value="pending">Pending</option>
                                                   <option value="processing">Processing</option>
                                                   <option value="completed">Completed</option>
                                                   <option value="cancelled">Cancelled</option>
                                               </Select>
                                           </td>
                                           <td>{Status(item.status)}</td> 
                                          
                                       </tr>
                                   )
                               })}
                           </tbody>
                       </table>
                   </div>
                    }
                    </div>
               )
            }

           {
               !loading && !error && data.length < 1 && (
                   <div className="w-full h-64 justify-center flex items-center">
                       <p>You have no Deliveries to make</p>
                   </div>
               )
           }

            {/* pagination part */}

           {
               !loading && !error && data.length > 0 && (
                <div className="w-full h-auto mt-6 flex justify-between text-md font-Poppins-Regular text-sm">
                <div>
                    <p>Showing 1-10 of 30</p>
                </div>
                <div className="flex w-24 justify-between">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
            </div>
               )
           }

        </div>
    )
}
