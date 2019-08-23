export interface Product {
  id: string,
  name: string
  totalQuantity: number
  rentalDates: []
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