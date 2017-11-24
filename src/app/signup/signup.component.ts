import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService],
  
})
export class SignupComponent implements OnInit {

  constructor(private authenticationService : AuthService,
    private router : Router,
    private route: ActivatedRoute){ }

  ngOnInit() {
  }
  email:any;
  phoneNumber:any;
  password:any;
  confirmPassword: any;
 
 
  
  _isFormValid(){
    if(!this.email || this.email == ""){
      return false;
  }
  if(!this.phoneNumber || this.phoneNumber == ""){
     return false;
  } 
  if(!this.password || this.password == ""){
   
    return false;
  }
  if(!this.confirmPassword || this.confirmPassword == ""){
      return false;
  }
  
   return true;
}
  /**
   * Validating the email
   */
  ValidateEmail(){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    return this.email.match(mailformat) ? true : false; 
  }
  /**
   * Signup will be starting fro here
   */
  signUp(){
    if(!this._isFormValid()){
      alert("Please Fill Required Fields");
      return;
    }
    this.authenticationService.signUp(this.email,this.phoneNumber,this.password,this.confirmPassword).subscribe(res =>{
      if(this.ValidateEmail() && res.status=='success'){
       alert("user regisration successfull")
       this.router.navigate(['/login']);
      }
      if(this.ValidateEmail()==false){
        alert("Enter a valid Email Id");
      }
      if(this.ValidateEmail()==true && res && res.statusCode == "401"){
        alert("User already registered");
      }
      else if(this.password!== this.confirmPassword){
        alert("Password and Confirm Password Should be Same");
     } 
     else if(res.status !== "success"){
        alert("Signup failed, Please try again");
     }
     else if(!res){
        console.log("API Error");
      }
    })
    
  }
}
