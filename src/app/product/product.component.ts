import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Order, Quantity } from '../model/Order';
import { OrderDetails } from '../model/OrderDetails';
import { Product } from '../model/Product';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  quantity = new FormControl('', Validators.required);
  addForm: FormGroup = new FormGroup({
    product_name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  @Output() newOrderDetails = new EventEmitter<OrderDetails>();
  order: Order | undefined;

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.getproducts();
  }

  addNewOrderDetails(product: Product, quantity: number): void {
   console.log("Product: " + product.product_name+ " quantity: " + quantity);
  let quantityObject = new Quantity(this.quantity.value);
   let orderDetails = new OrderDetails(this.order!, this.quantity.value,product);
  
    this.orderService
      .addOrderDetails(this.order!.id!, product.id, quantityObject)
      .subscribe((x) => {
        console.log("OrderDetails added:"+"Order: "+this.order!.customer_name +"quantity: "+quantityObject.quantity+ "product: "+product.product_name);
        
        this.newOrderDetails.emit(x);
      });
  }
  addOrder(data: any) {
    this.order = data;
  }

  getproducts() {
    this.productService.getproducts().subscribe((x) => {
      this.products = x;
    });
  }
  save() {
    let product = this.addForm.value;
    this.productService.addproduct(product).subscribe((x) => {
      console.log('Product added');

      this.getproducts();
    });
  }
}
