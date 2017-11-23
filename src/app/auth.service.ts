import { Injectable } from '@angular/core';
import {baseUrl} from './constants';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Jsonp, Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
    private isLoggedIn: boolean;
    
    constructor( private http:Http){}
    
    BASE_URL = baseUrl;
    private handleError(error:any){
        return Observable.throw(error.json().error||'Server error');
    }
   
  signUp(email,phoneNumber,password){
       let data = { 
        "email":email,
        "phoneNumber":phoneNumber,
        "password":password
    }
    let dataString = "email="+email+"&"+"phoneNumber="+phoneNumber+"&"+"password="+password;
    let url = this.BASE_URL+'signup';
    // let bodyString = JSON.stringify(body); 
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, dataString, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json() || 'Server error getting brands'))
  
    }
    login(userName:any,password:any) { 
          let data = { 
            "username":userName,
            "password":password
        }
              let dataString = "username="+userName+"&"+"password="+password;
        let url = this.BASE_URL+'login';
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, dataString, options)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json() || 'Server error getting brands'))
    }
    forgotPassword(email){
        let data = { 
            "email":email
        }
        let dataString = "email="+email;
        let url = this.BASE_URL + 'forgot';
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, dataString, options)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json() || 'Server error getting brands'))
    }
    resetPassword(email:any,otp:any,newpassword:any){
        let data = { 
          "otp":otp,
          "newpassword":newpassword,
          "email":email,
        };
             
        let dataString = "email="+email+"&"+"otp="+otp+"&"+"newpassword="+newpassword;
        let url = this.BASE_URL + 'reset';
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, dataString, options)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json() || 'Server error getting brands'))
    }
    setIsLoggedIn(bool){
        localStorage.setItem("isLoggedIn",bool);    
      }
    logout(){
        console.log("Inside auth service")
        localStorage.removeItem("token",);
        localStorage.removeItem("email",);
        localStorage.removeItem("role",);
            this.setIsLoggedIn(false);
    }
    getIsLoggedIn(){
        return localStorage.getItem("isLoggedIn") === "true"? true:false;
      }
    }
