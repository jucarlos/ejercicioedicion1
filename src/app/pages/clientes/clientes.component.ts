import { Component, OnInit } from '@angular/core';

import { ClientesService } from './../../services/clientes.service';

import { Cliente } from './../../models/cliente';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  desde = 0;
  totalRegistros = 0;

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {

      this.cargarClientes();
    
  }

  cargarClientes() {
    this.clienteService.getClientes(this.desde || 0)
    .subscribe( (respuesta: any) => {
      this.clientes = respuesta.clientes;
      this.totalRegistros = respuesta.total;
      // console.log( this.clientes );
     } );
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


  borrarCliente( cliente: Cliente ) {
    

    Swal.fire({
      title: `¿Estás seguro de borrar a ${cliente.nombre}`,
      text: 'Es irrecuperable',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, bórralo'
    }).then( (result) => {
      if (result.isConfirmed) {
        // invocar servicio borrar.
        this.clienteService.borrarCliente( cliente._id )
        .subscribe ( (resp: any) => {


          
          if ( resp.ok ) {
            Swal.fire(
              'Borrado!',
              'Ha sido borrado.',
              'success'
            );
            this.cargarClientes();

          }
        });

       
      }
    })

  }


  cambiarDesde( i: number ) {

    const desde = this.desde + i;
    if ( desde >= this.totalRegistros ) {
      Swal.fire('Clientes', 'No hay mas clientes', 'info');
      return;
    }

    if ( desde < 0 ) {
      return;
    }
    this.desde += i;
    this.cargarClientes();


  }

  



}
