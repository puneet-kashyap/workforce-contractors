import * as express from 'express';
import Inventory from '../services/inventory.service';

const router = express.Router();

router.get('/:id', (req: express.Request, res: express.Response) => {
  const dateRange = {
    from: req.query.from,
    to: req.query.to
  };
  const productId: string = req.params.id.toString();
  Inventory.getProductRange(productId, dateRange, (inventory: []) => {
    res.send(inventory);
  });
});

export default router;
