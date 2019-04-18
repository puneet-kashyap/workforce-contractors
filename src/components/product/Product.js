import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
        <Card raised>
          <CardContent>
            <h1>{title}</h1>
            <img src={img} className="tool-img" alt={title} />
          </CardContent>
          <ProductForm product={this.state.product} />
        </Card>
      </div>
    );
  }
}

export default Product;
