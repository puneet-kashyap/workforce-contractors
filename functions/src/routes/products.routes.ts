import * as express from 'express';
import products from '../services/products.service';
import { Product } from '../interface/Products';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  products.getAllProducts((products: Product[]) => {
    res.send(products);
  });
});

router.get('/:id', (req: express.Request, res: express.Response) => {
  const productId: string = req.params.id;
  products.getProduct(productId, (product: Product) => {
    res.send(product);
  });
});

router.post('/', (req: express.Request, res: express.Response) => {
  const newProduct: Product = req.body;
  products.setProduct(newProduct, (newProduct: Product) => {
    res.send(newProduct);
  });
});

router.put('/:id', (req: express.Request, res: express.Response) => {
  const updatedProduct: Product = req.body;
  products.updateProduct(updatedProduct, (updatedProduct: Product) => {
    res.send(updatedProduct);
  });
});

router.delete('/:id', (req: express.Request, res: express.Response) => {
  const productId: string = req.params.id;
  products.deleteProduct(productId, (msg: string) => {
    res.send(msg);
  });
});

export default router;
