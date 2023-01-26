import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaUnoComponent } from './grafica-uno/grafica-uno.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
 

const routes: Routes = [ 
    { path: 'dashboard' , component: PagesComponent ,
    children:[
      { path: '' , component: DasboardComponent },
      { path: 'progress' , component: ProgressComponent },
      { path: 'grafica' , component: GraficaUnoComponent },
      { path: 'settings' , component: AccountSettingsComponent },
    ]
  },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
