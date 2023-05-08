import { Component, OnInit } from '@angular/core';

import { AuthService } from '@core/index';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginSuccessful: boolean = true;

  constructor(
    private authService: AuthService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {}

  onLogin() {
    this.authService
      .login(this.username, this.password)
      .pipe(
        tap((isSuccess) => {
          this.loginSuccessful = isSuccess;
          this.router.navigate(['/']);
        })
      )
      .subscribe();
  }
}
