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
  ValidateEmail(){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    return this.email.match(mailformat) ? true : false; 
  }
  signUp(){
    if(!this._isFormValid()){
      alert("Please fill required fields");
      return;
    }
    else{
      this.authenticationService.signUp(this.email,this.phone,this.password,this.confirmpassword).subscribe(res =>{
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
          alert("Password and conform were not same");
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
}
