import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, Quantity } from '../model/Order';
import { OrderDetails } from '../model/OrderDetails';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url = 'http://localhost:8080/order';
  constructor(private http: HttpClient) {}
  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.url, order)
  }

  getOrder(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.url}/${orderId}`)
  }

  addOrderDetails(orderId: number,productId: number,quantity: Quantity): Observable<OrderDetails> {
    return this.http.post<OrderDetails>(`${this.url}/${orderId}/product/${productId}`,quantity)
  }
}
