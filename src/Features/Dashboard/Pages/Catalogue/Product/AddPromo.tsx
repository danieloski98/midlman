import { Input } from '@chakra-ui/input'; 
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';   
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"; 
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'; 
import * as yup from 'yup'
import { useFormik } from 'formik'
import { FiCalendar } from 'react-icons/fi'

const validationSchema = yup.object({
    discount: yup.number(),
    startDate: yup.string(),
    endDate: yup.string(),
})


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

    // formik 
    const formik = useFormik({
        initialValues: { discount: 0, startDate: '', endDate: ''},
        validationSchema,
        onSubmit: () => {}
    })

    const handleStartDateChange = async(date: any) => { 
        setSelectedDate(date);
        setStartDate(false);
        await formik.setFieldValue('startDate', date);
    };
    const handleEndDateChange = async(date: any) => { 
        setSelectedEndDate(date);
        setEndDate(false);
        await formik.setFieldValue('endDate', date);
    }; 

    const done = () => {
        if (!formik.dirty || !formik.isValid) {
            alert('please filling the form correctly');
        } else {
            props.selectPromo(formik.values);
            // props.close(false)
        }
    }

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
                <FiCalendar color="#9AA0A6" onClick={() => setStartDate(isOpen => !isOpen)} className='cursor-pointer' size={20} />
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
                <FiCalendar color="#9AA0A6" onClick={() => setStartDate(isOpen => !isOpen)} className='cursor-pointer' size={20} />
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
                <Input fontSize='xs' placeholder='Discount Value %' name="discount" value={formik.values.discount} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {
                    formik.touched.discount && formik.errors.discount && <p className="text-red-400 text-xs mt-1">{formik.errors.discount}</p>
                }
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
            <button onClick={done} className='w-full py-3 text-xs text-white bg-midlman_color font-Poppins-Semibold rounded-md mt-8' >Select</button>
        </div> 
    );
} 

