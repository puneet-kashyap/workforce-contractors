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
});

router.put('/:id', (req: express.Request, res: express.Response) => {
  const updatedProduct: Product = req.body
  products.updateProduct(updatedProduct, res);
});

router.delete('/:id', (req: express.Request, res: express.Response) => {
  const productId: string = req.params.id
  products.deleteProduct(productId, res);
});

export default router;
