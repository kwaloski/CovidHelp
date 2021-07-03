import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';

import { ApproveRequest } from '../Request.Model/approve.request';
import { UnApprovedUser } from '../Request.Model/getUnapprovedUser';

import { ServiceService } from '../Service/service.service';
@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {
//  listOfProvider:Provider[]=[];
// listOfRequestor:Requestor[]=[];
supplierList:UnApprovedUser[]=[];
VolunteerList:UnApprovedUser[]=[];


  constructor(private service:ServiceService,private app:AppComponent) {
    
    service.getUnApproveUser(1).subscribe({
         next: data => { console.log(data);this.VolunteerList=data }
        , error: error => { console.log(error) }
      });
    // service.getUnapprovedUser(1).subscribe({
    //     next: data => { console.log(data);this.VolunteerList=data }
    //    , error: error => { console.log(error) }
    //  });
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
      next: data => { console.log(data)}
     , error: error => { console.log(error);this.getUnapprovedList() }
   });
    
  }

getUnapprovedList(){
  // this.selectedList=Providers;
  this.service.getUnApproveUser(1).subscribe({
    next: data => { console.log(data);this.VolunteerList=data }
   , error: error => { console.log(error) }
 });


}
getSuppliers(){
 
}
}
