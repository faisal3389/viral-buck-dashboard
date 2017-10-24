import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service'
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    private adminService : AdminService
  ) { }
  
  url :String;
  responseadminpost:Object;
  ngOnInit() {
  }
  generateLink(){
    this.adminService.PostTask(this.url)
    .subscribe(res=>{
      this.responseadminpost=res;
    })
    console.log("Inside generate Link")
    
  }
}
