import { Product } from './Product';
import { OrderDetails } from './OrderDetails';
export class Order {

    public date_signed: String;
    public customer_name: String;
    public id?: number ;
    public OrderDetails?: OrderDetails[];

  constructor(customer_name: String,date_signed: String) {
    this.date_signed = date_signed;
    this.customer_name = customer_name;
  }
}
 export class Quantity{
   constructor(public quantity: number = 1) {
     
   }
 }