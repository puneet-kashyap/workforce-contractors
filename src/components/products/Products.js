import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './products.css';
import { productList } from './productList';
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
