import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngrementadorComponent } from './ingrementador/ingrementador.component';
import { FormsModule } from '@angular/forms';
import { GraficaComponent } from './grafica/grafica.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IngrementadorComponent,
    GraficaComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    NgChartsModule
  ],
  exports:[
    IngrementadorComponent,
    GraficaComponent

  ]
})
export class ComponentsModule { }
