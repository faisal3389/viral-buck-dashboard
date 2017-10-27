import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service'
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    private AdminService : AdminService
  ) { }
  
  url :any;
  assigned_to:any;
  responseadminpost:Object;
  ngOnInit() {
  }
  generateLink(){
    this.AdminService.PostTask(this.url,this.assigned_to)
    .subscribe(res=>{
      this.responseadminpost=res;
      console.log(res)
    })
    console.log("Inside generate Link")
    
  }
}
