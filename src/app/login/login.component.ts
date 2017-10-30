import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService : AuthService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.authenticationService.getIsLoggedIn() && localStorage.getItem("role") == "user"  ){
      this.router.navigate(['/dashboard']);
    }
    else if(this.authenticationService.getIsLoggedIn() && localStorage.getItem("role") == "admin"  ){
      this.router.navigate(['/admin']);
    }
  }
  email:any;
  password:any;
  login(){
    this.authenticationService.login(this.email,this.password).subscribe(res =>{
      if(res.status=="success" && res.user.user.role=="user"){
        this.authenticationService.setIsLoggedIn(true);
        console.log("login  succesfull");
        let token = res.token;
        let email = res.user.user.email
        let role = res.user.user.role
        localStorage.setItem("role",role)
        localStorage.setItem("email",email);
        localStorage.setItem("token",token);
        this.router.navigate(['/dashboard']);
        
      }
      else if(res.status=="success" && res.user.user.role=="admin"){
        this.authenticationService.setIsLoggedIn(true);
        let role = res.user.user.role
        localStorage.setItem("role",role)
        let token = res.token;
        let email = res.user.user.email
        localStorage.setItem("email",email);
        this.router.navigate(['/admin']);

      }  
      else if(res.status=='failed' || res.status=='Unauthorised' ){
        alert(res.message)
      }  
    })
  }
}
