import { Input } from '@chakra-ui/input' 
import { Select } from '@chakra-ui/select'
// import { Textarea } from '@chakra-ui/textarea'
import React from 'react'
import { useHistory } from 'react-router'
import Editor from '../../WebPages/Component/Editor'
import AddPromo from './AddPromo'
import { motion, AnimatePresence } from 'framer-motion'
import { ICategories } from '../../../../../Types/Categories'
import { IBrand } from '../../../../../Types/Brand'
import { url } from '../../../../../Utils/URL'
import * as axios from 'axios'
import { useQuery, useMutation } from 'react-query'

// get categories
const getCat = async () => {
    const request = await fetch(`${url}/category`);
    const json = await request.json()

    if (!request.ok) {
        throw new Error("Couldn't get the catergories, please try again")
    }

    return json;
}

// get brands
//get brands functions
async function getBrands() {
    const request = await axios.default.get(`${url}/brand`);
    return request;
}

export default function UploadProduct() {

    const { isLoading } = useQuery('getbrands', getBrands, {
        //   retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
        //   retry: 6,
          onSuccess: (data: any) => {
            //   setLoading(false);
              setBrands(prev => [...data.data.response]);
            //   alert(JSON.stringify(data));
          },
          onError: (error: any) => {
            //   setLoading(false);
              alert(JSON.stringify(error.message));
          },
      })

      const { refetch } = useQuery('categories', getCat, {
        onSuccess: (data) => {
            // setShowModal(false);
            // setText('');
            // alert(JSON.stringify(data));
            setCats(data.response);
            // queryclient.invalidateQueries();
        },
        onError: (error) => {
            // setShowModal(false);
            // setText('');
            // setError(true);
            alert(JSON.stringify(error));
        }
    });

    const fileReader1 = React.useRef(new FileReader()).current;

    const history = useHistory();
    const [showModal, setShowModal] = React.useState(false);
    const [type, setType] = React.useState(false);
    const [cats, setCats] = React.useState([] as ICategories[]);
    const [brands, setBrands] = React.useState([] as IBrand[]);
    const [images, setImages] = React.useState([] as string[]);

    // effects
    React.useEffect(() => {
        fileReader1.addEventListener('load', () => {
            const imgs = [...images, fileReader1.result as string];
            setImages(imgs)
            //  setImages(prev => [...prev, fileReader1.result as string]);
         })
  
         return () => {
             fileReader1.removeEventListener('load', () => {});
         }
      })

    const pickCoverImage = () => {
        const picker = document.getElementById('picker1');
        picker?.click();
    }

    const onCoverPicked = (file: FileList) => {
        console.log(file[0])
        fileReader1.readAsDataURL(file[0]);
    }


    return (
        <div className='w-full h-full flex flex-col items-center py-8 ' >  
            <input type="file" accept="image/*" id="picker1" hidden onChange={(e) => {onCoverPicked(e.target.files as FileList)}} />
            <p className=' w-100 font-Poppins-Semibold text-lg -ml-48' >Upload a Product</p> 
            <div className='w-full flex flex-col items-center pt-14 pb-8' >
                <div onClick={()=> history.push('/dashboard/product')}  className='w-100 flex flex-row cursor-pointer ' >
                    <svg width="10" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.53578 0.515015L0.0507812 9.00001L8.53578 17.485L9.95078 16.071L2.87878 9.00001L9.95078 1.92901L8.53578 0.515015Z" fill="#828282"/>
                    </svg> 
                    <p className='font-Poppins-Bold text-menu_gray text-xs ml-2' >Back to Products</p>
                </div>
                <div className='w-100 flex flex-col py-8' >
                    <div className='w-full py-4' >
                        <Select fontSize='xs' placeholder='Select Category'>
                            {
                                cats.map((item, index) => (
                                    <option key={index.toString()} value={item.name}>{item.name}</option>
                                ))
                            }
                            {/* <option>Give me more option</option> */}
                        </Select>
                    </div>
                    <div className='w-full py-4' >
                        <p className='font-Poppins-Semibold text-sm mb-1'>PRODUCT NAME</p>
                        <Input fontSize='xs' placeholder='generic name of the product (e.g Paracetamol)' />
                    </div>
                    <div className='w-full py-4' >
                        <Select fontSize='xs' placeholder='Select Brand'>
                            {
                                brands.map((item, index) => (
                                    <option key={index.toString()} value={item.name}>{item.name}</option>
                                ))
                            }
                            {/* <option>Give me more option</option> */}
                        </Select>
                    </div>
                    <div className='w-full py-4' >
                        <p className='font-Poppins-Semibold text-sm mb-1'>Medical Tags (Optional)</p>
                        <Input fontSize='xs' />
                    </div>
                    <div className='w-full py-4' >
                        <Select fontSize='xs' placeholder='Choose Campaign'>
                            <option>Product of the Weeks</option>
                            <option>Product of the Weeks</option>
                        </Select>
                    </div>
                    <div className='w-full py-4' >
                        <Select fontSize='xs' placeholder='Choose Formulation'>
                            <option>Syrup</option>
                            <option>capsule</option>
                            <option>tablets</option>
                            <option>suspension</option>
                            <option>injection</option>
                            <option>aerosol</option>
                            <option>topicals</option>
                            <option>cremes</option>
                            <option>ointments</option>
                            <option>suppositories</option>
                            <option>drops</option>
                            <option>Other: Please Specify (text box)</option> 
                        </Select>
                    </div>
                    <div className='w-100 overflow-x-auto py-4' >
                        <p className='font-Poppins-Semibold text-xs mb-1'>Upload Images</p>
                        <div className='flex flex-row w-full flex-nowrap' >
                            {images.length < 1 && (
                                <div className='border-2 border-entries rounded-lg w-28 h-24 flex justify-center items-center px-4' >
                                    <p className='font-Poppins-Regular text-xs text-entries'>image size should not be above 350px</p>
                                </div> 
                            )}
                            {
                                images.length > 0 && images.map((item, index) => (
                                    <div key={index.toString()} className='border-2 border-entries rounded-lg w-28 h-24 flex justify-center items-center px-0 mr-4 flex-1' >
                                        <img src={item} alt="" className="w-full h-full object-contain" />
                                    </div> 
                                ))
                            }
                            <div onClick={pickCoverImage} className='border-2 border-entries rounded-lg h-24 flex justify-center ml-4 items-center px-4 cursor-pointer' >
                                <p className='text-menu_gray text-base' >+</p>
                            </div> 
                        </div>
                        
                    </div>
                    <div className='w-full py-4' >
                        <p className='font-Poppins-Semibold text-xs mb-1'>Product Description</p> 
                        <Editor />
                        {/* <Textarea height='200px' fontSize='xs' placeholder='generic name of the product (e.g Paracetamol)' /> */}
                    </div>
                </div>
                <div className=' w-100 flex flex-row pb-8 ' >
                    <div onClick={()=> setType(false)} className={!type ? 'w-full flex justify-center border-b-2 cursor-pointer py-1 border-midlman_color': 'w-full flex justify-center border-b-2 cursor-pointer py-1 border-gray_exp'} >
                        <p className={!type ? 'text-midlman_color text-xs font-Poppins-Semibold':'text-gray_exp text-xs font-Poppins-Semibold'} >Portal</p>
                    </div>
                    <div onClick={()=> setType(true)} className={type ? 'w-full flex justify-center border-b-2 cursor-pointer py-1 border-midlman_color': 'w-full flex justify-center border-b-2 cursor-pointer py-1 border-gray_exp'} >
                        <p className={type ? 'text-midlman_color text-xs font-Poppins-Semibold':'text-gray_exp text-xs font-Poppins-Semibold'}  >Express</p>
                    </div>
                </div>
                <div className='w-96 h-full ' >
                    <div className='w-full py-4' >
                        <Select fontSize='xs' placeholder='Choose Formulation'>
                            <option>Bottle</option>
                            <option>Satchet</option>
                            <option>Packs</option>
                            <option>Cartons</option>
                            <option>Amples</option>
                            <option>Vials</option>
                            <option>Rolls</option>
                            <option>Other: Please Specify (text box)</option> 
                        </Select>
                    </div>
                    <div className='w-full py-4' > 
                        <Input fontSize='xs' placeholder='Price per Package Unit' />
                    </div>
                    <div className='w-full py-4' >
                        <Select fontSize='xs' placeholder='Amount in Stock'>
                            <option>Give me more option</option>
                        </Select>
                    </div>
                    <button className=' w-full bg-white border-2 border-midlman_color flex flex-row justify-center font-Poppins-Bold text-midlman_color text-xs my-4 py-3 rounded-md' >
                        <svg className='mr-2' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="#00A69C"/>
                        </svg> 
                        Add New Package Type
                    </button>
                    <div className='w-full' >
                        <p className='text-sm font-Poppins-Semibold' >STATUS</p>
                        <div className='flex flex-row  mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Active</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                       <AnimatePresence>
                       {
                            type && (
                                <motion.div 
                                animate={{ }}
                                className='flex flex-row  mt-1 ml-4 items-center' >
                                    <p className='text-xs mr-2 font-Poppins-Semibold'>Controlled Drug</p>
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                                </motion.div>
                            )
                        }
                       </AnimatePresence>
                    </div>
                    <div className='w-full flex flex-row items-center py-6' > 
                        <div onClick={()=> setShowModal(true)} className='border-2 border-entries cursor-pointer rounded-lg h-12 flex justify-center ml-4 items-center px-3' >
                            <p className='text-menu_gray text-base' >+</p>
                        </div>
                        <p className='text-sm font-Poppins-Semibold ml-2' >Add Promo </p>
                    </div>
                    <div className='w-full flex flex-row' >
                        <button className='bg-midlman_color font-Poppins-Semibold text-white text-sm py-3 w-full rounded-md mr-1' >Upload Product</button>
                        <button className='bg-entries font-Poppins-Semibold text-menu_gray text-sm py-3 w-full rounded-md ml-1' >CANCEL</button>
                    </div>
                </div>
            </div>
            {showModal ? (
                <> 
                    <div className="justify-center items-center flex overflow-x-hidden my-2 overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none"> 
                        <AddPromo close={setShowModal} />
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null} 
        </div>
    )
}
