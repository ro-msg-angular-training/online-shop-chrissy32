import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatListModule, MatSelectModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderComponent } from './order/order.component';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatListModule,
  ReactiveFormsModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductsComponent,
    NewProductComponent,
    PageNotFoundComponent,
    LoginComponent,
    ShoppingCartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    modules
  ],
  exports: [
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
