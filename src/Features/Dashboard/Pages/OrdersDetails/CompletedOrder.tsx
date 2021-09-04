import { Select, Input, InputGroup, InputLeftElement  } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router';
import DeclinedModal from '../../../Modals/DeclinedModal';
import Invoice from '../ManageAdmin/DeliveryMan/Invoice';
import { useQuery } from 'react-query'
import { url } from '../../../../Utils/URL';
import { IOrder } from '../../../../Types/Orders';
import LoadingModal from '../../../Modals/LoadingModal';
import { FiSearch } from 'react-icons/fi'
// import { useHistory } from 'react-router-dom';

// get orders
async function getOrders() {
    const request = await fetch(`${url}/order`, {
        method: 'get',
    });

    const json = await request.json()

    if (!request.ok) {
        throw new Error('An Error Occured')
    } else {
        return json;
    }
}

export default function CompletedOrder() {
    // const history = useHistory()
    const history = useHistory();
    const [showModal, setShowModal] = React.useState(false);
    const [statusModal, setStatusModal] = React.useState(false);
    const [assigndeliveryModal, setAssignDeliveryModal] = React.useState(false);
    const [showDeclinedModal, setShowDeclinedModal] = React.useState(false);
      // state
      const [loading, setLoading] = React.useState(true);
      const [orders, setOrders] = React.useState([] as IOrder[]);
      const [open, setOpen] = React.useState(false);
      const [text, setText] = React.useState('Loading Orders');
      const [sort, setSort] = React.useState('type');
      const [search, setSearch] = React.useState('')
      const [error, setError] = React.useState(false);

      const { refetch } = useQuery('getorders', getOrders, {
          retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
          retry: 6,
          onSuccess: (data: any) => {
              setLoading(false);
              setOrders(prev => [...data.response]);
              console.log(data);
            //   alert(JSON.stringify(data));
          },
          onError: (error: any) => {
              setError(true);
              setLoading(false);
              alert(JSON.stringify(error.message));
          },
      });

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
                <p onClick={()=> setStatusModal(true)} className='cursor-pointer' style={{color: '#F2994A'}} >{source}</p>
            )
        } else {
            return(
                <p style={{color: '#00A69C'}} >{source}</p>
            )
        } 
    }

    const handleChane = (e: any) => {
        if (e.target.value === 'cancelled') {
            setShowDeclinedModal(true);
        }
    }

    const close = () => {
        setLoading(false);
    }

    const retry = async () => {
        setText('Loading Categories...')
        setShowModal(true);
        const {} = await refetch();
        setShowModal(false);
    }


    return (
        <div className='w-full h-full flex flex-col px-10 py-8 ' >  
            <p className='font-Poppins-Semibold text-lg' >Completed Orders</p>

            <div className='w-auto flex relative flex-row items-center py-8' > 
                <div className='w-32 flex items-center mr-4' >  
                    <Select fontSize='xs' color='#828282' placeholder='Sort By' onChange={(e) => setSort(e.target.value)}>
                        <option>Order ID</option>
                        <option>Type</option>
                    </Select>
                </div>
                <div className='w-64 flex items-center' > 
                    <InputGroup>
                        <InputLeftElement children={<FiSearch />} />
                        <Input fontSize='xs' paddingLeft='10'  placeholder='Search by order id or type' onChange={(e) => setSearch(e.target.value)} />
                    </InputGroup>
                </div>
                <div className='w-full flex flex-1' />
                <button className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' > Print </button>
                <button className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1' > Save As </button>
            </div>

            <div className='w-full flex flex-row py-4 items-center text-base' >
                <p className='font-Poppins-Semibold ' >Download Statement of Completed Orders</p>
                <div className='w-full flex flex-1' />
                <div className='flex flex-row mr-4 items-center' >
                    <div className='font-Poppins-Medium text-xs mr-2 flex flex-row items-center' >
                        <p >Start:</p> 
                        <p className='mx-3 p-1 border-2 border-entries rounded-md' >14/</p>
                        <p className='p-1 border-2 border-entries rounded-md'>03/</p> 
                        <p className='p-1 w-12 ml-3 text-center border-2 border-entries rounded-md'>2009</p> 
                    </div> 
                    <svg width="16" height="18"  viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4137 1.81812C13.4137 1.26583 12.966 0.818115 12.4137 0.818115C11.8614 0.818115 11.4137 1.26583 11.4137 1.81812V2.45448H6.86825V1.81812C6.86825 1.26583 6.42054 0.818115 5.86825 0.818115C5.31597 0.818115 4.86825 1.26583 4.86825 1.81812V2.45448H3.41371C1.95768 2.45448 0.777344 3.63482 0.777344 5.09084V8.36357V16.5454C0.777344 18.0014 1.95768 19.1818 3.41371 19.1818H14.8683C16.3243 19.1818 17.5046 18.0014 17.5046 16.5454V8.36357V5.09084C17.5046 3.63482 16.3243 2.45448 14.8683 2.45448H13.4137V1.81812ZM15.5046 7.36357V5.09084C15.5046 4.73939 15.2197 4.45448 14.8683 4.45448H13.4137V5.09084C13.4137 5.64313 12.966 6.09084 12.4137 6.09084C11.8614 6.09084 11.4137 5.64313 11.4137 5.09084V4.45448H6.86825V5.09084C6.86825 5.64313 6.42054 6.09084 5.86825 6.09084C5.31597 6.09084 4.86825 5.64313 4.86825 5.09084V4.45448H3.41371C3.06225 4.45448 2.77734 4.73939 2.77734 5.09084V7.36357H15.5046ZM2.77734 9.36357H15.5046V16.5454C15.5046 16.8968 15.2197 17.1818 14.8683 17.1818H3.41371C3.06225 17.1818 2.77734 16.8968 2.77734 16.5454V9.36357Z" fill="#9AA0A6"/>
                    </svg>
                </div> 
                <div className='flex flex-row ml-4 items-center' >
                    <div className='font-Poppins-Medium text-xs mr-2 flex flex-row items-center' >
                        <p >End:</p> 
                        <p className='mx-3 p-1 border-2 border-entries rounded-md' >14/</p>
                        <p className='p-1 border-2 border-entries rounded-md'>03/</p> 
                        <p className='p-1 w-12 ml-3 text-center border-2 border-entries rounded-md'>2023</p> 
                    </div>
                    <svg width="16" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4137 1.81812C13.4137 1.26583 12.966 0.818115 12.4137 0.818115C11.8614 0.818115 11.4137 1.26583 11.4137 1.81812V2.45448H6.86825V1.81812C6.86825 1.26583 6.42054 0.818115 5.86825 0.818115C5.31597 0.818115 4.86825 1.26583 4.86825 1.81812V2.45448H3.41371C1.95768 2.45448 0.777344 3.63482 0.777344 5.09084V8.36357V16.5454C0.777344 18.0014 1.95768 19.1818 3.41371 19.1818H14.8683C16.3243 19.1818 17.5046 18.0014 17.5046 16.5454V8.36357V5.09084C17.5046 3.63482 16.3243 2.45448 14.8683 2.45448H13.4137V1.81812ZM15.5046 7.36357V5.09084C15.5046 4.73939 15.2197 4.45448 14.8683 4.45448H13.4137V5.09084C13.4137 5.64313 12.966 6.09084 12.4137 6.09084C11.8614 6.09084 11.4137 5.64313 11.4137 5.09084V4.45448H6.86825V5.09084C6.86825 5.64313 6.42054 6.09084 5.86825 6.09084C5.31597 6.09084 4.86825 5.64313 4.86825 5.09084V4.45448H3.41371C3.06225 4.45448 2.77734 4.73939 2.77734 5.09084V7.36357H15.5046ZM2.77734 9.36357H15.5046V16.5454C15.5046 16.8968 15.2197 17.1818 14.8683 17.1818H3.41371C3.06225 17.1818 2.77734 16.8968 2.77734 16.5454V9.36357Z" fill="#9AA0A6"/>
                    </svg>
                </div> 
                <div className='w-full flex flex-1' />
                <button className='bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-12 rounded-md mx-1' > Print </button>
            </div>


            {
               loading ?
               null 
               :
               <div className="w-full">
                   {
                       error ?
                       <div className="w-full flex flex-col justify-start items-center">
                              <img src="/images/error.svg" alt="" className="w-56 h-56" />
                              <p className="text-md font-Poppins-Medium text-gray-600 mt-5"> An Error Occoured</p>
                              <button onClick={retry} className="w-56 h-10 rounded shadow text-white bg-midlman_color mt-6">Retry</button>
                        </div>
                       :
                       <div className='w-auto h-auto overflow-x-scroll py-4' >
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
                               {orders
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
                                                   <p onClick={()=> setShowModal(true)} className='text-xs text-midlman_color ml-3 cursor-pointer'>View</p>
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
                                           <td> 
                                               <div className=' w-full h-full flex flex-row items-center' >
                                                   {/* <div onClick={()=> history.push('/dashboard/editorder')} className='cursor-pointer flex flex-row' >
                                                       <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                           <path d="M13.7071 0.707107L16.5355 3.53553C16.9261 3.92606 16.9261 4.55922 16.5355 4.94975L15.1213 6.36396L10.8787 2.12132L12.2929 0.707107C12.6834 0.316583 13.3166 0.316583 13.7071 0.707107ZM9.46447 3.53553L1.27208 11.7279L0.979185 16.2635L5.51472 15.9706L13.7071 7.77817L9.46447 3.53553Z" fill="#1B75BB"/>
                                                       </svg>
                                                       <p className='ml-1' style={{color:'#1B75BB'}} >Edit</p>
                                                   </div> */}
                                                   <p onClick={()=> setAssignDeliveryModal(true)} className='ml-2 text-midlman_color cursor-pointer text-xs font-Poppins-Semibold w-56 text-center' >Assign Delivery Man</p>
                                               </div>
                                           </td>
                                       </tr>
                                   )
                               })}
                           </tbody>
                       </table>
                   </div>
                   }
               </div>
           }




            <div className='w-full flex flex-row items-center pb-12 mt-6'>
                <p className='font-Poppins-Regular text-xs' >Showing 1-10 of 30 items</p>
                <div className='w-full flex flex-1' />
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ' >1</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >2</div>
                <div className='w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer' >3</div>
            </div>

        </div>
    )
}
