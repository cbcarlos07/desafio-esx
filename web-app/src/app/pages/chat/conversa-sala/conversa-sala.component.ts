import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalaChatService } from 'src/app/service/sala-chat.service';
import { SalaService } from 'src/app/service/sala.service';
import { ConversaSala } from './conversa-sala.model';
import { Sala } from './sala.model';

@Component({
  selector: 'app-conversa-sala',
  templateUrl: './conversa-sala.component.html',
  styleUrls: ['./conversa-sala.component.css']
})
export class ConversaSalaComponent implements OnInit, AfterViewChecked {
	@ViewChild('scrollMe',{static: true}) private myScrollContainer: ElementRef;
	@Input() sala: Sala
	@Input() conversaChat: ConversaSala[]
	form: FormGroup
	@Input() title: string = 'Grupo '
	constructor(private _salaChatService: SalaChatService,
				
		) { }
	ngAfterViewChecked(): void {
		this.scrollToBottom()
	}

	ngOnInit() {
		this.form = new FormGroup({
			mensagem: new FormControl('', {validators: [Validators.required]})
		})
		
		this.title = `${this.title} ${this.sala.nome}`
		this.scrollToBottom()
		this.escutaMudancaDeSala()
		this.escutarChat()
	}

	usuarioLogado(){
		return Number(localStorage.getItem('id'))
	}

	retornarDestino(chat: ConversaSala){
		return chat.idUsuario == this.usuarioLogado()
				? true
				: false

		
	}

	criarConversa(){
		const conversa: ConversaSala = {
			mensagem: this.form.value.mensagem,
			idUsuario: Number(localStorage.getItem('id')),
			idSala: this.sala.id
		}
		this._salaChatService
			.salvarConversa( conversa )
			.subscribe((response: any)=>{
				console.log('conversa enviada', response);
				this.form.controls.mensagem.setValue(null)
				
			})


	}


	scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }

	escutaMudancaDeSala(){
		this._salaChatService
			.notifySala
			.subscribe((response: any)=>{
				this.title = `Grupo ${this.sala.nome}`
			})
	}

	escutarChat(){
		this._salaChatService
			.notificacaoRealtime()
			.subscribe((response: any)=>{
				console.log('realtime');
				
				this.scrollToBottom()
				this._salaChatService.emitPesquisa( {...response, nome: this.sala.nome} )
			})
	}



}
