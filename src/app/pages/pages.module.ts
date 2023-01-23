import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaUnoComponent } from './grafica-uno/grafica-uno.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PagesRoutingModule } from './pages.routing';



@NgModule({
  declarations: [
    DasboardComponent,
    ProgressComponent,
    GraficaUnoComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    PagesRoutingModule
  ],
  exports:[
    DasboardComponent,
    ProgressComponent,
    GraficaUnoComponent,
    PagesComponent
  ],
})
export class PagesModule { }
