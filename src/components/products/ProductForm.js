import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './productForm.css';

class ProductForm extends Component {
  render() {
    const { title, price } = this.props.product;
    return (
      <div className="product-form">
        <div>
          <h3>{title}</h3>
        </div>
        <div className="rent-price">
          <b>Rent: </b> &#8377; {price} per day
        </div>
        <TextField required label="Quantity" variant="outlined" />
      </div>
    );
  }
}

export default ProductForm;
