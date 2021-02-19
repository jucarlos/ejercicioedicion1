
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_PAISES } from 'src/environments/environment';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

    
  getPaises() {
    
    const url = URL_PAISES;
    return this.http.get( url )
    .pipe(
      delay(3000)
    )
    // Observable
    
  }



}
