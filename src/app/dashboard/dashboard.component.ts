import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { AppComponent } from '../app.component';
import { ApproveRequest } from '../Request.Model/approve.request';
import { UnApprovedUser } from '../Request.Model/getUnapprovedUser';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

VolunteerList:UnApprovedUser[]=[];

  constructor(private router: Router,
    public socialAuthServive: SocialAuthService,private app:AppComponent,private service:ServiceService) {
     
     service.getUnApproveUser(3).subscribe({
      next: data => { console.log(data);this.VolunteerList=data }
     , error: error => { console.log(error) }
   });
     }

  ngOnInit(): void {
   
  }
  updateApprove(user:UnApprovedUser){
    console.log(this.app.currentUser)
    var approve=new ApproveRequest();
    approve.approverId=this.app.currentUser.userId;
    approve.userId=user.id;
  console.log(approve)
    this.service.approveUser(approve).subscribe({
      next: data => { console.log(data);this.getvolunterList()}
     , error: error => { console.log(error) }
   });
    

  }
  getvolunterList(){
    this.service.getUnApproveUser(3).subscribe({
      next: data => { console.log(data);this.VolunteerList=data }
     , error: error => { console.log(error) }
   });
  }
 

}
