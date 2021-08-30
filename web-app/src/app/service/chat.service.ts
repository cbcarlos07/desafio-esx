import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chat } from '../pages/chat/conversa/chat.model';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client'
@Injectable({
  providedIn: 'root'
})
export class ChatService {
	private socket
	private webservice: string
	novaMensagem = new EventEmitter()
  	constructor(private _http: HttpClient) {
		  this.socket = io( environment.api )
		  this.webservice = `${environment.api}${environment.endpoint}/chat`
	   }

	criarConversa(chat: Chat){
		return this._http.post(this.webservice, chat )
	}
	enviarConversa(chat: Chat){
		return this._http.post(`${this.webservice}/chat`, chat )
	}

	buscarConversar(conversa: number, usuario: number){
		return this._http.get(`${this.webservice}?conversa=${conversa}&usuario=${usuario}`)
	}

	notificacaoRealtime(){
		return new Observable( observer =>{
		  	this.socket.on('chat', msg =>{  
				observer.next(msg)
		  	})
	
		})
	}

	emitPesquisa(item){
		this.novaMensagem.emit(item)
	}
	
}
