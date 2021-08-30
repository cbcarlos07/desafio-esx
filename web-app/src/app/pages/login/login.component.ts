import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    formLogin: FormGroup
    loginErrado: boolean
    isError: boolean
    msgError: string
    type = 'password'
    constructor(private _userService: UsuarioService,
              	private _router: Router) { }

    ngOnInit() {
		if( this._userService.verifySession() ){
			this._router.navigate(['/chat'])
		}
		this.formLogin = new FormGroup({
			login: new FormControl('', {validators: [Validators.required]}),
			senha: new FormControl('', {validators: [Validators.required]})
		})
    }

	onSubmit(){
		this.logar()
	}

	logar(){
		this._userService
			.auth(this.formLogin.value)
			.subscribe((response: any)=>{
				console.log('response',response);
				
				if( response ){
					this._router.navigate(['/home'])
					this._userService.notifyLogin()
					
					
				}else{
					this.isError = true
					this.msgError = 'Login ou senha incorretos'
				}
			})
	}

	changeType(){
		this.type = this.type == 'password' ? 'text'  : 'password'
	}

}
