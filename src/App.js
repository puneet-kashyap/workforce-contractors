import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Product from './components/product/Product';
import './App.css';
import Inquiry from './components/inquiry/Inquiry';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <MuiPickersUtilsProvider utils={MomentUtils}>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/inquiry" exact component={Inquiry} />
          <Route path="/contact" exact component={Contact} />
          </MuiPickersUtilsProvider>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
