// Propio de angular
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulo Http
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { PaiseComponent } from './pages/paises/paise.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

// Pipes
import { AlrevesPipe } from './pipes/alreves.pipe';

// Configuración idioma
import localeEs  from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

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
    AlrevesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
