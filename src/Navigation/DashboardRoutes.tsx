import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from '../Features/Auth/Pages/Dashboard-Screens/Admin'
import Delivery from '../Features/Auth/Pages/Dashboard-Screens/Delivery'
import Product from '../Features/Auth/Pages/Dashboard-Screens/Product'
import UploadProduct from '../Features/Auth/Pages/Dashboard-Screens/UploadProduct'
import Contents from '../Features/Dashboard-Components/Contents'

export default function DashboardRoutes() {
    return ( 
        <Router>
            <Switch>
                <Route path='/dashboard' component={Contents} exact />
                <Route path="/dashboard/product" component={Product} exact /> 
                <Route path="/dashboard/admin" component={Admin} exact /> 
                <Route path="/dashboard/delivery" component={Delivery} exact /> 
                <Route path="/dashboard/uploadproduct" component={UploadProduct} exact/> 
            </Switch> 
        </Router>
    )
}
