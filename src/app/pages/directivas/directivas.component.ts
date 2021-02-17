import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent  {


  titulo: string  = 'Centro educativos';

  colegio = 'Colegio Infantes';

  mostrar: boolean = true;

  colegios: string[] = ['Nara', 'Infantes', 'Mayol', 'Sefarad'];



  mostrarOcultar(): void {
  
    this.mostrar = !this.mostrar;
  
  }




}
