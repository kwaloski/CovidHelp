import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { Requestors } from '../mockRequestor';
import { SendOtp } from '../Request.Model/sendOtp.request';
import { User } from '../user';
import { VerifyOtp } from '../Request.Model/verifyOtp.request';
import { VerifyOtpResponse } from '../Response.Model/verifyOtp.response';

import { AddSupplyCategory } from '../Request.Model/addSupplyCategory.request';
import { AddSupply } from '../Request.Model/addSupply.request.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

signUpURL:string="https://covidverifiedhelp.azurewebsites.net/api/v1/Signup";
Url:string="https://covidverifiedhelp.azurewebsites.net/api/v1/";
sendOTPUrl:string="https://communicationservice20201217175238.azurewebsites.net/api/SendOTP?code=3ydeWoUHJO8akCUi3yBa6IxbR4wt/AkVHfeyA0XuuOYYAlBHhtIdKQ==";
verifyOTPUrl="https://communicationservice20201217175238.azurewebsites.net/api/VerifyOTP?code=64zofYmdUyTXMRxOGHj8sE5kISutU1OwTDz5Zmc4fufWaziQLwjwTA==";
  constructor(public http:HttpClient) { 
    
  }
getUserByPhone(phone:string):Observable<any>
{
  return this.http.get(`${this.Url}Login?phone=${phone}`)
}
  requesterSignUp(user:User):Observable<any>
  {
 return this.http.post(this.signUpURL,user);
  }

  sendOTP(request:SendOtp):Observable<any>
  {

return this.http.post(this.sendOTPUrl,request);
  }
  verifyOTP(request:VerifyOtp):Observable<any>
  {
    return this.http.post(this.verifyOTPUrl,request);
  }
  getSupplyCategory():Observable<any>
  {

    return this.http.get(`${this.Url}GetSupplyCategory`);
  }
  addSupplyCategory(request:AddSupplyCategory):Observable<any>
  {
    return this.http.post(`${this.Url}AddSupplyCategory`,request);
  }
  addSupply(request:AddSupply):Observable<any>
  {
    return this.http.post(`${this.Url}Supply`,request);
  }
  getSupply():Observable<any>
  {
    return this.http.get(`${this.Url}Supply`);
  }
  getProviderSupply(request:any):Observable<any>
  {
    return this.http.get(`${this.Url}ProviderSupply`);
  }
  getSupplyByLocation(request:any):Observable<any>
  {
    return this.http.post(`${this.Url}LocationSupply`,request);
  }
  addSupplyStats(request:any):Observable<any>
  {
    return this.http.post(`${this.Url}SupplyStats`,request);
  }
  getSupplyStats(providerId:string):Observable<any>
  {
    return this.http.get(`${this.Url}SupplyStats?providerId=${providerId}`);
  }
  getAverageRating(request:any):Observable<any>
  {
    return this.http.get(`${this.Url}AverageRating`);
  }

}
