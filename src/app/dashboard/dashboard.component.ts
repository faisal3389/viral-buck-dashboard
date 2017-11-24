import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'
import { ActivatedRoute,Router } from '@angular/router';
import {AuthService} from '../auth.service'
import { ClipboardModule } from 'ng2-clipboard';
import {ClipboardService} from '../clipboard.service';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService,AuthService]
})
export class DashboardComponent implements OnInit {
  
  resp:any;
  elRef: any;
  constructor(
    private DashboardService : DashboardService,
    private router : Router,
    private AuthService : AuthService,
   private clipboard:ClipboardService,
   private elementRef: ElementRef
  ) { }

  @ViewChild('socalshare') el:ElementRef;
  
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
       res[i].totalAmount = (res[i].bidValue*res[i].clicks)/100;
      }
      this.resp=res
    })
  }

  logout(){
    console.log("logout successfully")
    this.AuthService.logout();
    this.router.navigate(['/login']);
  }

  copyToClipboard(urlLink) {
     this.clipboard.copy(urlLink);
  }

}
