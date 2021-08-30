import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../../login/usuario.interface';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
	@Input() pessoas: Usuario[]
	@Output() acionarChat = new EventEmitter()
	@Input() title: string
	constructor() { }

	ngOnInit() {
	}

	acionar(item: Usuario){
		this.acionarChat.emit( item )
	}

}
