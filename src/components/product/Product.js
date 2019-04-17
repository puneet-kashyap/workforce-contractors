import React from 'react';
import productApi from '../../apis/productsApi';
import './product.css';
import ProductForm from '../products/ProductForm';

class Product extends React.Component {
  state = {
    product: this.props.location.state || {}
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    productApi
      .get(`products/${id}`)
      .then(res => {
        this.setState({ product: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { title, img } = this.state.product;
    return (
      <div className="product">
        <h1>{title}</h1>
        <div className="img-section">
          <img src={img} className="tool-img" alt={title} />
        </div>
        <ProductForm product={this.state.product} />
      </div>
    );
  }
}

export default Product;
