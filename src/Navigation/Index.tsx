import React from 'react'
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
import Dashboard from '../Features/Auth/Pages/Dashboard'
import Login from '../Features/Auth/Pages/Login'

export default function Index() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path="/dashboard/" component={Dashboard} exact />
      </Switch>
    </Router>
  )
}
