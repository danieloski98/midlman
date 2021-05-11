import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Admin from '../Features/Dashboard/Pages/Admin'
import Brand from '../Features/Dashboard/Pages/Brand'
import Catergories from '../Features/Dashboard/Pages/Catergories'
import CompletedOrder from '../Features/Dashboard/Pages/CompletedOrder'
import Delivery from '../Features/Dashboard/Pages/Delivery'
import ExpressAccount from '../Features/Dashboard/Pages/ExpressAccount'
import ManageRole from '../Features/Dashboard/Pages/ManageRole'
import OrderList from '../Features/Dashboard/Pages/OrderList'
import PortalAccount from '../Features/Dashboard/Pages/PortalAccount'
import Product from '../Features/Dashboard/Pages/Product'
import ProductRating from '../Features/Dashboard/Pages/ProductRating'
import UploadProduct from '../Features/Dashboard/Pages/UploadProduct'
import Contents from '../Features/Dashboard/Pages/Contents'
import LowStockProducts from '../Features/Dashboard/Pages/LowStockProducts'
import ProductReview from '../Features/Dashboard/Pages/ProductReview'

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
            <Route path="/dashboard/productrating" component={ProductRating} exact /> 
            <Route path="/dashboard/productreview" component={ProductReview} exact /> 
            <Route path="/dashboard/lowstockproduct" component={LowStockProducts} exact /> 
            <Route path="/dashboard/managerole" component={ManageRole} exact /> 
            <Route path="/dashboard/orderlist" component={OrderList} exact /> 
            <Route path="/dashboard/uploadproduct" component={UploadProduct} exact/> 
        </Switch>  
    )
}
