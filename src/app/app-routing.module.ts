import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProviderComponent } from './provider/provider.component';
import { RequestorComponent } from './requestor/requestor.component';
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
    path: 'provider',
    component:ProviderComponent
  },{
    path: 'validator',
    component:ValidatorComponent
  },
  {
    path: '**',
    redirectTo: 'requestor'
  }
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
