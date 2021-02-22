import { UsuarioService } from './usuario.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERCIVIOS } from './../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculosService {

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    token : this.usuarioService.token || ''

  });

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  getTipoVehiculos() {

    const url = URL_SERCIVIOS + '/tipovehiculo';
    return this.http.get( url, { headers: this.httpHeaders} )
    .pipe(

      // rxjs
      map( (resp: any) => {
           
        return resp.tipoVehiculos;
      })

    );
  }



}
