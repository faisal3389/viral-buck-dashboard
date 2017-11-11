import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private authenticationService : AuthService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  email:any;
  otp:any;
  newpassword:any;
  reset(){
    this.authenticationService.resetPassword(this.email,this.otp,this.newpassword ).subscribe(res =>{
      if(res){
      console.log("Password Reset successfully")
      alert("Reset Password Successfully");
      this.router.navigate(['/login']);
        }
    })
  }
}
