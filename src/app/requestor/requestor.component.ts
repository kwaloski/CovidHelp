import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Providers } from '../mockprovider';
import { Provider } from '../provider';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Requestor } from '../requestor';
import { Requestors } from '../mockRequestor';
import { ServiceService } from '../Service/service.service';
import { SupplyByLocation } from '../Request.Model/supplyByLocation.request';
import { AppComponent } from '../app.component';
import { GetSupplyResponse } from '../Response.Model/getSupply.response';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-requestor',
  templateUrl: './requestor.component.html',
  styleUrls: ['./requestor.component.css']
})



export class RequestorComponent implements OnInit {
  providers: GetSupplyResponse[]=[];
  request: any;
  selectedProvider: any;
  categoryList: any;
  supplyByLocation: any;
  show:boolean=true;
  //supplywithDetails:SupplyWithDetail[]=[]
  constructor(private route: Router, private service: ServiceService, private app: AppComponent,private SpinnerService: NgxSpinnerService ){

    this.service.getSupplyCategory().subscribe({
      next: data => { this.categoryList = data }, error: error => { console.log(error) }
    });
    this.request = new Requestor();
   
    this.supplyByLocation = new SupplyByLocation();
    this.supplyByLocation.latitude = app.location[0];
    this.supplyByLocation.longitude = app.location[1];
    


  }
  ngOnInit(): void {

    this.showSuppliesAs();
    //this.selectedProvider = this.providers
  }
  showSuppliesAs() {
    
    if (this.app.location.length == 0) {
      this.show=false;
       this.SpinnerService.show();  
      this.service.getSupply().subscribe({
        next: data => { this.providers=data;this.selectedProvider=data;console.log(data);this.SpinnerService.hide();     }, error: error => { console.log(error) }
      });
    } else {
      this.SpinnerService.show();  
      this.service.getSupplyByLocation(this.supplyByLocation).subscribe({
        next: data => {this.providers=data; this.providers.forEach(element => {
          element.distance=Number(element.distance.toFixed(1));
        });this.selectedProvider=this.providers.sort((a,b)=>(a.distance<b.distance ?-1:1)); console.log(this.providers);this.SpinnerService.hide();   }, error: error => { console.log(error) }
      });
    }
    

  }
  selectCategory(category:number){
    this.selectedProvider = [];
    for (var p of this.providers) {
          if (p.categoryId == category)
    
         this.selectedProvider.push(p)
       }
    
      // }
    
  }
  // addSupplyDetails(details:[]){
  // for(let i=0;i<details.length;i++){
  //   console.log(details[i]);
  //   this.service.getUserByPhone

  // }
  // }




  
  addRequest() {
    console.log(this.request)
    // this.route.navigate
  }



  // public onSelectOxy() {
  //   this.selectedProvider = [];
  //   for (var p of this.providers) {
  //     if (p.supplies.category == "Oxygen")

  //       this.selectedProvider.push(p)
  //   }

  // }
  // public onSelectBed() {
  //   this.selectedProvider = [];

  //   for (var p of this.providers) {
  //     if (p.supplies.category == "Bed")
  //       this.selectedProvider.push(p);
  //   }
  //   console.log(this.selectedProvider);
  // }
  // public onSelectMed() {
  //   this.selectedProvider = [];

  //   for (var p of this.providers) {
  //     if (p.supplies.category == "Medicine")
  //       this.selectedProvider.push(p);
  //   }

  // }
}
