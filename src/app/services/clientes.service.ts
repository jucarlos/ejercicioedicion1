import { URL_SERCIVIOS } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  headers = new HttpHeaders( {
    'Content-Type' : 'application/json',
  });


  constructor(private http: HttpClient ) { }


  getClientes() {

    const url = URL_SERCIVIOS + '/cliente';
    return this.http.get( url, { headers: this.headers }  );

  }



}
