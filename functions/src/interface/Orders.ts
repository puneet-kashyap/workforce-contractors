import firebase from '../services/firebase.service';
import { Timestamp } from '@google-cloud/firestore';

export class Order {
  private newOrder: IOrder;
  private ORDERS_COLLECTION: string = 'orders';

  constructor(order: IOrder) {
    this.newOrder = order;
  }

  submitOrder(next: any) {
    if (isOrder(this.newOrder)) {
      firebase.db
        .collection(this.ORDERS_COLLECTION)
        .add(JSON.parse(JSON.stringify(this.newOrder)))
        .then(ref => {
          console.log('Added document with ID: ', ref.id);
          next(Object.assign(this.newOrder, { refId: ref.id }));
        })
        .catch(err => {
          console.error(`Error>>> + ${err}`);
          next('Error');
        });
    } else {
      next(
        Object.assign(this.newOrder, { error: 'Required field(s) missing' })
      );
    }
  }
}

export interface IOrder {
  orderNumber: string | number;
  userId: string | number;
  orderDate: Timestamp;
  productId: string;
  productName: string;
  quantity: number;
  dates: [];
}

const isOrder = (obj: any): obj is IOrder => {
  return !!(
    obj.orderNumber &&
    obj.userId &&
    obj.orderDate &&
    obj.productId &&
    obj.productName &&
    obj.quantity &&
    obj.dates
  );
};
