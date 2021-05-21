import React from 'react'
import { Route, Switch } from 'react-router-dom' 
import Admin from '../Features/Dashboard/Pages/ManageAdmin/Admin/Admin'
import Brand from '../Features/Dashboard/Pages/Catalogue/Brand/Brand'
import Catergories from '../Features/Dashboard/Pages/Catalogue/Catargory/Catergories'
import CompletedOrder from '../Features/Dashboard/Pages/OrdersDetails/CompletedOrder'
import Delivery from '../Features/Dashboard/Pages/ManageAdmin/DeliveryMan/DeliveryMan'
import ExpressAccount from '../Features/Dashboard/Pages/Accounts/ExpressAccount/ExpressAccount'
import ManageRole from '../Features/Dashboard/Pages/ManageAdmin/ManageRole/ManageRole'
import OrderList from '../Features/Dashboard/Pages/OrdersDetails/Order/OrderList'
import PortalAccount from '../Features/Dashboard/Pages/Accounts/PortalAccount/PortalAccount'
import Product from '../Features/Dashboard/Pages/Catalogue/Product/Product'
import ProductRating from '../Features/Dashboard/Pages/Catalogue/ProductRating'
import UploadProduct from '../Features/Dashboard/Pages/Catalogue/Product/UploadProduct'
import Contents from '../Features/Dashboard/Pages/Dashboard/Contents'
import LowStockProducts from '../Features/Dashboard/Pages/Reports/LowStockProducts'
import ProductReview from '../Features/Dashboard/Pages/Reports/Productviews'
import RefundReequest from '../Features/Dashboard/Pages/Reports/RefundRequest'
import Coupon from '../Features/Dashboard/Pages/Coupons/Coupon'
import ShippingMethods from '../Features/Dashboard/Pages/Shipping/ShippingMethods'
import FlatRate from '../Features/Dashboard/Pages/Shipping/FlatRate/FlatRate'
import PrescriptionReports from '../Features/Dashboard/Pages/Reports/PrescriptionReports'
import ManualTopUp from '../Features/Dashboard/Pages/Payment/ManualTopUp'
import LandingPage from '../Features/Dashboard/Pages/WebPages/LandingPage' 
import Newsletter from '../Features/Dashboard/Pages/WebPages/Newsletter'
import ContactForm from '../Features/Dashboard/Pages/WebPages/ContactForm'
import Blog from '../Features/Dashboard/Pages/WebPages/Blog'
import AboutUs from '../Features/Dashboard/Pages/WebPages/AboutUs'
import FAQ from '../Features/Dashboard/Pages/WebPages/FAQ/FAQ'
import EditFAQ from '../Features/Dashboard/Pages/WebPages/FAQ/EditFAQ'
import TeermsAndConditions from '../Features/Dashboard/Pages/OtherContent/TermsAndConditions' 
import PrivacyPolicy from '../Features/Dashboard/Pages/OtherContent/PrivacyPolicy'
import RefundPolicy from '../Features/Dashboard/Pages/OtherContent/RefundPolicy'
import Logos from '../Features/Dashboard/Pages/MediaContent/Logos'
import Banners from '../Features/Dashboard/Pages/MediaContent/Banners'
import SliderImages from '../Features/Dashboard/Pages/MediaContent/SliderImages'
import FeaturedBrands from '../Features/Dashboard/Pages/MediaContent/FeaturedBrands'
import SocialIcons from '../Features/Dashboard/Pages/MediaContent/SocialIcons'
import Setting from '../Features/Dashboard/Pages/Settings/Setting'
import EditAdmin from '../Features/Dashboard/Pages/ManageAdmin/Admin/EditAdmin'
import AddAdmin from '../Features/Dashboard/Pages/ManageAdmin/Admin/AddAdmin'
import AddDeliveryMan from '../Features/Dashboard/Pages/ManageAdmin/DeliveryMan/AddDeliveryMan'
import EditDeliveryMan from '../Features/Dashboard/Pages/ManageAdmin/DeliveryMan/EditDeliveryMan'
import PendingOrder from '../Features/Dashboard/Pages/ManageAdmin/DeliveryMan/PendingOrder'
import DeliveredOrder from '../Features/Dashboard/Pages/ManageAdmin/DeliveryMan/DeliveredOrder'
import Roles from '../Features/Dashboard/Pages/ManageAdmin/ManageRole/Roles'
import EditOrder from '../Features/Dashboard/Pages/OrdersDetails/Order/EditOrder'
import EditExpressAccount from '../Features/Dashboard/Pages/Accounts/ExpressAccount/EditExpressAccount'
import NewExpressAccount from '../Features/Dashboard/Pages/Accounts/ExpressAccount/NewExpressAccount'
import NewPortalAccount from '../Features/Dashboard/Pages/Accounts/PortalAccount/NewPortalAccount'
import EditPortalAccount from '../Features/Dashboard/Pages/Accounts/PortalAccount/EditPortalAccount'
import EditCategory from '../Features/Dashboard/Pages/Catalogue/Catargory/EditCategory'
import NewCategory from '../Features/Dashboard/Pages/Catalogue/Catargory/NewCategory'
import NewBrand from '../Features/Dashboard/Pages/Catalogue/Brand/NewBrand'
import EditBrand from '../Features/Dashboard/Pages/Catalogue/Brand/EditBrand'
import EditProduct from '../Features/Dashboard/Pages/Catalogue/Product/EditProduct'
import AddNewCoupon from '../Features/Dashboard/Pages/Coupons/AddNewCoupon'
import EditCoupon from '../Features/Dashboard/Pages/Coupons/EditCoupon'
import EditFlatRate from '../Features/Dashboard/Pages/Shipping/FlatRate/EditFlatRate'
import index from '../Features/Dashboard/Pages/AdminChat'

export default function DashboardRoutes() {
    return (  
        <Switch>
            <Route path='/dashboard' component={Contents} exact />
            <Route path="/dashboard/aboutus" component={AboutUs} exact /> 
            <Route path="/dashboard/addadmin" component={AddAdmin} exact /> 
            <Route path="/dashboard/adddeliveryman" component={AddDeliveryMan} exact /> 
            <Route path="/dashboard/addnewcoupon" component={AddNewCoupon} exact /> 
            <Route path="/dashboard/admin" component={Admin} exact /> 
            <Route path="/dashboard/adminchat" component={index} exact /> 
            <Route path="/dashboard/banners" component={Banners} exact /> 
            <Route path="/dashboard/blog" component={Blog} exact /> 
            <Route path="/dashboard/brand" component={Brand} exact /> 
            <Route path="/dashboard/catergories" component={Catergories} exact />  
            <Route path="/dashboard/completedorder" component={CompletedOrder} exact /> 
            <Route path="/dashboard/contactform" component={ContactForm} exact />  
            <Route path="/dashboard/coupon" component={Coupon} exact /> 
            <Route path="/dashboard/delivery" component={Delivery} exact /> 
            <Route path="/dashboard/deliveredorder" component={DeliveredOrder} exact /> 
            <Route path="/dashboard/editadmin" component={EditAdmin} exact />  
            <Route path="/dashboard/editbrand" component={EditBrand} exact /> 
            <Route path="/dashboard/editcategory" component={EditCategory} exact /> 
            <Route path="/dashboard/editcoupon" component={EditCoupon} exact /> 
            <Route path="/dashboard/editdeliveryman" component={EditDeliveryMan} exact /> 
            <Route path="/dashboard/editexpressaccount" component={EditExpressAccount} exact />
            <Route path="/dashboard/editflatrate" component={EditFlatRate} exact /> 
            <Route path="/dashboard/editportalaccount" component={EditPortalAccount} exact /> 
            <Route path="/dashboard/editproduct" component={EditProduct} exact /> 
            <Route path="/dashboard/editorder" component={EditOrder} exact /> 
            <Route path="/dashboard/editfaq" component={EditFAQ} exact /> 
            <Route path="/dashboard/expressaccount" component={ExpressAccount} exact />  
            <Route path="/dashboard/faq" component={FAQ} exact /> 
            <Route path="/dashboard/featuredbrands" component={FeaturedBrands} exact /> 
            <Route path="/dashboard/flatrate" component={FlatRate} exact /> 
            <Route path="/dashboard/landingpage" component={LandingPage} exact /> 
            <Route path="/dashboard/logos" component={Logos} exact /> 
            <Route path="/dashboard/lowstockproduct" component={LowStockProducts} exact /> 
            <Route path="/dashboard/managerole" component={ManageRole} exact /> 
            <Route path="/dashboard/manualtopup" component={ManualTopUp} exact /> 
            <Route path="/dashboard/newbrand" component={NewBrand} exact /> 
            <Route path="/dashboard/newcategory" component={NewCategory} exact /> 
            <Route path="/dashboard/newexpressaccount" component={NewExpressAccount} exact /> 
            <Route path="/dashboard/newportalaccount" component={NewPortalAccount} exact /> 
            <Route path="/dashboard/newsletter" component={Newsletter} exact /> 
            <Route path="/dashboard/orderlist" component={OrderList} exact /> 
            <Route path="/dashboard/pendingorder" component={PendingOrder} exact /> 
            <Route path="/dashboard/portalaccount" component={PortalAccount} exact /> 
            <Route path="/dashboard/prescriptionreports" component={PrescriptionReports} exact />
            <Route path="/dashboard/privacypolicy" component={PrivacyPolicy} exact /> 
            <Route path="/dashboard/product" component={Product} exact /> 
            <Route path="/dashboard/productrating" component={ProductRating} exact /> 
            <Route path="/dashboard/productreview" component={ProductReview} exact /> 
            <Route path="/dashboard/refundpolicy" component={RefundPolicy} exact />
            <Route path="/dashboard/refundrequest" component={RefundReequest} exact />
            <Route path="/dashboard/roles" component={Roles} exact />
            <Route path="/dashboard/settings" component={Setting} exact /> 
            <Route path="/dashboard/socialicons" component={SocialIcons} exact /> 
            <Route path="/dashboard/sliderimages" component={SliderImages} exact /> 
            <Route path="/dashboard/shippingmethods" component={ShippingMethods} exact /> 
            <Route path="/dashboard/termsandconditions" component={TeermsAndConditions} exact /> 
            <Route path="/dashboard/uploadproduct" component={UploadProduct} exact/> 
        </Switch>  
    )
}
