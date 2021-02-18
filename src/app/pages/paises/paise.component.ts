import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paise',
  templateUrl: './paise.component.html',
  styleUrls: ['./paise.component.css']
})
export class PaiseComponent implements OnInit {


  paises: any[] = [];


  constructor(private paisesService: PaisesService ) { }

  ngOnInit(): void {
   
    this.paisesService.getPaises()
    .subscribe( (respuesta: any) => {
        this.paises = respuesta;
    }, err => {
      console.log('No se pueden encontrar paises', err);
    });

    
  }

}
