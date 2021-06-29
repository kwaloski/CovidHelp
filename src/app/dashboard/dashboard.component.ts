import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
type:any;
user:any;
  constructor(private router: Router,
    public socialAuthServive: SocialAuthService,private app:AppComponent) {
     this.user=app.currentUser;
     
     }

  ngOnInit(): void {
    console.log(this.type);
  }
  logout(): void {
    // this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
    this.app.login=false;
    this.router.navigateByUrl('/login')
  }

}
