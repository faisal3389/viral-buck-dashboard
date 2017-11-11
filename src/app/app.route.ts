import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent} from './admin-page/admin-page.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { SignupComponent} from './signup/signup.component';
import { LoginComponent} from './login/login.component';
import { ForgotComponent} from './forgot/forgot.component';
import { ResetComponent} from './reset/reset.component';
import { AuthGuard } from './guards/auth.guard';



import { NgModule }      from '@angular/core';

export const mainRouter: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'admin', component: AdminPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot', component: ForgotComponent },
    { path: 'reset', component: ResetComponent },
    { path: 'dashboard', component: DashboardComponent },
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