import React from 'react';
import './header.css';
import logo from '../../logo.jpg';
import Menu from '../menu/Menu';

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="logo">
            <img className="logo-img" src={logo} alt="Logo" />
          </div>
        </header>
        <Menu />
      </>
    );
  }
}

export default Header;
