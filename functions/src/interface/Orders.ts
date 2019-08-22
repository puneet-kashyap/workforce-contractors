export class Order {
  orderNumber: any;
  userId: any;
  orderDate: any;
  productId: string;
  productName: string;
  quantity: number;
  dates: [];
  constructor(order: IOrder) {
    this.orderNumber = order.orderNumber;
    this.userId = order.userId;
    this.orderDate = order.orderDate;
    this.productId = order.productId;
    this.productName = order.productName;
    this.quantity = order.quantity;
    this.dates = order.dates;
  }
}

export interface IOrder {
  orderNumber: string | number;
  userId: string | number;
  orderDate: any;
  productId: string;
  productName: string;
  quantity: number;
  dates: [];
}

export const isOrder = (obj: any): obj is Order => {
  return !!(
    obj.orderNumber 
    && obj.userId
    && obj.orderDate
    && obj.productId
    && obj.productName
    && obj.quantity
    && obj.dates
  );
};
