import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';
import { SalaService } from 'src/app/service/sala.service';
import { Sala } from '../../chat/conversa-sala/sala.model';

@Component({
  selector: 'app-sala-form',
  templateUrl: './sala-form.component.html',
  styleUrls: ['./sala-form.component.css']
})
export class SalaFormComponent implements OnInit {
	id: number
	form: FormGroup
	title: string
	constructor(private _salaService: SalaService,
				private _location: Location,
				private _notificationService: NotificationService,
				private _activatedRouter: ActivatedRoute
		) { }

	ngOnInit() {
		this.id = this._activatedRouter.snapshot.params['id'] || 0
		this.form = new FormGroup({
			nome: new FormControl('', {validators: [Validators.required]})
		})

		this.title = this.id > 0 ? 'Alterar Sala' : 'Cadastrar sala'
		if( this.id > 0 ){
			this.buscarSala()
		}

	}

	buscarSala(){
		this._salaService	
			.buscarSala(this.id)
			.subscribe((response: Sala)=> {
				this.form.controls.nome.setValue( response.nome )
			})
	}

	salvar(){
		if(this.id > 0){
			this.editar()
		}else{
			this.novo()
		}
	}

	editar(){
		this._salaService
			.editar(this.id, this.form.value)
			.subscribe( ()=>{
				this._location.back()
				this._notificationService.notify({status: true, message: 'Saldo com sucesso!'})
			})
	}

	novo(){
		this._salaService
			.cadastrar(this.form.value)
			.subscribe( ()=>{
				this._location.back()
				this._notificationService.notify({status: true, message: 'Cadastrado com sucesso!'})
			})
	}

}
