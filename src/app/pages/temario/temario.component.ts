import { Tema } from 'src/app/interfaces/tema';
import { Component, OnInit } from '@angular/core';

import { TemarioService } from './../../services/temario.service';


@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {

  x: number = 1;
  nombre: string = 'CArlos';
  mostrar: boolean = true;
    
  temas: Tema[] = [];

  meGustan = 0;


  constructor(private temaService: TemarioService ) {}

  ngOnInit(): void {
    this.temas = this.temaService.getTemario();
  }

  eventoRecibido( evento) {
   // console.log( evento );
    this.meGustan = this.meGustan + evento;
  }

}
