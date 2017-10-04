import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {mainRouterModule} from './app.route'

import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    mainRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
