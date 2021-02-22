// Propio de angular
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulo de angular
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteDetalleComponent } from './pages/clientes/cliente-detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { PaiseComponent } from './pages/paises/paise.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { TemplatesComponent } from './pages/formularios/templates/templates.component';
import { ReactivosComponent } from './pages/formularios/reactivos/reactivos.component';

// Pipes
import { AlrevesPipe } from './pipes/alreves.pipe';

// Configuración idioma
import localeEs  from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MaterialModule } from './modules/material/material.module';
import { ModalComponent } from './components/modal/modal.component';
import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';
import { TipoVehiculosComponent } from './pages/tipo-vehiculos/tipo-vehiculos.component';

registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TemarioComponent,
    DirectivasComponent,
    PaiseComponent,
    TarjetaComponent,
    PipesComponent,
    AlrevesPipe,
    ClientesComponent,
    ClienteDetalleComponent,
    ModalComponent,
    DatosUsuarioComponent,
    TipoVehiculosComponent,
    TemplatesComponent,
    ReactivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
