import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

	private webservice: string
	constructor(private _http: HttpClient) {
		this.webservice = `${environment.api}${environment.endpoint}/sala`
  	}

	buscarSalas(){
		return this._http.get(this.webservice)
	}
}
