import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { Category } from '../category';
import { AddSupply } from '../Request.Model/addSupply.request.model';
import { ApproveRequest } from '../Request.Model/approve.request';
import { ApproveSupplyRequest } from '../Request.Model/approveSupply.request';
import { GetSupplyResponse } from '../Response.Model/getSupply.response';
import { ServiceService } from '../Service/service.service';
import { Supplies } from './supplies';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  
  addSupplyRequest: any
  show = false;
  categoryName: any;
  listOfSupplies!:GetSupplyResponse [];
  categoryList!: Category[];
  dialogRef: any;
  constructor(public matDialog: MatDialog, private service: ServiceService, private app: AppComponent) {
    
    this.addSupplyRequest = new AddSupply();
this.service.getProviderSupply(this.app.currentUser.userId).subscribe({
  next: data => { console.log(data) ,this.listOfSupplies=data}, error: error => { console.log(error) }
});

    this.service.getSupplyCategory().subscribe({
      next: data => { console.log(data), this.toCategory(data) }, error: error => { console.log(error) }
    });

  }


  ngOnInit(): void {
    console.log(this.categoryList)

  }
  toCategory(categories: []) {
    this.categoryList = categories;
    console.log(this.categoryList)
  }
  toggle() {
    this.show = true;
  }
  findCategoryId(category: string) {

    this.addSupplyRequest.categoryId = this.categoryList.find(data => category.split('(')[0] == data.name)?.id;

  }
  addSupply() {

    this.show = false;

    this.addSupplyRequest.providerId = this.app.currentUser.userId;

    this.addSupplyRequest.latitude = this.app.currentUser.latitude;
    this.addSupplyRequest.longitude = this.app.currentUser.longitude;
    this.findCategoryId(this.categoryName);
    console.log(this.addSupplyRequest)
    this.service.addSupply(this.addSupplyRequest).subscribe({
      next: data => { console.log(data) }, error: error => { console.log(error),this.getProviderSupply() }
    });
    
  }
  getProviderSupply(){
    this.service.getProviderSupply(this.app.currentUser.userId).subscribe({
      next: data => { console.log(data) ,this.listOfSupplies=data}, error: error => { console.log(error) }
    });

  }
  updateApprove(supply:GetSupplyResponse){
    var approve=new ApproveSupplyRequest();
    approve.approverId=this.app.currentUser.userId;
    approve.supplyId=supply.supplyId;
  console.log(approve)
    this.service.approveSupply(approve).subscribe({
      next: data => { console.log(data)}
     , error: error => { console.log(error) }
   });

  }

}
