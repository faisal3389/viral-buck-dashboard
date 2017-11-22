import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { NotificationService } from '../models/notification.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService],
  
})
export class SignupComponent implements OnInit {

  constructor(private authenticationService : AuthService,
    private router : Router,
    // private _notification: NotificationService,
    private route: ActivatedRoute){ }

  ngOnInit() {
  }
  email:any;
  phone:any;
  password:any;
  confirmpassword: any;
  firstName:any;
  lastName:any;
  dob:any;
 
  
  _isFormValid(){
    if(!this.email || this.email == ""){
      console.log("hai6")
      return false;
  }
  if(!this.phone || this.phone == ""){
    console.log("hai")
     return false;
  } 
  if(!this.password || this.password == ""){
    console.log("hai1")
    return false;
  }
  if(!this.confirmpassword || this.confirmpassword == ""){
    console.log("hai2")
      return false;
  }
  if(!this.firstName || this.firstName == ""){
    console.log("hai3")
    return false;
  } 
  if(!this.lastName || this.lastName == ""){
    console.log("hai4")
    return false;
  } 
   return true;
}
  ValidateEmail(){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    return this.email.match(mailformat) ? true : false; 
  }
  signUp(){
    if(!this._isFormValid()){
      alert("Please Fill Required Fields");
      return;
    }
      this.authenticationService.signUp(this.email,this.phone,this.password,this.dob,this.firstName,this.lastName).subscribe(res =>{
        // console.log("response",res);
        if(this.ValidateEmail() && res.status=='success'){
          console.log("signup  succesfull");
        alert("user regisration successfull")
          // this._notification.notify("User registration successful");
          this.router.navigate(['/login']);
        }
        if(this.ValidateEmail()==false){
        alert("Enter a valid Email Id");
        }
        if(this.ValidateEmail()==true && res && res.statusCode == "401"){
        alert("User already registered");
        }
        else if(this.password!== this.confirmpassword){
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
