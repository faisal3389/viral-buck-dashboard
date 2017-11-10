import { Injectable } from '@angular/core';
import {baseUrl} from './constants';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Jsonp, Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DashboardService {
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
    dashboard(email){
     
        let url = this.BASE_URL+'products?email='+email;
        let options = this._getRequestOptionsWithBearer();
        return this.http.get(url,options)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error || 'Server error'))
}

redeem(totalclicks,totalAmount,targetClicks,short_url,email){
    let url = this.BASE_URL+'redeem'
    let dataString = "totalclicks="+totalclicks+"&"+"totalAmount="+totalAmount+"&"+"targetClicks="+targetClicks+"&"+"short_url="+short_url+"&"+"email="+email;
    let options = this._getRequestOptionsWithBearer();
    return this.http.post(url,dataString,options)
.map((res:Response) => res.json())
.catch((error:any) => Observable.throw(error || 'Server error'))

}
//   dashboard(email:any){
//        let data = { 
//         "email":email,
        
//     }
//     let dataString = "email="+email;
//     let url = this.BASE_URL+'dashboard';
//     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, dataString, options)
//       .map((res:Response) => res.json())
//       .catch((error:any) => Observable.throw(error.json() || 'Server error getting brands'))
  
//     }
}
