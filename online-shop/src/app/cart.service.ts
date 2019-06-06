import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { ProductQuantity } from './productQuantity';
import { Address } from './address';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order';
import { ProductidQuantity } from './productidQuantity';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: ProductQuantity[] = [];
  orderUrl = 'http://localhost:8080/orders';
  orders: Order[];

  constructor(private http: HttpClient) { }

  getCartProducts(): Observable<ProductQuantity[]> {
    return of(this.cartProducts);
  }

  save(product: Product): Observable<ProductQuantity> {
    let pq = new ProductQuantity(product, 1);
    this.cartProducts.push(pq);
    return of(pq);
  }

  decreaseQuantity(product: ProductQuantity): Observable<ProductQuantity[]> {
    product.setQuantity(product.quantity - 1);
    return of(this.cartProducts);
  }

  increaseQuantity(product: ProductQuantity): Observable<ProductQuantity[]> {
    product.setQuantity(product.quantity + 1);
    return of(this.cartProducts);
  }

  removeFromCart(product: ProductQuantity): Observable<ProductQuantity[]> {
    const index = this.cartProducts.indexOf(product);

    if (index !== -1) {
      this.cartProducts.splice(index, 1);
    }

    return of(this.cartProducts);
  }

  placeOrder(address: Address) {
    let orderProducts: ProductidQuantity[] = [];

    this.cartProducts.forEach(product => {
      let orderProduct = new ProductidQuantity(product.product.id, product.quantity);
      orderProducts.push(orderProduct);
    });

    let order = new Order(address, orderProducts);
    this.cartProducts = [];
    console.log(order);
    this.http.post<Order>(this.orderUrl, order).subscribe();
  }
}
