import { Component, OnInit } from '@angular/core';
import { UserJwtControllerService, LoginVM, JWTToken } from '@api';
import { AuthorizationService } from '../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string;
  password: string;

  constructor(private authService:AuthorizationService, private readonly loginService : UserJwtControllerService)
  {

  }
  ngOnInit(): void {

  }


  onLogin(){

    const bar = this.authService.login(this.username, this.password).subscribe();
    // .subscribe(x => {
    //   console.log(x);
    // });
  }

}
