import * as express from 'express';
import products from '../services/products.service';
import { Product } from '../interface/Products';

const router = express.Router();

router.get('/:id', (req: express.Request, res: express.Response) => {
  const productId: string = req.params.id.toString();
  products.getProduct(productId, (product: Product) => {
    res.send(product);
  })
});

export default router;
