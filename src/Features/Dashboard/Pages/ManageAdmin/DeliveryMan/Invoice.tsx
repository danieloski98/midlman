import React from 'react' 
import product from '../../../../../assets/images/product.png'

export default function Invoice(props: any) {  

    const [order, setOrder] = React.useState('')
    const order_completed = 'px-8 py-3 bg-completed_bg rounded-lg'
    const order_completed_text = 'font-Poppins-Semibold text-xs text-completed_color'
    const order_pending = 'px-8 py-3 bg-pending_bg rounded-lg'
    const order_pending_text = 'font-Poppins-Semibold text-xs text-pending_color'

    React.useEffect(() => { 
        setOrder(props.order)
    }, [props.order])

    return (
        <div style={{width: '550px', height:'730px'}} className='bg-white flex flex-col rounded-2xl py-4 px-8' >
            <div className='w-full py-4 flex flex-row items-center' >
                <div onClick={()=> props.close(false)}  className='w-100 flex flex-row items-center cursor-pointer ' >
                    <svg width="10" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.53578 0.515015L0.0507812 9.00001L8.53578 17.485L9.95078 16.071L2.87878 9.00001L9.95078 1.92901L8.53578 0.515015Z" fill="#828282"/>
                    </svg> 
                    <p className='font-Poppins-Bold text-menu_gray text-xs ml-2' >Back to {props.type}</p>
                </div>
                <div className='w-full flex flex-1' />
                <div className={order === 'completed' ? order_completed : order_pending}>
                    <p className={order === 'completed' ? order_completed_text : order_pending_text} >{props.order === 'completed' ? 'COMPLETED' : 'PENDING'}</p>
                </div>
            </div>
            <div className='w-full pt-4 pb-8 flex flex-row items-center border-b-1 border-entries '> 
                <div className='bg-login_buttton p-1 rounded-lg' >
                    <img src={product} alt='product' className='w-24' />
                </div>
                <div className='flex flex-col ml-4' >
                    <p className='font-Poppins-Medium text-xs my-1 text-menu_gray'>Name: <span style={{color:'#061F1D'}} className='text-sm' >Piriton Syrups</span></p>
                    <p className='font-Poppins-Medium text-xs my-1 text-menu_gray'>Type: <span style={{color:'#061F1D'}} className='text-sm'>500mg Bottle</span></p>
                    <p className='font-Poppins-Medium text-xs my-1 text-menu_gray'>Quantity: <span style={{color:'#061F1D'}} className='text-sm'>x2</span></p>
                    <p className='font-Poppins-Medium text-xs my-1 text-menu_gray'>Price: <span style={{color:'#061F1D'}} className='text-sm'>₦5,900</span></p>
                </div>
                <div className='w-full flex flex-1' />
                <div className='flex flex-col text-right' >
                    <p className='font-Poppins-Regular text-xs'>Grand Total</p>
                    <p className='font-Poppins-Semibold text-3xl'>₦5,900</p>
                </div>
            </div>
            <div className='w-full py-4' >
                <p className='font-Poppins-Semibold text-base' >Delivery Info:</p>
                <div className='py-2' >
                    <p className='font-Poppins-Regular text-sm'>Order ID:</p>
                    <p className='font-Poppins-Regular text-sm mt-1 text-menu_gray'>Bla Bla Bla</p> 
                </div>
                <div className='py-2' >
                    <p className='font-Poppins-Regular text-sm'>Delivery Method:</p>
                    <p className='font-Poppins-Regular text-sm mt-1 text-menu_gray'>Standard Home Delivery</p> 
                </div>
                <div className='py-2' >
                    <p className='font-Poppins-Regular text-sm'>Shipping Address:</p>
                    <p className='font-Poppins-Regular text-sm mt-1 text-menu_gray'>St. Bernard Memorial Nchatancha, Nike.</p>  
                </div>
            </div>
            <div className='w-full pb-2' >
                <p className='font-Poppins-Semibold text-base' >Payment Info:</p>
                <div className='py-2' >
                    <p className='font-Poppins-Regular text-sm'>Payment Method:</p>
                    <p className='font-Poppins-Regular text-sm mt-1 text-menu_gray'>Paid on Delivery (Pay via POS)</p> 
                </div> 
                <div className='py-2' >
                    <p className='font-Poppins-Regular text-sm'>Payment Details:</p>
                    <p className='font-Poppins-Regular text-sm mt-1 text-menu_gray'>Items: ₦5,900</p> 
                    <p className='font-Poppins-Regular text-sm mt-1 text-menu_gray'>Coupon Discount: ₦5,900</p> 
                    <p className='font-Poppins-Regular text-sm mt-1 text-menu_gray'>Shipping Fees: ₦5,900</p> 
                    <p className='font-Poppins-Regular text-sm'>Grand Total: ₦5,900</p>
                </div> 
            </div>
        </div>
    )
}
