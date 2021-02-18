import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent implements OnInit {

  @Input() mostrarimagen = true;
  @Input() titulo = '';
  @Input() numero = 0;

  @Input() dato: any;

  @Output() eventoMeGusta: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  meGusta() {
    console.log('Me gusta');
    this.eventoMeGusta.emit(1);
  }

}
