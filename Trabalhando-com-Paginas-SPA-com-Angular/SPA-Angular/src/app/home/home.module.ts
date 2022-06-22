import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProfessoresComponent } from "../professores/professores.component";
import { AlunosComponent } from "../alunos/alunos.component";
import { CommonModule } from "@angular/common";
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [
        HomeComponent,
        ProfessoresComponent,
        AlunosComponent
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        CommonModule,
        MatTableModule,
        RouterModule.forChild([
            {
                path: 'home',
                component: HomeComponent
            }
        ])
    ]
})
export class HomeModule {

}