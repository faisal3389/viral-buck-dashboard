import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service';
import { ActivatedRoute,Router } from '@angular/router';
import {AuthService} from '../auth.service'


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    private AdminService : AdminService,
    private router : Router,
    private AuthService : AuthService,
    
  ) { }
  
  url :any;
  assigned_to:any;
  responseadminpost:Object;
  ngOnInit() {
    if(!this.AuthService.getIsLoggedIn()){
      this.router.navigate(['/login']);
      return;
    }
  }
  generateLink(){
    this.AdminService.PostTask(this.url,this.assigned_to)
    .subscribe(res=>{
      this.responseadminpost=res;
      if (res.status=='success'){
      console.log(res)
      alert("Task Posted Successfully")
      }
      else if(res.status=='failed'){
        alert(res.message)
      }
    })
    console.log("Inside generate Link")
    
  }
  
  logout(){
    console.log("logout successfully")
    this.AuthService.logout();
    this.router.navigate(['/login']);
  }
}
