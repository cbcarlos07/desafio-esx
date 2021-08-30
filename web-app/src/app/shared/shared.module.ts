import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InputComponent } from "./input/input.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotificationService } from "../service/notification.service";
import { HeaderComponent } from "../common/header/header.component";
import { MenuComponent } from "../common/menu/menu.component";
import { HomeComponent } from "../pages/home/home.component";
import { ChatComponent } from "../pages/chat/chat.component";
import { PessoasComponent } from "../pages/chat/pessoas/pessoas.component";
import { ConversaComponent } from "../pages/chat/conversa/conversa.component";
import { ConversaSalaComponent } from "../pages/chat/conversa-sala/conversa-sala.component";
import { SalaComponent } from "../pages/sala/sala.component";
@NgModule({
    declarations: [
        SnackbarComponent,
        InputComponent,
        HeaderComponent,
        MenuComponent,
        HomeComponent,
        ChatComponent,
        PessoasComponent,
        ConversaComponent,
        ConversaSalaComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        
    ],
    exports: [
        InputComponent,
        SnackbarComponent,
        CommonModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        HeaderComponent,
        MenuComponent,
        HomeComponent,
        ChatComponent,
        PessoasComponent,
        ConversaComponent,
        ConversaSalaComponent,
        
    ]
})

export class ShareModule{
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: ShareModule,
            providers: [
                NotificationService
            ]
        }
    }
}