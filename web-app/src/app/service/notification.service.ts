import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
	notifier = new EventEmitter()
	
  	constructor() { }

	notify(obj: any){
		this.notifier.emit( obj )
	}
}
