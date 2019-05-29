import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.productService.delete(id)
      .subscribe(product => this.product = product);

    // this.router.navigate(['/products']);
  }

  update(name: string, description: string, price: any, weight: any, category: number, supplier: number, imageURL: string, categoryName: string,
    categoryDescription: string): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.productService.update({ id, name, description, price, weight, category, supplier, imageURL, categoryName, 
      categoryDescription } as Product)
      .subscribe(product => this.product = product);

      window.location.reload();
  }

}