import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paise',
  templateUrl: './paise.component.html',
  styleUrls: ['./paise.component.css']
})
export class PaiseComponent implements OnInit {


  paises: any[] = [];

  cargando = false;

  constructor(private paisesService: PaisesService ) { }

  ngOnInit(): void {
     this.cargarPaises();
  }


  
  
  cargarPaises() {

    this.cargando = true;
    this.paisesService.getPaises()
    .subscribe( (respuesta: any) => {
        this.paises = respuesta;
        this.cargando = false;
    }, err => {
      console.log('No se pueden encontrar paises', err);
      this.cargando = false;
    });
  }


}
