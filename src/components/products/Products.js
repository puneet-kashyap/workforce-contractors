import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import './products.css';
import { productList } from './productList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ProductForm from './ProductForm';

class Products extends React.Component {
  render() {
    return (
      <>
        <h1>Tool Rentals</h1>
        <div className="products">
          {productList.map(product => {
            return (
              <div className="card"  key={product.id} >
                <Card raised>
                  <CardContent>
                    <h2>{product.title}</h2>
                    <img
                      className="tool-img"
                      src={product.img}
                      alt={product.title}
                    />
                  </CardContent>
                  {/* <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ margin: 'auto' }}
                    >
                      Rent It
                    </Button>
                  </CardActions> */}
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      {product.title} Rental Details
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{justifyContent: "center"}}>
                      <ProductForm product={product}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
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
