import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private authenticationService : AuthService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  email:any;
  forgot(){
    this.authenticationService.forgotPassword(this.email).subscribe(res =>{
      if(res && res.status == 'failed'){
        alert(res.message);
        }
        else if(res && res.status == 'success'){
          console.log("Email sent successfully")
          alert("Please check your Email to Reset Password");
          this.router.navigate(['/reset']);
        }
    })
  }
}
