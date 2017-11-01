import { Injectable } from '@angular/core';
import {baseUrl} from './constants';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Jsonp, Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AdminService {
    constructor( private http:Http){}
    
    BASE_URL = baseUrl;
    private handleError(error:any){
        return Observable.throw(error.json().error||'Server error');
    }
    _getRequestOptionsWithBearer(){
        let token=localStorage.getItem("token");
        let headers = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
        }); 
    
    
        if(!(token == undefined || token == null || token == "")){
            headers = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' +token
            });
        }
        return new RequestOptions({ headers: headers });
    }

    PostTask(url : String,assigned_to:String,bidValue:Number){
        let ipurl = this.BASE_URL+'admin';
        
        let dataString = "url="+url+"&"+"assigned_to="+assigned_to+"&"+"bidValue="+bidValue;
        
        let headers = new Headers({ 'Content-type': 'application/json' });
        let options = this._getRequestOptionsWithBearer();
    
        return this.http.post(ipurl, dataString,options)
          .map((res:Response) => res.json())
          .catch(this.handleError);
      }
 
}

