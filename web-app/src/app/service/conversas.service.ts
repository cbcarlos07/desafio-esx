import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConversasService {
	private webservice: string
  	constructor(private _http: HttpClient) {
		  this.webservice = `${environment.api}${environment.endpoint}/conversa`
	}

	buscarConversas(){
		const id = localStorage.getItem('id')
		return this._http.get(`${this.webservice}/all/${id}`)
	}
}
