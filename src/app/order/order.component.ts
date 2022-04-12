import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Order, Quantity } from '../model/Order';
import { Product } from '../model/Product';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  name = new FormControl('', Validators.required);
  orderId: any;
  @Output() orderSend = new EventEmitter<Order>();
  @Input() quantity = 1;
  order : Order | undefined;
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}

  addOrder() {
    let orderObj = new Order(Date.now().toString(), this.name.value);
    this.orderService.addOrder(orderObj).subscribe((x) => {
      //emit eventNames
      this.order = x;
      this.orderSend.emit(x);
      this.orderId = x.id;
      console.log('Order added customer name: ' + this.name.value +" Date: "+x.date_signed);
    });
  }
  addOrderDetails(product: Product): void {
    console.log(this.quantity);

    console.log(
      'addOrderDetails: Quantity =  ' +
        this.quantity +
        ' Product: ' +
        product.product_name
    );
    if (this.order !== undefined && product != undefined) {
      let quantityObject = new Quantity(this.quantity);
      //   let orderDetails: OrderDetails = new OrderDetails(this.order,this.quantity.value,product);
      this.orderService
        .addOrderDetails(this.order.id!, product.id, quantityObject)
        .subscribe((x) => {
         // this.newOrderDetails.emit(x);
        });
    }

    //this.newOrderDetails.emit(this.orderDetails);
  }
  // getOrder() {
  //   this.orderService.getOrder(this.orderId).subscribe((x) => {
  //     this.order = x;
  //   });
  // }
}
