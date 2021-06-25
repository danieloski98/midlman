import React from 'react';
import { AdminModel } from '../../../models/Admin.model';

import DashboardRoutes from '../../../Navigation/DashboardRoutes';
import Menu from '../../Dashboard/Component/Menu';
import { useHistory } from 'react-router-dom'
import useDetails from '../../../Hooks/useDetails';

export default function Dashboard() {
  const history = useHistory();
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
                    <div className='overflow-y-auto overflow-x-hidden w-64 m-0 bg-midlman_color '>
                        <Menu />
                    </div>
                    <div className='w-full h-screen flex flex-1 overflow-y-auto overflow-x-hidden ' >
                        <DashboardRoutes/>
                    </div>
                </div>
            </div>
        </div>
    );
}
