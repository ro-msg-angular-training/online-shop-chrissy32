import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Supplier } from '../supplier';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories: Category[];
  suppliers: Supplier[];

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService) { }

  ngOnInit() {
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
}
