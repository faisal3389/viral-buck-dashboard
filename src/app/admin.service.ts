import { Injectable } from '@angular/core';
import {baseUrl} from './constants';
import {Observable} from 'rxjs/Rx';
import {
    Jsonp,
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';

@Injectable()
export class AdminService {
    constructor( private http:Http){}
    BASE_URL = baseUrl;
    private handleError(error:any){
        return Observable.throw(error.json().error||'Server error');
    }
    PostTask(url: String){
        // let url =  this.nodeurl+'/products/new';
        let ipurl = this.BASE_URL+'/posturl';
        let body = JSON.stringify( url );
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(ipurl,body, options)
            .map((res:Response) => res.json()) 
            .catch(this.handleError); 
      }
}

// PostTask (url:string){
//     let ipurl = this.BASE_URL+'/posturl';
//     return this.http.get(ipurl)
//         .map((res:Response) => res.json()) 
//         .catch((error:any) => Observable.throw(error || 'Server error'));
//   }
//     getProductFromAsinForProductPage(asin:string){
//     let url =this.nodeurl+'/productasin/'+asin;
//     return this.http.get(url) 
//         .map((res:Response) => res.json()) 
//         .catch((error:any) => Observable.throw(error || 'Server error'));
//   } 
