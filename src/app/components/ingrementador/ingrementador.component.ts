
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ingrementador',
  templateUrl: './ingrementador.component.html',
  styleUrls: ['./ingrementador.component.css']
})
export class IngrementadorComponent {

  constructor() { }


 @Input() progreso: number = 15;
 @Input() colorBtn: string = 'btn btn-primary';
 @Output() valReturn: EventEmitter<number> = new EventEmitter();


  cambiarValor(val: number){ 
    if (this.progreso <= 0) {
      this.valReturn.emit(0);
      this.progreso = 0;
    }

    if (this.progreso >= 100){
      this.valReturn.emit(100);
      this.progreso = 100;
    }

    this.progreso = this.progreso += val;
    this.valReturn.emit(this.progreso)

  }

  onchangesInput(event: number){ 

      if (event>= 100) {       

        event= 100;  

      } else if (event<= 0) {       

        event = 0;     }

      this.valReturn.emit(event);    
  }
} 

