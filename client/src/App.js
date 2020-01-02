import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './components/pages/LandingPage'
import Home from './components/pages/Home'
import OurProcess from './components/pages/OurProcess'
import OurProduct from './components/pages/OurProduct'
import Inventory from './components/pages/Inventory'
import About from './components/pages/About'
// import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AdminPanel from './components/pages/AdminPanel'
import PrivateRoute from './components/routing/PrivateRoute'
import ScrollToTop from './utils/ScrollToTop'

import InventoryState from './context/inventory/InventoryState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import AgeState from './context/age/AgeState'
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <InventoryState>
        <AlertState>
          <AgeState>
            <Router>
              <Fragment>
                <Navbar />
                <div className="container">
                  <ScrollToTop>
                    <Switch>
                      <Route exact path='/' component={LandingPage} />
                      <Route exact path='/home' component={Home} />
                      <Route exact path='/our_process' component={OurProcess} />
                      <Route exact path='/our_product' component={OurProduct} />
                      <Route exact path='/inventory' component={Inventory} />
                      <Route exact path='/aboutus' component={About} />
                      <Route exact path='/login' component={Login} />
                      <PrivateRoute exact path='/admin' component={AdminPanel} />
                      {/* <Route exact path='/register' component={Register} /> */}
                    </Switch>
                  </ScrollToTop>
                </div>
                <Footer />
              </Fragment>
            </Router>
          </AgeState>
        </AlertState>
      </InventoryState>
    </AuthState>
  );
}

export default App;
