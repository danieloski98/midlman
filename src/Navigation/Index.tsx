import React from 'react'
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
import Dashboard from '../Features/Auth/Pages/Dashboard'
import Login from '../Features/Auth/Pages/Login'
import ForgotPassword from '../Features/Auth/Pages/ForgotPassword'
import ResetPassword from '../Features/Auth/Pages/ResetPassword'
import DelievryMan from '../Features/DeliveryMan';

export default function Index() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/forgotpassword' component={ForgotPassword} exact />
        <Route path='/resetpassword' component={ResetPassword} exact />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/deliveryman" component={DelievryMan} exact />
      </Switch>
    </Router>
  )
}
