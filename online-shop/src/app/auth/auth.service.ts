import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login() {
    if (localStorage.getItem('user')) {
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
