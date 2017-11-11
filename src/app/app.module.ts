import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {mainRouterModule} from './app.route'
import {AdminService} from './admin.service'
import {AuthService} from './auth.service'
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ClipboardModule } from 'ngx-clipboard';


import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    SignupComponent,
    LoginComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    mainRouterModule,
    HttpModule,
    FormsModule,
    ClipboardModule
    
  ],
  providers: [AdminService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
