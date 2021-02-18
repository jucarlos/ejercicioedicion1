import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { DirectivasComponent } from './pages/directivas/directivas.component';
import { HomeComponent } from './pages/home/home.component';
import { PaiseComponent } from './pages/paises/paise.component';
import { TemarioComponent } from './pages/temario/temario.component';


const rutasDeLaAplicacion : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'temario', component: TemarioComponent },
    { path: 'directiva', component: DirectivasComponent } ,
    { path: 'paises', component: PaiseComponent } ,
    { path: '**', redirectTo: 'home'}
];



@NgModule({
    imports: [ RouterModule.forRoot ( rutasDeLaAplicacion, { useHash: true } ) ],
    exports: [ RouterModule  ]
})

export class AppRoutingModule {}