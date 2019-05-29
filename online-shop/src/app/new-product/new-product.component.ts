import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private products: ProductsComponent) { }

  ngOnInit() {
  }

  save(name: string, description: string, price: any, weight: any, category: number, supplier: number, imageURL: string, 
    categoryName: string, categoryDescription: string): void {
    this.products.save({ name, description, price, weight, category, supplier, imageURL, 
      categoryName, categoryDescription } as Product);
  }
}
