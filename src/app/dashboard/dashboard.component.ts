import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'
import { ActivatedRoute,Router } from '@angular/router';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService,AuthService]
})
export class DashboardComponent implements OnInit {

  resp:any;
  constructor(
    private DashboardService : DashboardService,
    private router : Router,
    private AuthService : AuthService,
  ) { }

  ngOnInit() {
    if(!this.AuthService.getIsLoggedIn()){
      this.router.navigate(['/login']);
      return;
    }
    this.dashboard()
  }


  dashboard(){
  let email = localStorage.getItem('email');
  this.DashboardService.dashboard(email).subscribe(res =>{
    console.log(res)
  this.resp=res
  })
  }

  logout(){
    console.log("logout successfully")
    this.AuthService.logout();
    this.router.navigate(['/login']);
  }
}
