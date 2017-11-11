import { Injectable,Inject,OpaqueToken } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { AppNotification } from './appnotification.model';
@Injectable()
export class NotificationService{
       
    private _NOTIFICATION_DURATION = 3;
    public app_notifications: BehaviorSubject<AppNotification> = new BehaviorSubject<AppNotification>(null);
    constructor(){}
    private _getNotificationDuration(){
    return this._NOTIFICATION_DURATION;
    }
    private _show(notification:AppNotification){
    this.app_notifications.next(notification);
    }
    notify(notificationString: string){
    if(notificationString == undefined
       || notificationString == null
       || notificationString == ""){
        return;
    }
    let notification = new AppNotification();
    notification.setText(notificationString);
    notification.setDuration(this._getNotificationDuration());
    notification.toshow = true;
    this._show(notification);
    }
    getNotifications(){
    return this.app_notifications;
    }
    
}
