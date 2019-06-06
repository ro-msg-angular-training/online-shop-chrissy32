import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(id: number, credentials: any, callback: any) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.user + ':' + credentials.password)
    } : {});

    this.http.get('http://localhost:8080/products/' + id, { headers: headers }).subscribe(response => {
      if (response) {
        localStorage.setItem('user', JSON.stringify(credentials));
      }
      return callback && callback();
    });

  }
}
