import { TipoVehiculosService } from './../../services/tipo-vehiculos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-vehiculos',
  templateUrl: './tipo-vehiculos.component.html',
  styleUrls: ['./tipo-vehiculos.component.css']
})
export class TipoVehiculosComponent implements OnInit {

  tipoVehiculos = [];

  constructor(private tVehiculoService: TipoVehiculosService) { }

  ngOnInit(): void {
    this.cargarTiposVehiculos();
  }

  cargarTiposVehiculos() {
    this.tVehiculoService.getTipoVehiculos().subscribe( resp => {
      this.tipoVehiculos = resp;
      console.log( this.tipoVehiculos );
    })

  }

}
