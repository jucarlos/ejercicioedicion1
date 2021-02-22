import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-usuario',
  template : `
      
      <div class="navbar-text mx-3">
          {{ usuarioService.usuario.nombre}}
        </div>


  `,
  styles: [`
  
  

  `]
})
export class DatosUsuarioComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
