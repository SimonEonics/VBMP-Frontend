import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
    `
      .full-width {
        width: 100%;
      }
    `,
  ],
})
export class SignupComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };

  dataSubmit() {
    console.log('User wants to create account');
  }
}
