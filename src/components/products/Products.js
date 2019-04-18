import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

import './products.css';
import { productList } from './productList';

class Products extends React.Component {
  render() {
    return (
      <>
        <h1>Tool Rentals</h1>
        <div className="products">
          {productList.map(product => {
            return (
              <div className="card" key={product.id}>
                <Card raised>
                  <CardContent>
                    <h2>{product.title}</h2>
                    <img
                      className="tool-img"
                      src={product.img}
                      alt={product.title}
                    />
                    <Button
                      component={Link}
                      variant="contained"
                      color="primary"
                      to={{
                        pathname: `product/${product.id}`,
                        state: product
                      }}
                    >
                      Rent It
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Products;
