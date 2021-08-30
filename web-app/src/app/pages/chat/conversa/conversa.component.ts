import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/app/service/chat.service';
import { Usuario } from '../../login/usuario.interface';
import { Chat } from './chat.model';

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.component.html',
  styleUrls: ['./conversa.component.css']
})
export class ConversaComponent implements OnInit, AfterViewChecked {
	@ViewChild('scrollMe',{static: true}) private myScrollContainer: ElementRef;
	@Input() usuario: Usuario
	@Input() chats: Chat[]
	form: FormGroup
	@Input() title: string = 'Chat'
	constructor(private _chatService: ChatService) { }
	ngAfterViewChecked(): void {
		this.scrollToBottom()
	}

	ngOnInit() {
		this.escutarChat()
		this.form = new FormGroup({
			mensagem: new FormControl('', {validators: [Validators.required]})
		})

		this.scrollToBottom()



	}

	usuarioLogado(){
		return Number(localStorage.getItem('id'))
	}

	retornarNome(chat: Chat){
		console.log('idUsuarioRemetente',chat.idUsuarioRemetente);
		console.log('logado',this.usuarioLogado());
		
		return chat.idUsuarioRemetente == this.usuarioLogado()
				? chat._usuario_remetente.nome
				: chat._usuario_destino.nome

		
	}
	retornarDestino(chat: Chat){
		return chat.idUsuarioRemetente == this.usuarioLogado()
				? true
				: false

		
	}

	enviar(){
		if(this.usuario.idConversa){
			this.enviarConversa()
		}else{
			this.criarConversa()
		}
	}

	criarConversa(){
		const conversa: Chat = {
			mensagem: this.form.value.mensagem,
			idUsuarioRemetente: Number(localStorage.getItem('id')),
			idUsuarioDestino: this.usuario.id
		}
		this._chatService
			.criarConversa( conversa )
			.subscribe((response: any)=>{
				console.log('conversa enviada', response);
				
			})


	}

	enviarConversa(){
		const conversa: Chat = {
			mensagem: this.form.value.mensagem,
			idUsuarioRemetente: Number(localStorage.getItem('id')),
			idUsuarioDestino: this.usuario.id,
			idConversa: this.usuario.idConversa
		}
		this._chatService
			.enviarConversa( conversa )
			.subscribe((response: any)=>{
				console.log('conversa enviada');
				
			})
	}

	escutarChat(){
		this._chatService
			.notificacaoRealtime()
			.subscribe((response: any)=>{
				
				this.scrollToBottom()
				this._chatService.emitPesquisa( response )
			})
	}

	scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }



	

}
