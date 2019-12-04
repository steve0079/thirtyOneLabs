import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Process from './components/pages/Process'
import Products from './components/pages/Products'
import About from './components/pages/About'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Inventory from './components/pages/Inventory'

const App = () => {
  return (
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
            <Route exact path='/inventory' component={Inventory} />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
