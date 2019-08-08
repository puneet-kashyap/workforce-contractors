import * as express from 'express';
import products from '../services/products.service';
import { Product } from '../interface/Products';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  products.getAllProducts(res);
});

router.get('/:id', (req: express.Request, res: express.Response) => {
  const productId: string = req.params.id
  products.getProduct(productId, res);
});

router.post('/', (req: express.Request, res: express.Response) => {
  const newProduct: Product = req.body
  products.setProduct(newProduct, res);
  res.json(newProduct);
});

export default router;
