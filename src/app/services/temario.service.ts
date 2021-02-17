
import { Injectable } from '@angular/core';
import { TEMARIO } from '../data/datostemario';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {


   constructor() {
    console.log('Entrando en Constructor Temario Service');
   }

   getTemario() {
     
     return TEMARIO;
   }

   getPaises() {
     console.log('Devolvilendo paises');


   }


   
}
