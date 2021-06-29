import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProviderComponent } from './provider/provider.component';
import { RequestorComponent } from './requestor/requestor.component';
import { ReviewComponent } from './review/review.component';
import { SignupComponent } from './signup/signup.component';
import { ValidatorComponent } from './validator/validator.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'requestor',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component:AboutComponent
    // loadChildren: () =>
    //   import('./features/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'requestor',
    component:RequestorComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },{
    path: 'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'provider',
    component:ProviderComponent
  },{
    path: 'review',
    component:ReviewComponent
  },{
    path: 'validator',
    component:ValidatorComponent
  },{
    path: 'signup',
    component:SignupComponent
  }
  // {
  //   path: '**',
  //   redirectTo: 'requestor'
  // }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
