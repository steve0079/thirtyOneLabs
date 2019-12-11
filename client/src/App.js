import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import OurProcess from './components/pages/OurProcess'
import OurProducts from './components/pages/OurProducts'
import Products from './components/pages/Products'
import About from './components/pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import InventoryLayout from './components/pages/InventoryLayout'
import PrivateRoute from './components/routing/PrivateRoute'

import InventoryState from './context/inventory/InventoryState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <InventoryState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/process' component={OurProcess} />
                  <Route exact path='/our_products' component={OurProducts} />
                  <Route exact path='/aboutus' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <PrivateRoute exact path='/inventory' component={InventoryLayout} />
                  <PrivateRoute exact path='/products' component={Products} />
                </Switch>
              </div>
              <Footer />
            </Fragment>
          </Router>
        </AlertState>
      </InventoryState>
    </AuthState>
  );
}

export default App;
