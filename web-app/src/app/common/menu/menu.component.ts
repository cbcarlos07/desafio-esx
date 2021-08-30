import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	nome = "Nome"
	status = "Online"
	classeStatus = "text-success"
	menus = []
	mostrarMenu: false
	foto: string
	semfoto = 'assets/esx.png'
	listas = []
	forms  = []
	configs = []
	constructor(private _usuarioService: UsuarioService) { }

	ngOnInit() {
		this.foto = 'assets/esx.png'
		this.getName()
	}

	getName(){
		this.nome = this._usuarioService.carregarNome()				
		this.getMenu()
	}

	getMenu(){
		this.listas = [
			{url: 'chat', icone: 'fa-filter', menu: 'Chat'},
			{url: 'sala', icone: 'fa-filter', menu: 'Sala'}
		]
	}	

	verificaSessao(){
		return true
	}

}
