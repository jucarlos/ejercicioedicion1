import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alreves'
})
export class AlrevesPipe implements PipeTransform {


  transform(valor: string) {

    // console.log( 'Estamos en el pipe con valor: ',valor );
    // templates literales.
    console.log(`Nuestro pipe con valor ${valor} para devolver`);

    return valor.split('').reverse().join('');


  }

  
}
