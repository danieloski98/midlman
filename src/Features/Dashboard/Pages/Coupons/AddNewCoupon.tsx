import { Input,Select, InputGroup, InputRightElement } from '@chakra-ui/react'; 
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';   
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"; 
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'; 
import { useHistory } from 'react-router-dom';
import { FiChevronLeft, FiCalendar} from 'react-icons/fi'
import { useFormik } from 'formik'
import * as yup from 'yup'
import LoadingModal from '../../../Modals/LoadingModal';
import { url } from '../../../../Utils/URL';
import { queryclient } from '../../../../App';
const RT = require('random-text-generator');

// validation schema
const validationSchema = yup.object({
    type: yup.string().required('This field is required'),
    discount: yup.number().required('This field is required'),
    entries: yup.number().required('This field is required'),
    expiryTime: yup.string().required('This field is required'),
})

    const defaultMaterialTheme = createMuiTheme({
        palette: {
            primary:  {
                main: '#00A69C',
            }, 
        },
    });

export default function AddNewCoupon() {

    const [code, setCode] = React.useState('');
    const [status, setStatus] = React.useState(false);
    const history = useHistory();
    const [selectedDate, setSelectedDate] = React.useState(new Date().toUTCString());
    const [startDate, setStartDate] = React.useState(false); 
    const [open, setOpen] = React.useState(false);


    // formik
    const formik = useFormik({
        initialValues: {type: '', discount: 0, entries: 0, expiryTime: ''},
        onSubmit: () => {},
        validationSchema
    })
   

    React.useEffect(() => {

    const Random = new RT();

    

    let usernames=["StinkyPoop", "Alextron234", "BattleDash", "berkey10", "Ezblox23", "robiko858", "zakizakowski", "MrArtur1337", "AzisDeus", "AustrianPainter1889", "pomidorek2pl", "JoeMamma", "MafiaBoss75", "SciManDan", "siuras_ogoras986", "jacob.flix", "malario", "BenDrowned", "pickupthefox", "okboomer", "GHPL", "Firstbober"];
    for(let user of usernames) Random.learn(user);

    setCode(Random.generate());

}, []);
    
    

    const renderStartDate = (props: any) => {
        return(   
            <div className='py-2 mt-4' >
                <p className='font-Poppins-Semibold text-xs mb-1'>EXPIRY DATE</p>
                <div className='w-full relative flex items-center justify-end' >
                    <InputGroup>
                        <InputRightElement children={<FiCalendar size={20}  className=" text-gray-600 cursor-pointer transition-all transform hover:scale-110 hover:text-midlman_color" onClick={() => setStartDate(isOpen => !isOpen)} />} />
                        <Input fontSize='xs' value={formik.values.expiryTime} name="expiryTime" onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('expiryTime', true, true)}/>
                    </InputGroup>

                </div>
            </div> 
        )
    }

    const handleStartDateChange = (date: any) => { 
        setSelectedDate(date);
        setStartDate(false);
    };

    const regenerateCode = () => {

        const Random = new RT();

        

        let usernames=["StinkyPoop", "Alextron234", "BattleDash", "berkey10", "Ezblox23", "robiko858", "zakizakowski", "MrArtur1337", "AzisDeus", "AustrianPainter1889", "pomidorek2pl", "JoeMamma", "MafiaBoss75", "SciManDan", "siuras_ogoras986", "jacob.flix", "malario", "BenDrowned", "pickupthefox", "okboomer", "GHPL", "Firstbober"];
        for(let user of usernames) Random.learn(user);

        setCode(Random.generate());

    }

    const submit = async () => {
        if (!formik.dirty) {
            alert('You have to fill the form to continue')
            return;
        }

        if (!formik.isValid) {
            alert('Please fill in the form correctly');
            return;
        }

        // create the object
        // delete formik.values.discount;

        const obj = {
            code,
            status,
            type: formik.values.type,
            entries: formik.values.entries,
            expiryTime: formik.values.expiryTime,
            discount: formik.values.discount,
            // ...formik.values
        }

        setOpen(true);
        // make request
        const request = await fetch(`${url}/coupon/create`, {
            method: 'post',
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj),
        });

        const json = await request.json();
        setOpen(false);

        if (request.status !== 200) {
            alert(json.message);
            return;
        }

        queryclient.invalidateQueries();
        alert('Coupon Created');
        history.goBack();
    }


    return (
        <div className='w-full h-full flex flex-col items-center py-8 ' >  
            <LoadingModal open={open} text="Creating Coupon" onClose={() => setOpen(false)} />
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
                                <Input fontSize='xs' value={code}/>
                                <button onClick={regenerateCode} className=' ml-4 border-1 h-9 border-midlman_color text-midlman_color font-Poppins-Semibold text-xs w-48 px-4 rounded-md' >Auto Generate</button>
                            </div>
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>COUPON TYPE</p>
                            <Select fontSize='xs' placeholder='Coupon Type' value={formik.values.type} name="type" onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('type', true, true)} > 
                                <option>Fixed Cart</option>
                                <option>Fixed Product</option>
                                <option>Percent Cart</option>
                                <option>Percent Product</option>
                            </Select>
                            {formik.touched.type && formik.errors.type && (<p className="text-xs text-red-500 mt-3">{formik.errors.type}</p>)}
                        </div>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>COUPON DISCOUNT</p>
                            <Input fontSize='xs' type="number" value={formik.values.discount} name="discount" onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('discount', true, true)}/>
                            {formik.touched.discount && formik.errors.discount && (<p className="text-xs text-red-500 mt-3">{formik.errors.discount}</p>)}
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
                                    onChange={(date) => {formik.setFieldValue('expiryTime', date?.toUTCString() as string); setStartDate(false)}}
                                    TextFieldComponent={renderStartDate}  /> 
                            </MuiPickersUtilsProvider> 
                        </ThemeProvider>
                        <div className='py-2 mt-4' >
                            <p className='font-Poppins-Semibold text-xs mb-1'>NUMBER OF ENTRIES</p>
                            <Input fontSize='xs' type="number" value={formik.values.entries} name="entries" onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('entries', true, true)} />
                            {formik.touched.entries && formik.errors.entries && (<p className="text-xs text-red-500 mt-3">{formik.errors.entries}</p>)}
                        </div> 
                    </div>  
                    <div className='w-full py-2' >
                        <p className='text-sm font-Poppins-Semibold' >STATUS</p>
                        <div className='flex flex-row  mt-1 ml-4 items-center' >
                            <p className='text-xs mr-2 font-Poppins-Semibold'>Active</p>
                            <label className="switch">
                                <input type="checkbox" onChange={() => setStatus(prev => !prev)}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div> 
                    <div className='w-full flex flex-row pt-12' >
                        <button onClick={submit} className='bg-midlman_color font-Poppins-Semibold text-white text-xs py-3 w-full rounded-md mr-4' >SUBMIT</button>
                        <button onClick={() => history.goBack()} className='py-3 text-xs font-Poppins-Semibold text-menu_gray bg-entries rounded-md w-full mx-4' >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
