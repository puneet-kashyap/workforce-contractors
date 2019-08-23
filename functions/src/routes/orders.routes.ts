import * as express from 'express';
import Orders from '../services/orders.service';
import { Order } from '../interface/Orders';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  Orders.getAllOrders(req, (result: any) => {
    res.send(result);
  });
});

router.get('/:id', (req: express.Request, res: express.Response) => {
  Orders.getAnOrder(req.params.id, (result: any) => {
    res.send(result);
  });
});

router.post('/', (req: express.Request, res: express.Response) => {
  Orders.submitOrder(req, (result: Order) => {
    res.send(result);
  });
});

router.put('/:id', (req: express.Request, res: express.Response) => {
  Orders.updateOrder(req, (result: any) => {
    res.send(result);
  });
});

router.delete('/:id', (req: express.Request, res: express.Response) => {
  Orders.deleteOrder(req.params.id, (result: any) => {
    res.send(result);
  });
});

export default router;
