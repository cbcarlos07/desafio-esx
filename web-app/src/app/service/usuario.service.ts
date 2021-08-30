import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
	private host: string
	public notifierLogin  = new EventEmitter()
	private notifierLogout = new EventEmitter()
	private webservice: string
  	constructor(private _http: HttpClient,
				private _router: Router) { 
					this.host = `${environment.api}`
					this.webservice = `${this.host}${environment.endpoint}/usuario`
				}
				carregarNome(){
					return localStorage.getItem('nome')
				}
			
				verifySession(){
					return localStorage.getItem('nome') !=  undefined
				}
			
				save(data: any){
					return this._http.post(this.webservice, data)
				}
			
				getAll(){
					const id = localStorage.getItem('id')
					return this._http.get(`${this.webservice}?id=${id}`)
				}
			
				update(id: number, obj: any){
					return this._http.put(`${this.webservice}/${id}`, obj)
				}
			
				getById(id: number){
					return this._http.get(`${this.webservice}/${id}`)
				}
			
				delete(id: number){
					return this._http.delete(`${this.webservice}/${id}`)
				}
			
				auth(obj: any){
					return this._http.patch(`${this.host}/auth`,obj)
							   .pipe(
									   tap((result: any)=>{
										if(result){
											localStorage.setItem('id', result.id)
											localStorage.setItem('login', result.login)
											localStorage.setItem('nome', result.nome)
										}
									   })
							   )
				}
			
				notifyLogin(){
					this.notifierLogin.emit(true)
				}
			
				sair(){
					localStorage.clear()
					this.notifierLogout.emit()
					this._router.navigate(['/'])
				}
			
				handleLogin(){
					this._router.navigate( ['/'] )
				}
			
				getToken(){
					return localStorage.getItem('token')
				}
			
				setToken( token ){
			
					localStorage.setItem('token', token)
				}
			
				handleForbiden(){
					this._router.navigate( ['/forbiden'] )
				}			
}
