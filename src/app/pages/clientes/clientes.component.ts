import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  clientes = [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {

    this.clienteService.getClientes()
     .subscribe( (respuesta: any) => {
        this.clientes = respuesta.clientes;
        console.log(this.clientes)
    });
    
  }


  mostrarAlert() {
    console.log('Mostrar alerta');
    Swal.fire({
      title: 'Cientes',
      text: 'Continuamos?',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    })
  }

}
