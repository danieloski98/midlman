import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Admin from '../Features/Auth/Pages/Dashboard-Screens/Admin'
import Brand from '../Features/Auth/Pages/Dashboard-Screens/Brand'
import Catergories from '../Features/Auth/Pages/Dashboard-Screens/Catergories'
import CompletedOrder from '../Features/Auth/Pages/Dashboard-Screens/CompletedOrder'
import Delivery from '../Features/Auth/Pages/Dashboard-Screens/Delivery'
import ExpressAccount from '../Features/Auth/Pages/Dashboard-Screens/ExpressAccount'
import ManageRole from '../Features/Auth/Pages/Dashboard-Screens/ManageRole'
import OrderList from '../Features/Auth/Pages/Dashboard-Screens/OrderList'
import PortalAccount from '../Features/Auth/Pages/Dashboard-Screens/PortalAccount'
import Product from '../Features/Auth/Pages/Dashboard-Screens/Product'
import UploadProduct from '../Features/Auth/Pages/Dashboard-Screens/UploadProduct'
import Contents from '../Features/Dashboard-Components/Contents'

export default function DashboardRoutes() {
    return (  
        <Switch>
            <Route path='/dashboard' component={Contents} exact />
            <Route path="/dashboard/product" component={Product} exact /> 
            <Route path="/dashboard/admin" component={Admin} exact /> 
            <Route path="/dashboard/delivery" component={Delivery} exact /> 
            <Route path="/dashboard/completedorder" component={CompletedOrder} exact /> 
            <Route path="/dashboard/expressaccount" component={ExpressAccount} exact /> 
            <Route path="/dashboard/portalaccount" component={PortalAccount} exact /> 
            <Route path="/dashboard/catergories" component={Catergories} exact /> 
            <Route path="/dashboard/brand" component={Brand} exact /> 
            <Route path="/dashboard/managerole" component={ManageRole} exact /> 
            <Route path="/dashboard/orderlist" component={OrderList} exact /> 
            <Route path="/dashboard/uploadproduct" component={UploadProduct} exact/> 
        </Switch>  
    )
}
