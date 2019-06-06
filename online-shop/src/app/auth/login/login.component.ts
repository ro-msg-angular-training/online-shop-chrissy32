import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;

  constructor(public authService: AuthService,
    public router: Router,
    private route: ActivatedRoute,
    private userService: UsersService) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'You are currently logged ' + (this.authService.isLoggedIn ? 'in.' : 'out.');
  }

  login(username: any, password: any) {
    var credentials = { user: username, password: password };

    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.login(id, credentials, () => {
      this.router.navigate(['/detail/' + id]);
    });

    // this.message = 'Trying to log in ...';

    // if (username != "chrissy32" && password != "passwd") {
    //   this.message = 'Wrong username or password!';
    // }
    // else {
    //   this.authService.login().subscribe(() => {
    //     this.setMessage();
    //     if (this.authService.isLoggedIn) {
    //       const id = +this.route.snapshot.paramMap.get('id');

    //       let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/detail/' + id;
    //       this.router.navigateByUrl(redirect);

    //     }
    //   });
    // }
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
