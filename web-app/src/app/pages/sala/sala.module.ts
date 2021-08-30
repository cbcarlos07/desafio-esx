import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShareModule } from "src/app/shared/shared.module";
import { SalaFormComponent } from "./sala-form/sala-form.component";
import { SalaComponent } from "./sala.component";

const ROUTES: Routes = [
    {path: '', component: SalaComponent},
    {path: 'edit/:id', component: SalaFormComponent},
    {path: 'cad', component: SalaFormComponent},
]

@NgModule({
    declarations: [SalaComponent, SalaFormComponent],
    imports: [ShareModule, RouterModule.forChild( ROUTES )],
})

export class SalaModule{}