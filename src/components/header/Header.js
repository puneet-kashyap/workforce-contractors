import React from 'react';
import './header.css';
import logo from '../../logo.jpg';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="logo">
          <img class="responsive" src={logo} alt="Logo"/>
        </div>
      </header>
    );
  }
}

export default Header;
