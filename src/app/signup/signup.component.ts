import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authenticationService : AuthService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  email:any;
  phone:any;
  password:any;
  confirmpassword: any;
  referral:any;
 

  _isFormValid(){
    if(!this.email || this.email == ""){
        return false;
    }
    if(!this.phone || this.phone == ""){
    		return false;
    } 
      	if(!this.password || this.password == ""){
    		return false;
    }
    if(!this.confirmpassword || this.confirmpassword == ""){
        return false;
    } 
    return true;
}
ValidateEmail()  
{  
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
  return this.email.match(mailformat) ? true : false; 
}
signUp(){
  if(!this._isFormValid()){
    alert("Please fill required fields");
    return;
}
  this.authenticationService.signUp(this.email,this.phone,this.password,this.confirmpassword,this.referral).subscribe(res =>{
    
    if(res){
      console.log("signup  succesfull");
              this.router.navigate(['/login']);
    }
  }) 
}
}
