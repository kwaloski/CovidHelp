import { ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { SupplyByLocation } from './Request.Model/supplyByLocation.request';
import { ServiceService } from './Service/service.service';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
   
  currentUser:any;
  location:any;
  longitude!:number;
supplyByLocation:any;
  
  
 
  navbarOpen = false;
  title = 'Verified Covid Help';

constructor(public matDialog: MatDialog,private elementRef: ElementRef,private router:Router,private service: ServiceService) {
  this.supplyByLocation=new SupplyByLocation();
this.openModal();

  // this.service.getSupplyByLocation(this.supplyByLocation).subscribe({
  //   next: data => {console.log(data)}, error: error => { console.log(error) }
  // });
this.getlocation();
this.currentUser= new User();

}
ngOnInit() {
  
  this.router.navigate(['about'])
}
login=false;

ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'pearl';
  
}
getlocation(){
this.longitude=this.location[0];
  console.log(this.longitude);
}
setUser(user:User){
  
this.currentUser=user;
this.login=true;
}
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "100x";
    dialogConfig.width = "250px";
   
    
    
     this.location =this.matDialog.open(ModalComponent, dialogConfig).componentInstance.location;
     
    
  }
  
  
  
  
  
  
 



}