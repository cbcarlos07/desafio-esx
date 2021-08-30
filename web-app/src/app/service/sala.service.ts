import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sala } from '../pages/chat/conversa-sala/sala.model';

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

	delete(id: any) {
		return this._http.delete( `${this.webservice}/${id}` )
	}

	cadastrar(sala: Sala){
		return this._http.post(this.webservice, sala)
	}

	editar(id: number, sala: Sala){
		return this._http.put(`${this.webservice}/${id}`, sala)
	}

	buscarSala(id: number) {
		return this._http.get(`${this.webservice}/${id}`)
	}
}
