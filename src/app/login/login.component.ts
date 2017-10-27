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
  }
  email:any;
  password:any;
  login(){
    this.authenticationService.login(this.email,this.password).subscribe(res =>{
      if(res.status=="success" && res.user.user.role=="user"){
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
        let token = res.token;
        let email = res.user.user.email
        localStorage.setItem("email",email);
        this.router.navigate(['/admin']);

      }    
    })
  }
}
