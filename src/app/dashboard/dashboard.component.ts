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
    for (var i=0;i<res.length;i++){
    res[i].totalAmount = (res[i].bidValue*res[i].clicks)/100
    console.log(res)
    }
    console.log(res)
  this.resp=res
  })
  }

  logout(){
    console.log("logout successfully")
    this.AuthService.logout();
    this.router.navigate(['/login']);
  }
  redeems(totalclicks,totalAmount,targetClicks,short_url){
    console.log("Inside Redeem function")
    console.log(totalAmount,targetClicks,short_url)
    if (totalclicks==targetClicks ){
      let email = localStorage.getItem('email');
      this.DashboardService.redeem(totalclicks,totalAmount,targetClicks,short_url,email).subscribe(res =>{
        this.resp=res
      })
    }
    else{

    }

  }
}
