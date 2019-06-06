import { Component, OnInit, Injectable } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ProductQuantity } from '../productQuantity';
import { Router } from '@angular/router';
import { Address } from '../address';
import { Order } from '../order';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  // cartProducts: Product[] = [];
  cartProducts: ProductQuantity[] = [];

  constructor(private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts(): void {
    this.cartService.getCartProducts()
      .subscribe(cartProducts => this.cartProducts = cartProducts);
  }

  save(product: Product): void {
    this.cartService.save(product)
      .subscribe(product => this.cartProducts.push(product))
  }

  decreaseQuantity(product: ProductQuantity): void {
    this.cartService.decreaseQuantity(product)
      .subscribe(cartProducts => this.cartProducts = cartProducts);
  }

  increaseQuantity(product: ProductQuantity): void {
    this.cartService.increaseQuantity(product)
      .subscribe(cartProducts => this.cartProducts = cartProducts);
  }

  removeFromCart(product: ProductQuantity): void {
    if (confirm("Are you sure you wish to remove this item from cart?")) {
      this.cartService.removeFromCart(product)
        .subscribe(cartProducts => this.cartProducts = cartProducts);
    }
  }

  navigate(): void {
    this.router.navigateByUrl("order-info");
  }

}
