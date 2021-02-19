import { URL_SERCIVIOS } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  headers = new HttpHeaders( {
    'Content-Type' : 'application/json',
  });


  constructor(private http: HttpClient ) { }


  getClientes(desde = 0) {

    const url = URL_SERCIVIOS + '/cliente?limite=5&desde=' + desde;
    return this.http.get( url, { headers: this.headers }  );

  }

  guardarCliente( cliente: Cliente ) {

    let url = URL_SERCIVIOS + '/cliente';

    if ( cliente._id ) {
      url += '/' + cliente._id;
      return this.http.put( url, cliente, { headers: this.headers })
    } else {
      return this.http.post( url, cliente , { headers: this.headers });
    }

  }

  getCliente( id: string ) {
    const url = URL_SERCIVIOS + '/cliente/' + id ;
    return this.http.get( url );
  }

  borrarCliente( id: string ) {
    const url = URL_SERCIVIOS + '/cliente/' + id ;
    return this.http.delete( url );
  }




}
