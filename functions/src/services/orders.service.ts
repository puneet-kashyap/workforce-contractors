import firebase from '../services/firebase.service';
import { Order } from '../interface/Orders';
import { timestampToDate } from '../utils/DateUtil';

const ORDERS_COLLECTION = 'orders';

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
  newOrder.submitOrder(next);
};

const updateOrder = (req: any, next: any) => {
  firebase
    .updateDocument(ORDERS_COLLECTION, req.params.id, req.body)
    .then((result: any) => {
      next(result);
    });
};

const deleteOrder = (documentId: string, next: any) => {
  firebase.deleteDocument(ORDERS_COLLECTION, documentId).then((result: any) => {
    next(result);
  });
};

const getAnOrder = (documentId: string, next: any) => {
  firebase
    .getDocument(ORDERS_COLLECTION, documentId)
    .then((orderDetails: any) => {
      next(orderDetails);
    });
};

const getAllOrders = (req: any, next: any) => {
  const rawOrders = firebase.getAllDocuments(ORDERS_COLLECTION);
  rawOrders.then((docList: any) => {
    const allOrders: any[] = [];
    docList.map((order: any) => {
      order.orderDate = timestampToDate(order.orderDate);
      allOrders.push(order);
    });
    next(allOrders);
  });
};

export default {
  submitOrder,
  getAllOrders,
  deleteOrder,
  updateOrder,
  getAnOrder
};
