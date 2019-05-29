import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client-side error
      console.error('An error occurred:', error.error.message);

    } else {
      // server-side error
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    return throwError('Something happened; please try again later.');
  };

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(catchError(this.handleError));
  }

  getProduct(id: number): Observable<Product> {
    const productUrl = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(productUrl)
      .pipe(catchError(this.handleError));

  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<Product> {
    const productUrl = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(productUrl)
      .pipe(catchError(this.handleError));
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.productsUrl, product, httpOptions)
      .pipe(catchError(this.handleError));

  }
}
