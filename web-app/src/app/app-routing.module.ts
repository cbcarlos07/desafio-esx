import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SalaComponent } from './pages/sala/sala.component';


const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'chat',
      component: ChatComponent
    },
    {
		path: 'sala',
		children: [
			{path: '', loadChildren: './pages/sala/sala.module#SalaModule'}
		]
    },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
