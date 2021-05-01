import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Dashboard from './Features/Auth/Pages/Dashboard';
import Login from './Features/Auth/Pages/Login';

export default function App() {
    return (  
        <Router>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={Login}
                />

                <Route
                    exact
                    path='/dashboard'
                    component={Dashboard}
                />
            </Switch>
        </Router>
    );
}
