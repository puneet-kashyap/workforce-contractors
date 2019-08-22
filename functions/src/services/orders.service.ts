import firebase from '../services/firebase.service';
import { Order, isOrder } from '../interface/Orders';

const submitOrder = (req: any, next: any) => {
  const orderDetails = {
    orderNumber: req.body.orderNumber,
    userId: req.body.userId,
    productId: req.body.productId,
    productName: req.body.productName,
    quantity: req.body.quantity,
    dates: req.body.dates,
    orderDate: firebase.timeStamp.now()
  };

  const newOrder: Order = new Order(orderDetails);

  if (isOrder(newOrder)) {
    firebase.db
      .collection('orders')
      .add(JSON.parse(JSON.stringify(newOrder)))
      .then(ref => {
        console.log('Added document with ID: ', ref.id);
        next(Object.assign(newOrder, { refId: ref.id }));
      })
      .catch(err => {
        console.error(`Error>>> + ${err}`);
        next('Error');
      });
  } else {
    next(Object.assign(newOrder, { error: 'Required field(s) missing' }));
  }
};

const getAllOrders = (req: any, next: any) => {
  firebase.db
    .collection('orders')
    .get()
    .then((snapshot: any) => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      const orderList: any = { orders: [] };
      snapshot.forEach((doc: any) => {
        const formattedDate = doc.data().dates.map((date: any) => {
          return date.toDate();
        });
        const formattedOrder = Object.assign(doc.data(), {
          dates: formattedDate
        });
        orderList.orders.push(formattedOrder);
      });
      next(orderList);
    })
    .catch((err: any) => {
      console.log('Error getting documents', err);
      throw new Error(err);
    });
};

export default {
  submitOrder,
  getAllOrders
};
