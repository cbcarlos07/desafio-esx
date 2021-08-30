import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ConversaSala } from '../pages/chat/conversa-sala/conversa-sala.model';
import * as io from 'socket.io-client'
@Injectable({
  providedIn: 'root'
})
export class SalaChatService {
	
	private socket
    private webservice: string
	notifySala = new EventEmitter()
	novaMensagemSala = new EventEmitter()
    constructor(private _http: HttpClient) {
		this.socket = io( environment.api )
      	this.webservice = `${environment.api}${environment.endpoint}/conversa-sala`
    }

    buscarConversa(id: number){
      return this._http.get(`${this.webservice}/${id}`)
    }

	salvarConversa(conversa: ConversaSala){
		return this._http.post( this.webservice, conversa )
	}

	mudarDeSala(){
		this.notifySala.emit()
	}

	notificacaoRealtime(){
		return new Observable( observer =>{
		  	this.socket.on('sala', msg =>{  
				observer.next(msg)
		  	})
	
		})
	}

	emitPesquisa(response: any) {
		this.novaMensagemSala.emit(response)
	}
}
