import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaUnoComponent } from './grafica-uno/grafica-uno.component';
 

const routes: Routes = [ 
    { path: 'dashboard' , component: PagesComponent ,
    children:[
      { path: '' , component: DasboardComponent },
      { path: 'progress' , component: ProgressComponent },
      { path: 'graficaUno' , component: GraficaUnoComponent },
    ]
  },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
