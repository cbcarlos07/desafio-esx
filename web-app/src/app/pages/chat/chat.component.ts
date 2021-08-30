import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { ConversasService } from 'src/app/service/conversas.service';
import { SalaChatService } from 'src/app/service/sala-chat.service';
import { SalaService } from 'src/app/service/sala.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../login/usuario.interface';
import { ConversaSala } from './conversa-sala/conversa-sala.model';
import { Sala } from './conversa-sala/sala.model';
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
	private salas: Usuario[] = []
	private sala: Sala
	private conversaSalaLista: ConversaSala[] = []
	constructor(private usuarioService: UsuarioService,
				private conversasService: ConversasService,
				private chatService: ChatService,
				private salaService: SalaService,
				private salaChatService: SalaChatService
		) { }

	ngOnInit() {
		this.buscarUsuarios()
		this.buscarConversar()
		this.listarSalas()
		this.escutaParaPesquisa()
		this.escutaParaPesquisaSala()
		this.notificacaoRealtime()
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
		
		
		this.sala = null
		if( this.usuario.idConversa ){
			const usuario = Number(localStorage.getItem('id'))
			this.chatService
				.buscarConversar(this.usuario.idConversa, usuario)
				.subscribe((response: Chat[])=>{
					this.chatLista = response
				})
		}
	}

	acionarChatSala(item: Sala, mudarDeSala = true){
		this.usuario = null
		this.sala = item
		
		
		this.salaChatService
				.buscarConversa(item.id)
				.subscribe((response: ConversaSala[])=>{
					this.conversaSalaLista = response
					
					if( mudarDeSala ){
						this.salaChatService.mudarDeSala()
					}
				})

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
				const { idConversa, idUsuarioDestino, idUsuarioRemetente } = response
				
				const idAtual = Number(localStorage.getItem('id'))
				const usuario: Usuario = {
					idConversa: idConversa,
					id: idUsuarioDestino == idAtual ? idUsuarioRemetente : idUsuarioDestino
				}
				
				
				this.buscarConversar()
				this.acionarChat( usuario )
			})
	}
	escutaParaPesquisaSala(){
		this.salaChatService
			.novaMensagemSala
			.subscribe((response: any)=>{
				const { idSala, nome } = response
				
				
				const sala: Sala = {
					id: idSala, nome
				}
				this.acionarChatSala( sala, false )
			})
	}

	listarSalas(){
		this.salaService
			.buscarSalas()
			.subscribe((response: Sala[])=>{
				this.salas = response.map(sala => {
					return {
						nome: sala.nome,
						id: sala.id
					}
				})
			})
	}

	notificacaoRealtime(){
		this.chatService
			.notificacaoRealtime()
			.subscribe((response: any)=>{
				this.buscarConversar()
			})
	}

	
	
	

	

}
