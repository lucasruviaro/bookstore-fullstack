import { Component } from '@angular/core';
import { User } from './model/user.model';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';
import { Role } from './model/enum.role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-book-seller';

  currentUser: User = new User;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  isAdmin() {
    return this.currentUser?.role === Role.ADMIN;
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }
}
