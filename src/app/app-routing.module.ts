
// Propio de Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

// Páginas
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { HomeComponent } from './pages/home/home.component';
import { PaiseComponent } from './pages/paises/paise.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TemarioComponent } from './pages/temario/temario.component';


const rutasDeLaAplicacion : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'temario', component: TemarioComponent },
    { path: 'directiva', component: DirectivasComponent } ,
    { path: 'paises', component: PaiseComponent } ,
    { path: 'pipes', component: PipesComponent } ,
    { path: '**', redirectTo: 'home'}
];



@NgModule({
    imports: [ RouterModule.forRoot ( rutasDeLaAplicacion ) ],
    exports: [ RouterModule  ]
})

export class AppRoutingModule {}