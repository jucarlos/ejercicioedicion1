import { UsuarioService } from './../services/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private usuarioService: UsuarioService,
                private router: Router ) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    console.log('pasando por el guard');

    if ( !this.usuarioService.autenticado ) {
      Swal.fire('Autenticación', 'Tienes que estar autenticado', 'success');
      this.router.navigateByUrl('/home');
      return false;
    }

    return true;

    
    
  }

  
  
}
