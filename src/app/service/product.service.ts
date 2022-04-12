import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:8080/product';
  constructor(private http: HttpClient) {}

  addproduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url,product);
  }
  getproducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}s`);
  }
}
