import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private userService:ServiceService)
  {

  }
  ngOnInit(): void {
    
  }
  public user ={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
  };

  dataSubmit(){

    this.userService.addUser(this.user).subscribe(
      (data) => {
       console.log(data) 
      },
      (error) =>
      {
        console.log(error)
        alert('something went wrong')
      }
    )

  }

}
