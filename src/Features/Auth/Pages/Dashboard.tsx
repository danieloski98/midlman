import React from 'react';
import { AdminModel } from '../../../models/Admin.model';

import DashboardRoutes from '../../../Navigation/DashboardRoutes';
import Menu from '../../Dashboard/Component/Menu';
import { useHistory } from 'react-router-dom'
import useDetails from '../../../Hooks/useDetails';
import {Value, MenuContext} from '../../../Context/MenuContext'
import { motion,  AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Navbar from '../../Dashboard/Component/Navbar';


export default function Dashboard() {
  const history = useHistory();

  const ani = { hidden: {opacity: 0, x: -100}, visible: {opacity: 1, x: 0}}

  // context object 
  const menuContext: Value = React.useContext(MenuContext);
 
  const { setAdminDetails, setToken } = useDetails();
  React.useEffect(() => {
    // check localstorage
    const keepLoggedIn = localStorage.getItem('keeploggedin'); 

    if (keepLoggedIn === '1') {
      // update the details from localStorage
      // check if there are details

      const details = JSON.parse(localStorage.getItem('details') as string) as AdminModel;
      const token = localStorage.getItem('token') as string;

      if (details === null || details === undefined || details === {}) {
          alert('You have to login again');
          history.push('/')
      }else {
        // set the values
        setAdminDetails(details);
        setToken(token);
      }
    } else if (keepLoggedIn === '0') {
       // update the details from localStorage
      // check if there are details

      const details = JSON.parse(sessionStorage.getItem('details') as string) as AdminModel;
      const token = sessionStorage.getItem('token') as string;

      if (details === null || details === undefined || details === {}) {
          alert('You have to login again');
          history.push('/')
      }else {
        // set the values
        setAdminDetails(details);
        setToken(token);
      }
    }else {
      history.push('/')
    }
  }, []);
    return (
          <div className='w-full h-screen flex flex-col  overflow-hidden' >
            <div className="flex-1 flex overflow-auto">
                <div className="w-full flex flex-row ">
                  <AnimatePresence>
                  {menuContext.showModal &&
                      <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1, x: -10, transition: { type: 'spring', stiffness: 100, duration: 2} }}
                      exit={{ opacity: 0, x: -200 }} 
                      transition={{ type: "spring", stiffness: 100, duration: 2 }}
                      className='overflow-y-auto overflow-x-hidden w-64 m-0 bg-midlman_color '>
                        <Menu />
                      </motion.div>
                  }
                  </AnimatePresence>
                    <div className='w-full h-screen flex flex-col flex-1 overflow-y-auto overflow-x-hidden ' >
                        <div className="w-full px-8 py-8">
                          <Navbar />
                        </div>
                        <div className="flex-1">
                          <DashboardRoutes/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
