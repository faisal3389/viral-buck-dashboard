import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationCancel, RoutesRecognized, Event } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './../auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  previousUrl : string ;

  CANCELED_ROUTE : string = "canceled-route" ;

  public canceledUrl;
  constructor(private _userService:AuthService, private _router:Router){
    _router.events.subscribe(e => {
      if(e instanceof NavigationCancel){
        console.log(e.url);
        localStorage.setItem(this.CANCELED_ROUTE,e.url);
      }
    })
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this._userService.getIsLoggedIn() && localStorage.getItem("role") == "admin"){
      console.log("inside Router Activate function ");
      return true;
    }
    else{
      this._router.navigate(['login'],{queryParams : { returnUrl: state.url }});
    }
    return false;
  }

  routeStorage(next: ActivatedRouteSnapshot,  state: RouterStateSnapshot){
    console.log(ActivatedRouteSnapshot);
    return true
  }

}
