
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { SendOtp } from '../Request.Model/sendOtp.request';
import { ServiceService } from '../Service/service.service';
import { VerifyOtp } from '../Request.Model/verifyOtp.request';
import { VerifyOtpResponse } from '../Response.Model/verifyOtp.response';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  sendOtpRequest: any;
  verifyOtpRequest: any;
  requester: any;
  type: number=0;
  response: any;

  constructor(private OAuth: SocialAuthService, private router: Router, private service: ServiceService, private app: AppComponent) {
    this.type = history.state.data;
    this.sendOtpRequest = new SendOtp();
    this.verifyOtpRequest = new VerifyOtp();
    this.response = new VerifyOtpResponse();
    this.app.login=false;
  }

  ngOnInit(): void {
  }

  sendOTP() {
     this.sendOtpRequest.MobileNumber='91'+this.sendOtpRequest.MobileNumber;
    // this.service.sendOTP(this.sendOtpRequest).subscribe({
    //   next: data => { console.log(data) }
    //   , error: error => { console.log(error) }
    // });
   
  this.service.getUserByPhone(this.sendOtpRequest.MobileNumber).subscribe({
      next: data => { this.user = data, console.log(data) }
      , error: error => { console.log(error) }
    });
  

    console.log(this.user);

  }

  loginWithOTP() {
    this.response.message = "OTP verified success";
    this.toRequestor()
    // this.verifyOtpRequest.MobileNumber = this.sendOtpRequest.MobileNumber;
    // this.service.verifyOTP(this.verifyOtpRequest).subscribe({
    //   next: data => { this.response = data, console.log(data),this.toRequestor() }
    //   , error: error => { console.log(error) }
    // });
    //   console.log(this.response);



  }
  toRequestor() {
    if (this.response.message == "OTP verified success" && this.user.userTypeId == 2) {
      this.app.setUser(this.user);
      this.router.navigateByUrl('/requestor')
    } else if (this.response.message == "OTP verified success" && this.user.userTypeId == 1) {
      this.app.setUser(this.user);
      this.router.navigateByUrl('/provider')

    } else if (this.response.message == "OTP verified success" && this.user == null) {
      this.router.navigateByUrl('/signup')
    }else if (this.response.message == "OTP verified success" && this.user.userTypeId ==4 ) {
      this.app.setUser(this.user);
      this.router.navigateByUrl('/validator')
    }
    else {
      alert(this.response.message);
    }
  }


  loginWithGoogle(): void {


    var user = this.OAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => this.router.navigate(['dashboard']));

  }
  checkType(){
if(this.type==0){
  this.type=2;
}
  }

}
