import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Products from './components/products/Products';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
