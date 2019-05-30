import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  categories: Category[];
  suppliers: Supplier[];

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategories();
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.supplierService.getSuppliers()
      .subscribe(suppliers => this.suppliers = suppliers);
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
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

  // update(name: string, description: string, price: any, weight: any, category: number, supplier: number, imageURL: string, categoryName: string,
  //   categoryDescription: string): void {
  //   const id = +this.route.snapshot.paramMap.get('id');

  //   this.productService.update({
  //     id, name, description, price, weight, category, supplier, imageURL, categoryName,
  //     categoryDescription
  //   } as Product)
  //     .subscribe(product => this.product = product);

  //   window.location.reload();
  // }

  update(form: any): void {
    const id = +this.route.snapshot.paramMap.get('id');

    var formValues = form.value;

    let updatedProduct = new Product(id, formValues.name, formValues.description, formValues.price, formValues.weight,
      formValues.category, formValues.supplier, formValues.imageURL, formValues.categoryName, formValues.categoryDescription);

    this.productService.update(updatedProduct)
      .subscribe(product => this.product = product);
 
    window.location.reload();
  }

}