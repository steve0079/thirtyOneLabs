import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Process from './components/pages/Process'
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
                  <Route exact path='/process' component={Process} />
                  <Route exact path='/products' component={Products} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <PrivateRoute exact path='/inventory' component={InventoryLayout} />
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
