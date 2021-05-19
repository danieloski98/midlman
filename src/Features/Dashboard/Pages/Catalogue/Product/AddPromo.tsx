import { Input } from '@chakra-ui/input'; 
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';   
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"; 
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'; 


const defaultMaterialTheme = createMuiTheme({
    palette: {
      primary:  {
        main: '#00A69C',
      }, 
    },
  });

export default function AddPromo(props: any) {   

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
    const [startDate, setStartDate] = React.useState(false);
    const [endDate, setEndDate] = React.useState(false);
    const handleStartDateChange = (date: any) => { 
        setSelectedDate(date);
        setStartDate(false);
    };
    const handleEndDateChange = (date: any) => { 
        setSelectedEndDate(date);
        setEndDate(false);
    }; 

    const renderStartDate = () => {
        return(  
            <div className='flex flex-row mt-8 items-center' >
                <div className='font-Poppins-Medium text-xs mr-2 flex flex-row items-center' >
                    <p className='w-24' >Starting Date:</p> 
                    <div className='w-7 h-7 border-2 border-entries rounded-md justify-center mx-3 items-center flex'> 
                        <p>{selectedDate.getUTCDate()}</p>
                    </div>
                    <div className='w-7 h-7 mr-2 border-2 border-entries rounded-md justify-center items-center flex'> 
                        <p>{selectedDate.getUTCMonth()+1}</p>
                    </div> 
                </div> 
                <svg onClick={() => setStartDate(isOpen => !isOpen)} className='cursor-pointer' width="16" height="18"  viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4137 1.81812C13.4137 1.26583 12.966 0.818115 12.4137 0.818115C11.8614 0.818115 11.4137 1.26583 11.4137 1.81812V2.45448H6.86825V1.81812C6.86825 1.26583 6.42054 0.818115 5.86825 0.818115C5.31597 0.818115 4.86825 1.26583 4.86825 1.81812V2.45448H3.41371C1.95768 2.45448 0.777344 3.63482 0.777344 5.09084V8.36357V16.5454C0.777344 18.0014 1.95768 19.1818 3.41371 19.1818H14.8683C16.3243 19.1818 17.5046 18.0014 17.5046 16.5454V8.36357V5.09084C17.5046 3.63482 16.3243 2.45448 14.8683 2.45448H13.4137V1.81812ZM15.5046 7.36357V5.09084C15.5046 4.73939 15.2197 4.45448 14.8683 4.45448H13.4137V5.09084C13.4137 5.64313 12.966 6.09084 12.4137 6.09084C11.8614 6.09084 11.4137 5.64313 11.4137 5.09084V4.45448H6.86825V5.09084C6.86825 5.64313 6.42054 6.09084 5.86825 6.09084C5.31597 6.09084 4.86825 5.64313 4.86825 5.09084V4.45448H3.41371C3.06225 4.45448 2.77734 4.73939 2.77734 5.09084V7.36357H15.5046ZM2.77734 9.36357H15.5046V16.5454C15.5046 16.8968 15.2197 17.1818 14.8683 17.1818H3.41371C3.06225 17.1818 2.77734 16.8968 2.77734 16.5454V9.36357Z" fill="#9AA0A6"/>
                </svg>
            </div>  
        )
    }

    const renderEndDate = () => {
        return(  
            <div className='flex flex-row my-4 items-center' >
                <div className='font-Poppins-Medium text-xs mr-2 flex flex-row items-center' >
                    <p className='w-24' >Expiry Date:</p> 
                    <div className='w-7 h-7 border-2 border-entries rounded-md justify-center mx-3 items-center flex'> 
                        <p>{selectedEndDate.getUTCDate()}</p>
                    </div>
                    <div className='w-7 h-7 mr-2 border-2 border-entries rounded-md justify-center items-center flex'> 
                        <p>{selectedEndDate.getUTCMonth()+1}</p>
                    </div> 
                </div> 
                <svg onClick={() => setEndDate(isOpen => !isOpen)} className='cursor-pointer' width="16" height="18"  viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4137 1.81812C13.4137 1.26583 12.966 0.818115 12.4137 0.818115C11.8614 0.818115 11.4137 1.26583 11.4137 1.81812V2.45448H6.86825V1.81812C6.86825 1.26583 6.42054 0.818115 5.86825 0.818115C5.31597 0.818115 4.86825 1.26583 4.86825 1.81812V2.45448H3.41371C1.95768 2.45448 0.777344 3.63482 0.777344 5.09084V8.36357V16.5454C0.777344 18.0014 1.95768 19.1818 3.41371 19.1818H14.8683C16.3243 19.1818 17.5046 18.0014 17.5046 16.5454V8.36357V5.09084C17.5046 3.63482 16.3243 2.45448 14.8683 2.45448H13.4137V1.81812ZM15.5046 7.36357V5.09084C15.5046 4.73939 15.2197 4.45448 14.8683 4.45448H13.4137V5.09084C13.4137 5.64313 12.966 6.09084 12.4137 6.09084C11.8614 6.09084 11.4137 5.64313 11.4137 5.09084V4.45448H6.86825V5.09084C6.86825 5.64313 6.42054 6.09084 5.86825 6.09084C5.31597 6.09084 4.86825 5.64313 4.86825 5.09084V4.45448H3.41371C3.06225 4.45448 2.77734 4.73939 2.77734 5.09084V7.36357H15.5046ZM2.77734 9.36357H15.5046V16.5454C15.5046 16.8968 15.2197 17.1818 14.8683 17.1818H3.41371C3.06225 17.1818 2.77734 16.8968 2.77734 16.5454V9.36357Z" fill="#9AA0A6"/>
                </svg>
            </div>  
        )
    }

    return ( 
        <div style={{width:'400px'}} className='bg-white rounded-lg py-8 px-8' >
            <svg onClick={()=> props.close(false)} className='cursor-pointer' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z" fill="#828282"/>
            </svg>
            <p className='font-Poppins-Semibold mt-4 mb-1' >Add Promo</p>
            <div className='mt-10' > 
                <Input fontSize='xs' placeholder='Discount Value %' />
            </div>
            <p className='font-Poppins-Medium text-xs text-menu_gray mt-2'  >Visible Price: <span className='text-black'>#4000</span></p>     
            
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

                <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                    <DatePicker
                        disablePast
                        open={endDate}
                        onOpen={() => setEndDate(true)}
                        onClose={() => setEndDate(false)}
                        format="dd/MM/yyyy"
                        name='StartTime'
                        value={selectedDate} 
                        onChange={handleEndDateChange}
                        TextFieldComponent={renderEndDate}  /> 
                </MuiPickersUtilsProvider>  
            </ThemeProvider>
            <button className='w-full py-3 text-xs text-white bg-midlman_color font-Poppins-Semibold rounded-md mt-8' >Select</button>
        </div> 
    );
} 

