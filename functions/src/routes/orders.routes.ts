import * as express from 'express';
import Orders from '../services/orders.service';
import { Order } from '../interface/Orders';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  Orders.getAllOrders(req, (result: any) => {
    res.send(result);
  });
});

router.post('/', (req: express.Request, res: express.Response) => {
  Orders.submitOrder(req, (result: Order) => {
    res.send(result);
  });
});

export default router;
