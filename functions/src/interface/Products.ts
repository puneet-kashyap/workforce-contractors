export interface Product {
  id: string,
  name: string
  totalQuantity: number
  rentalDates: []
}

export interface Order {
  productId: string,
  name: string,
  quantity: number,
  dates: []
}

export interface ProductList {
  products: Product[];
}

export interface ProductNotFound {
  id: string,
  message: string
}

export interface HealthInfo {
  app: string,
  version: string,
  timeStamp: number,
  message: string
}