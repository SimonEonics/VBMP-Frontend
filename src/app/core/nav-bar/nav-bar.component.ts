import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '..';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styles: [],
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean = false;
  firstName: string = undefined;
  constructor(private readonly authService: AuthorizationService) {}

  ngOnInit(): void {
    const isLoggedIn = this.authService.isAuthenticated();
    this.isLoggedIn = isLoggedIn;
    if (isLoggedIn) {
      this.firstName = this.authService.getUserInfo().firstName;
    }
  }
}
