import { Input,Select } from '@chakra-ui/react'; 
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';   
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"; 
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'; 
import { useHistory } from 'react-router-dom';

    const defaultMaterialTheme = createMuiTheme({
        palette: {
            primary:  {
                main: '#00A69C',
            }, 
        },
    });

export default function AddNewCoupon() {
    
    const history = useHistory();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [startDate, setStartDate] = React.useState(false); 
    const handleStartDateChange = (date: any) => { 
        setSelectedDate(date);
        setStartDate(false);
    };

    const renderStartDate = (props: any) => {
        return(   
            <div className='py-2 mt-4' >
                <p className='font-Poppins-Semibold text-xs mb-1'>EXPIRY DATE</p>
                <div className='w-full relative flex items-center justify-end' >
                    <svg onClick={() => setStartDate(isOpen => !isOpen)}  className=' absolute mr-4 cursor-pointer z-10' width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4137 1.81812C13.4137 1.26583 12.966 0.818115 12.4137 0.818115C11.8614 0.818115 11.4137 1.26583 11.4137 1.81812V2.45448H6.86825V1.81812C6.86825 1.26583 6.42054 0.818115 5.86825 0.818115C5.31597 0.818115 4.86825 1.26583 4.86825 1.81812V2.45448H3.41371C1.95768 2.45448 0.777344 3.63482 0.777344 5.09084V8.36357V16.5454C0.777344 18.0014 1.95768 19.1818 3.41371 19.1818H14.8683C16.3243 19.1818 17.5046 18.0014 17.5046 16.5454V8.36357V5.09084C17.5046 3.63482 16.3243 2.45448 14.8683 2.45448H13.4137V1.81812ZM15.5046 7.36357V5.09084C15.5046 4.73939 15.2197 4.45448 14.8683 4.45448H13.4137V5.09084C13.4137 5.64313 12.966 6.09084 12.4137 6.09084C11.8614 6.09084 11.4137 5.64313 11.4137 5.09084V4.45448H6.86825V5.09084C6.86825 5.64313 6.42054 6.09084 5.86825 6.09084C5.31597 6.09084 4.86825 5.64313 4.86825 5.09084V4.45448H3.41371C3.06225 4.45448 2.77734 4.73939 2.77734 5.09084V7.36357H15.5046ZM2.77734 9.36357H15.5046V16.5454C15.5046 16.8968 15.2197 17.1818 14.8683 17.1818H3.41371C3.06225 17.1818 2.77734 16.8968 2.77734 16.5454V9.36357Z" fill="#9AA0A6"/>
                    </svg>
                    <Input value={props.value} fontSize='xs'/>
                </div>
            </div> 
        )
    }

    return (
        <div className='w-full h-full flex flex-col items-center py-8 ' >  
            <p className=' w-100 font-Poppins-Semibold text-lg -ml-48' >Add New Coupon</p>    
            <div className='w-full flex flex-col items-center pt-14 pb-8' >
                <div onClick={()=> history.push('/dashboard/coupon')}  className='w-100 flex flex-row cursor-pointer ' >
                    <svg width="10" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.53578 0.515015L0.0507812 9.00001L8.53578 17.485L9.95078 16.071L2.87878 9.00001L9.95078 1.92901L8.53578 0.515015Z" fill="#828282"/>
                    </svg> 
                    <p className='font-Poppins-Bold text-menu_gray text-xs ml-2' >Back to Coupons</p>
                </div>
                <div className='w-100 flex flex-col pb-8' > 
                    <div className='w-full pt-8' >   
                        <div className='py-2' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>COUPON CODE</p>
                            <div className='flex flex-row items-center'>
                                <Input fontSize='xs'/>
                                <button className=' ml-4 border-1 h-9 border-midlman_color text-midlman_color font-Poppins-Semibold text-xs w-48 px-4 rounded-md' >Auto Generate</button>
                            </div>
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>COUPON TYPE</p>
                            <Select fontSize='xs' placeholder='Coupon Type' > 
                                <option>Fixed Cart</option>
                                <option>Fixed Product</option>
                                <option>Percent Cart</option>
                                <option>Percent Product</option>
                            </Select>
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>COUPON DISCOUNT</p>
                            <Input fontSize='xs'/>
                        </div> 
                        <ThemeProvider theme={defaultMaterialTheme}>
                            <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                                <DatePicker
                                    disablePast
                                    open={startDate}
                                    onOpen={() => setStartDate(true)}
                                    onClose={() => setStartDate(false)}
                                    format="dd/MM/yyyy"
                                    name='StartTime'
                                    value={selectedDate} 
                                    onChange={handleStartDateChange}
                                    TextFieldComponent={renderStartDate}  /> 
                            </MuiPickersUtilsProvider> 
                        </ThemeProvider>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>NUMBER OF ENTRIES</p>
                            <Input fontSize='xs'/>
                        </div> 
                    </div>  
                    <div className='w-full py-2' >
                        <p className='text-sm font-Poppins-Semibold' >STATUS</p>
                        <div className='flex flex-row  mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Active</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div> 
                    <div className='w-full flex flex-row pt-12' >
                        <button className='bg-midlman_color font-Poppins-Semibold text-white text-xs py-3 w-full rounded-md mr-4' >SUBMIT</button>
                        <button className='py-3 text-xs font-Poppins-Semibold text-menu_gray bg-entries rounded-md w-full mx-4' >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
