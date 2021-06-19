import { ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
   

  location:any

  
  ngOnInit() {
    
  }
 
  navbarOpen = false;
  title = 'Verified Covid Help';

constructor(public matDialog: MatDialog,private elementRef: ElementRef) {
this.openModal();
console.log(this.location);
}
ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'pearl';
}
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "350px";
    
    
     this.location =this.matDialog.open(ModalComponent, dialogConfig).componentInstance.location;
     
    
  }
  
  
  
  
  
  
 



}