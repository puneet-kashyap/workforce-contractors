import React from 'react';
import './menu.css';

class Menu extends React.Component {
  menuItem = ['Home', 'Products', 'Inquiry', 'Contact'];
  render() {
    return (
      <nav className="menu">
        {this.menuItem.map((item, index) => {
          return (
            <div key={index} className="menu-item">
              {item}
            </div>
          );
        })}
      </nav>
    );
  }
}

export default Menu;
