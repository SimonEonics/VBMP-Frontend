import { HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserJwtControllerService, LoginVM, JWTToken } from '@api';
import { tap } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string;
  password: string;

  constructor(private userService:ServiceService, private readonly loginService : UserJwtControllerService)
  {

  }
  ngOnInit(): void {

  }


  onLogin(){

    const request = {
      username: this.username,
      password: this.password
    } as LoginVM

    console.log(this.username);
    console.log(this.password);
    const header : Object = {httpHeaderAccept : 'application/json', context: <HttpContext>null};

    const foo = this.loginService.authorize(request,"body",false,header)
    // const foo = this.loginService.authorize(request)
      .pipe(tap(x =>
        {
          console.log(typeof x);
          console.log(x);
          console.log(x.id_token);
        }))
      .subscribe(y => {
        console.log(y);
      });

 /*    this.userService.addUser(this.user).subscribe(
      (data) => {
       console.log(data)
      },
      (error) =>
      {
        console.log(error)
        alert('something went wrong')
      }
    )*/

  }

}
