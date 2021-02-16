import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { TemarioComponent } from './pages/temario/temario.component';
import { HomeComponent } from './pages/home/home.component';


const rutasDeLaAplicacion : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'temario', component: TemarioComponent },
    { path: '**', redirectTo: 'home'}
];



@NgModule({
    imports: [ RouterModule.forRoot ( rutasDeLaAplicacion ) ],
    exports: [ RouterModule  ]
})

export class AppRoutingModule {}