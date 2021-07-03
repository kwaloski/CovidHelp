import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Provider } from '../provider';
import { AddRatingRequest } from '../Request.Model/addRating.request';
import { GetAllRatingResponse } from '../Response.Model/getAllRating.response';
import { GetSupplyResponse } from '../Response.Model/getSupply.response';
import { ServiceService } from '../Service/service.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  provider!: GetSupplyResponse;
  ratings:GetAllRatingResponse[]=[]
  rating:any;
  constructor(private service:ServiceService,private app:AppComponent,public dialog: MatDialog,private router: Router) {
    this.provider=history.state.data;
    this.rating=new AddRatingRequest(this.provider.providerId);
    console.log(app.currentUser);
    this.service.getUserByPhone(this.provider.phone).subscribe({
      next: data => { console.log(data) }
      , error: error => { console.log(error) }
    });
    this.service.getSupplyStats(this.provider.providerId).subscribe({
      next: data => { console.log(this.ratings=data.supplierRecords) }, error: error => { console.log(error) }
    });
   }
  newRating=0
  ngOnInit(): void {
   
    console.log(this.provider);
    
    
  }
  addRating(){
    
   if(this.app.currentUser.userId==null){
    
   this.router.navigateByUrl('/login')

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
     
    // });
   }else{
     this.rating.userId=this.app.currentUser.userId;
    this.service.addSupplyStats(this.rating).subscribe({
      next: data => { console.log(data),this.toRequestor() }, error: error => { console.log(error),this.toRequestor() }
    });
   }
  }
  toRequestor(){
    alert("Thank you for your review!!!!!");
    this.router.navigateByUrl('/requestor');
  }
  getRatings(){
    this.service.getSupplyStats(this.provider.providerId).subscribe({
      next: data => { console.log(this.ratings=data.supplierRecords) }, error: error => { console.log(error) }
    });
  }

}
