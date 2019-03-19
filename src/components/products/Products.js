import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './products.css';
import { productList } from './productList';

class Products extends React.Component {

  cardStyles = {margin: '5px', maxWidth: '400px'}

  render() {
    return (
      <>
      <h1>Tool Rentals</h1>
      <div className="products">
        {productList.map(product => {
          return (
            <Card key={product.id} raised style={this.cardStyles}>
              <CardContent>
                <h2>{product.title}</h2>
                <img
                  className="tool-img"
                  src={product.img}
                  alt={product.title}
                />
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: 'auto' }}
                >
                  Rent It
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
      </>
    );
  }
}

export default Products;
