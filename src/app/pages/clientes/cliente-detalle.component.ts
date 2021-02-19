import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from './../../services/clientes.service';
import { Cliente } from 'src/app/models/cliente';

import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styles: [
  ]
})
export class ClienteDetalleComponent implements OnInit {

  tituloBoton = 'Crear';
  clienteId: string = '';

  cliente: Cliente = new Cliente('', '', '');


  constructor(private activatedRoute: ActivatedRoute,
              private clienteService: ClientesService,
              private router: Router) { }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe ( ( params ) => {
      
      this.clienteId = params['id'];

      if ( this.clienteId !== 'nuevo' ) {
        this.tituloBoton = 'Actualizar';
        this.clienteService.getCliente( this.clienteId ).subscribe( (resp: any) => {
          this.cliente = resp.cliente;
        });
      }


    });
  
  }

  guardarCliente( formulario: NgForm ) {

    if ( formulario.valid ){
      
      this.clienteService.guardarCliente( this.cliente )
      .subscribe ( (resp: any) => {

        Swal.fire('Guardado', `${resp.cliente.nombre}, ha sigo guardado`, 'success');
        this.router.navigate(['/clientes']);
        
      }, error => {
        Swal.fire('Info', 'No se ha podido guardar el cliente', 'error');
        this.router.navigate(['/clientes']);
      })

    } else {
      return ;
    }

  }



}
