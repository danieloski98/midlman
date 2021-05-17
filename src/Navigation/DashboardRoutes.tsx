import React from 'react'
import { Route, Switch } from 'react-router-dom' 
import Admin from '../Features/Dashboard/Pages/ManageAdmin/Admin'
import Brand from '../Features/Dashboard/Pages/Catalogue/Brand'
import Catergories from '../Features/Dashboard/Pages/Catalogue/Catergories'
import CompletedOrder from '../Features/Dashboard/Pages/OrdersDetails/CompletedOrder'
import Delivery from '../Features/Dashboard/Pages/ManageAdmin/DeliveryMan'
import ExpressAccount from '../Features/Dashboard/Pages/Accounts/ExpressAccount'
import ManageRole from '../Features/Dashboard/Pages/ManageAdmin/ManageRole'
import OrderList from '../Features/Dashboard/Pages/OrderList'
import PortalAccount from '../Features/Dashboard/Pages/Accounts/PortalAccount'
import Product from '../Features/Dashboard/Pages/Catalogue/Product'
import ProductRating from '../Features/Dashboard/Pages/Catalogue/ProductRating'
import UploadProduct from '../Features/Dashboard/Pages/UploadProduct'
import Contents from '../Features/Dashboard/Pages/Dashboard/Contents'
import LowStockProducts from '../Features/Dashboard/Pages/Reports/LowStockProducts'
import ProductReview from '../Features/Dashboard/Pages/Reports/Productviews'
import RefundReequest from '../Features/Dashboard/Pages/Reports/RefundRequest'
import Coupon from '../Features/Dashboard/Pages/Coupons/Coupon'
import ShippingMethods from '../Features/Dashboard/Pages/Shipping/ShippingMethods'
import FlatRate from '../Features/Dashboard/Pages/Shipping/FlatRate'
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

export default function DashboardRoutes() {
    return (  
        <Switch>
            <Route path='/dashboard' component={Contents} exact />
            <Route path="/dashboard/aboutus" component={AboutUs} exact /> 
            <Route path="/dashboard/admin" component={Admin} exact /> 
            <Route path="/dashboard/banners" component={Banners} exact /> 
            <Route path="/dashboard/blog" component={Blog} exact /> 
            <Route path="/dashboard/brand" component={Brand} exact /> 
            <Route path="/dashboard/catergories" component={Catergories} exact />  
            <Route path="/dashboard/completedorder" component={CompletedOrder} exact /> 
            <Route path="/dashboard/contactform" component={ContactForm} exact />  
            <Route path="/dashboard/coupon" component={Coupon} exact /> 
            <Route path="/dashboard/delivery" component={Delivery} exact /> 
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
            <Route path="/dashboard/newsletter" component={Newsletter} exact /> 
            <Route path="/dashboard/orderlist" component={OrderList} exact /> 
            <Route path="/dashboard/portalaccount" component={PortalAccount} exact /> 
            <Route path="/dashboard/prescriptionreports" component={PrescriptionReports} exact />
            <Route path="/dashboard/privacypolicy" component={PrivacyPolicy} exact /> 
            <Route path="/dashboard/product" component={Product} exact /> 
            <Route path="/dashboard/productrating" component={ProductRating} exact /> 
            <Route path="/dashboard/productreview" component={ProductReview} exact /> 
            <Route path="/dashboard/refundpolicy" component={RefundPolicy} exact />
            <Route path="/dashboard/refundrequest" component={RefundReequest} exact />
            <Route path="/dashboard/settings" component={Setting} exact /> 
            <Route path="/dashboard/socialicons" component={SocialIcons} exact /> 
            <Route path="/dashboard/sliderimages" component={SliderImages} exact /> 
            <Route path="/dashboard/shippingmethods" component={ShippingMethods} exact /> 
            <Route path="/dashboard/termsandconditions" component={TeermsAndConditions} exact /> 
            <Route path="/dashboard/uploadproduct" component={UploadProduct} exact/> 
        </Switch>  
    )
}
