import { Component, OnInit } from '@angular/core';
import { AuthService } from '..';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styles: [
    `
      a {
        padding-left: 10px;
        padding-right: 5px;
      }
    `,
  ],
})
export class NavBarComponent implements OnInit {
  onSignOut() {
    console.log('User wants to log out');
  }
  isLoggedIn: boolean = false;
  firstName: string = undefined;
  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    const isLoggedIn = this.authService.isAuthenticated();
    this.isLoggedIn = isLoggedIn;
    if (isLoggedIn) {
      this.firstName = this.authService.getUserInfo().firstName;
    }
  }
}
