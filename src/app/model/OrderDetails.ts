import { Product } from './Product';
import { Order } from './Order';
export class OrderDetails {

    public id?: number;
    public order: Order;
    public quantity: number;
    public product: Product;

  constructor(
     order: Order,
     quantity: number,
     product: Product
  ) {
      this.order = order;
      this.quantity = quantity;
      this.product = product;
  }
}
