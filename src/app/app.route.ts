import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent} from './admin-page/admin-page.component'
import { NgModule }      from '@angular/core';

export const mainRouter: Routes = [
    { path: 'short', component: AdminPageComponent },
    
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        mainRouter,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
    exports: [RouterModule]
    
  })
  export class mainRouterModule { }