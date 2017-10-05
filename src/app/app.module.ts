import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {mainRouterModule} from './app.route'
import {AdminService} from './admin.service'
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    mainRouterModule,
    HttpModule,
    FormsModule
    
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
