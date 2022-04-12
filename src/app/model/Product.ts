import { OrderDetails } from "./OrderDetails";

export class Product {
  constructor(
    public id: number,
    public product_name: string,
    public price: number,
    public orderDetails: OrderDetails[]
  ) {}
}
