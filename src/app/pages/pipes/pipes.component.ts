import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  nombre = 'Carlos';
  cadenaDeTexto = 'Castilla-La Mancha';

  titulos = 'en un lugar de la mancha';

  precio = 358.25;

  fecha = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
