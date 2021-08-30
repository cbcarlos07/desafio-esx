import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { ConversasService } from 'src/app/service/conversas.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../login/usuario.interface';
import { Chat } from './conversa/chat.model';
import { Conversa } from './convesa.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	
	private usuarios: Usuario[] = []
	private usuariosConversa: Usuario[] = []
	private usuario: Usuario
	private chatLista: Chat[] = []
	constructor(private usuarioService: UsuarioService,
				private conversasService: ConversasService,
				private chatService: ChatService

		) { }

	ngOnInit() {
		this.buscarUsuarios()
		this.buscarConversar()
		
		this.escutaParaPesquisa()
		
	}

	buscarUsuarios(){
		this.usuarioService
			.getAll()
			.subscribe((response: Usuario[])=>{
				this.usuarios = response				
			})
	}

	acionarChat(item: Usuario){
		this.usuario = item	
		if( this.usuario.idConversa ){
			const usuario = Number(localStorage.getItem('id'))
			this.chatService
				.buscarConversar(this.usuario.idConversa, usuario)
				.subscribe((response: Chat[])=>{
					this.chatLista = response
				})
		}
	}

	buscarConversar(){
		this.conversasService
			.buscarConversas()
			.subscribe((response: Conversa[])=>{
				this.usuariosConversa = response.map((conversa: Conversa)=>{
					const usuario = Number(localStorage.getItem('id')) == conversa.usuarioRemetente
										? conversa._usuario_destino
										: conversa._usuario_remetente
					usuario.idConversa = conversa.id					
					return usuario
				})
				
			})
	}

	escutaParaPesquisa(){
		this.chatService
			.novaMensagem
			.subscribe((response: any)=>{
				const { idConversa } = response
				const usuario: Usuario = {
					idConversa: idConversa
				}
				this.acionarChat( usuario )
			})
	}

	
	
	

	

}
