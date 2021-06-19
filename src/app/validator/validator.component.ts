import { Component, OnInit } from '@angular/core';
import { Providers } from '../mockprovider';
import { Requestors } from '../mockRequestor';
import { Provider } from '../provider';
import { Requestor } from '../requestor';
@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {
//  listOfProvider:Provider[]=[];
// listOfRequestor:Requestor[]=[];
selectedList:any;
  constructor() {
    this.selectedList=[];
   }

  ngOnInit(): void {
  }
toRequestor(){
  this.selectedList=Providers;

}
toProvider(){
  this.selectedList=Requestors;
}
}
