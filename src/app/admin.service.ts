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
    PostTask(url : String,assigned_to:String){
        let ipurl = this.BASE_URL+'admin/'+'task';
        
        let body  = JSON.stringify(url);
        let dataString = "url="+body+"&"+"assigned_to="+assigned_to;
        
        let headers = new Headers({ 'Content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
    
        return this.http.post(ipurl, dataString,options)
          .map((res:Response) => res.json())
          .catch(this.handleError);
      }
 
}

