import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html', 
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  constructor() { }

  progrsoUno: number = 10;
  progrsoDos: number = 10; 

  valorSet(event: any){
    console.log(event)
  }
  
}
