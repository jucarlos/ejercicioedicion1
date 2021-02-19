import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  usuario: Usuario = new Usuario('','', '');
  recuerdame = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  entrar() {
    console.log( this.usuario );
    this.usuarioService.login(this.usuario  , this.recuerdame)
    .subscribe( resp => {
      console.log( resp );
    })

  }

}
