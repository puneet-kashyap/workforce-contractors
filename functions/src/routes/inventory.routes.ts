import * as express from 'express';
import products from '../services/products.service';
import { Product } from '../interface/Products';
import Inventory from '../services/inventory.service';

const router = express.Router();

router.get('/:id', (req: express.Request, res: express.Response) => {
  const productId: string = req.params.id.toString();
  Inventory.getProductAvailability(req, (availability: any) => {
    console.log(availability)
  });
  products.getProduct(productId, (product: Product) => {
    res.send(product);
  })
});

export default router;
