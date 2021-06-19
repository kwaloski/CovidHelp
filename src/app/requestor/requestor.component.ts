import { Component, OnInit } from '@angular/core';
import { Providers } from '../mockprovider';
import{Provider} from '../provider';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-requestor',
  templateUrl: './requestor.component.html',
  styleUrls: ['./requestor.component.css']
})
export class RequestorComponent implements OnInit {
  providors=Providers;
  selectedProvider: Provider[] = [];
 
  categoryList:any=['Oxygen','Plasma','Bed','Medicine']
  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    category: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  
  public onSelectOxy(){
     this.selectedProvider=[];
     for(var p of this.providors){
       if(p.category=="Oxygen")
        this.selectedProvider.push(p);
     }
   
  }
  public onSelectBed(){
     this.selectedProvider=[];
    
    for(var p of this.providors){
      if(p.category=="Bed")
       this.selectedProvider.push(p);
    }
     console.log(this.selectedProvider);
  }
  public onSelectMed(){
    this.selectedProvider=[];
    
    for(var p of this.providors){
      if(p.category=="Medicine")
       this.selectedProvider.push(p);
    }

  }
}
