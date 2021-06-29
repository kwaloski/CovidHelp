import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { signUpResponse } from '../Response.Model/signUp.response';
import { ServiceService } from '../Service/service.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:any;
response:any;
  constructor(app:AppComponent,private route:Router,private service:ServiceService) { 
    this.response=new signUpResponse();
    this.user=new User();
    this.user.userTypeId=history.state.data;
    console.log(this.user.userTypeId);
    this.user.longitude=app.location[1];
    this.user.latitude=app.location[0];
  
    
  }

  ngOnInit(): void {
  }

  signUpUser(){
    this.user.phone='91'+this.user.phone;
     console.log(this.user)
    this.service.requesterSignUp(this.user).subscribe({
      next: data => { this.response.status = data, console.log(data)}
      , error: error => {this.response.status=error.status; console.log(error.status);this.toLogin() }
    });
    // console.log(this.response);
    // this.toLogin();
  }
  toLogin(){
    if(this.response.status=='200'){
      this.route.navigateByUrl('/login');
      }else {
        alert("Sorry!!!! Try Again")
      }
  }

}
