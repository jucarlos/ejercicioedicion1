import { PaiseComponent } from './pages/paise/paise.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { TemarioComponent } from './pages/temario/temario.component';
import { HomeComponent } from './pages/home/home.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';


const rutasDeLaAplicacion : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'temario', component: TemarioComponent },
    { path: 'directiva', component: DirectivasComponent } ,
    { path: 'paises', component: PaiseComponent } ,
    { path: '**', redirectTo: 'home'}
];



@NgModule({
    imports: [ RouterModule.forRoot ( rutasDeLaAplicacion , { useHash: true}) ],
    exports: [ RouterModule  ]
})

export class AppRoutingModule {}