import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  constructor(
    private DashboardService : DashboardService,
  ) { }

  ngOnInit() {
    this.dashboard()
  }

  dashboard(){
  let email = localStorage.getItem('email');
  this.DashboardService.dashboard(email).subscribe(res =>{
    console.log(res)
  
  })
  }
}
