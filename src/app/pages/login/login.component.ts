import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private userService:ServiceService)
  {

  }
  ngOnInit(): void {
    
  }
  public user ={
    username:'',
    password:''
  };

  onLogin(){


    console.log(this.user)
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
