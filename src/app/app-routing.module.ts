import { ReactivosComponent } from './pages/formularios/reactivos/reactivos.component';
import { TemplatesComponent } from './pages/formularios/templates/templates.component';
import { AuthGuard } from './guards/auth.guard';
import { ClienteDetalleComponent } from './pages/clientes/cliente-detalle.component';

// Propio de Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

// Páginas
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { HomeComponent } from './pages/home/home.component';
import { PaiseComponent } from './pages/paises/paise.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { TipoVehiculosComponent } from './pages/tipo-vehiculos/tipo-vehiculos.component';


const rutasDeLaAplicacion : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'temario', component: TemarioComponent },
    { path: 'directiva', component: DirectivasComponent } ,
    { path: 'paises', component: PaiseComponent } ,
    { path: 'pipes', component: PipesComponent } ,
    { path: 'clientes', component: ClientesComponent } ,
    { path: 'clientes/:id', component: ClienteDetalleComponent },
    { path: 'tipovehiculos', component: TipoVehiculosComponent, canActivate: [ AuthGuard ] },
    { path: 'ftemplate', component: TemplatesComponent },
    { path: 'freactivo', component: ReactivosComponent },


    { path: '**', redirectTo: 'home'}
];



@NgModule({
    imports: [ RouterModule.forRoot ( rutasDeLaAplicacion , { useHash: true } ) ],
    exports: [ RouterModule  ]
})

export class AppRoutingModule {}