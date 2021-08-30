import { Component, OnInit } from '@angular/core';
import { SalaService } from 'src/app/service/sala.service';
import { Sala } from '../chat/conversa-sala/sala.model';
import  Swal from 'sweetalert2';
@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
	salas: Sala[] = []
	constructor(private salaService: SalaService) { }

	ngOnInit() {
		this.buscarSalas()
	}

	

	buscarSalas(){
		this.salaService
			.buscarSalas()
			.subscribe((response: Sala[])=>{
				this.salas = response
			})
	}


	perguntaRemover( parametro: any ){
		Swal.fire({
			title: 'Atenção!',
			text: `Deseja realmente remover ${parametro.nome}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sim, quero remover!',
			cancelButtonText: 'Não',
			preConfirm:  () => {
				const  r = this.remover(parametro)
				return r
			},
			allowOutsideClick: () => !Swal.isLoading()
		}).then((result) => {
			if (result.value) {
				if( result.value ){
					Swal.fire(
						'Removido!',
						`${parametro.nome} removido com sucesso`,
						'success'
						).then(()=>{
							this.buscarSalas()
						})
					}else{
						
						Swal.fire(
							'Oops!',
							`<strong>${parametro.nome}</strong> não foi removido(a)`,
							'error'
							).then(()=>{
								this.buscarSalas()
							})
						}
						
					}
				})
			}
			
		remover( obj: any ){
			return new Promise((resolve, reject)=>{
				this.salaService
				.delete( obj.id )
				.subscribe(()=>{
					resolve(true)
				}, err => {
					console.error(err);
					reject( {log: err} )
				})
			})
		}

}
