import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
loginType:any;
  constructor(private router:Router) {
   
   }

  ngOnInit(): void {
  }
 public toRequestor(){


    this.router.navigate(['/requestor'],{state:{data:2}})


}
public toProvider(){
 
  this.router.navigate(['/login'],{state:{data:1}})

}
public toValidator(){
  this.router.navigateByUrl('/login')

}
public toVolunteer(){
  this.router.navigate(['/signup'],{state:{data:3}})

}

}
