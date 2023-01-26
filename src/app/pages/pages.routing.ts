import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaUnoComponent } from './grafica-uno/grafica-uno.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
 

const routes: Routes = [ 
    { path: 'dashboard' , component: PagesComponent ,
    children:[
      { path: '' , component: DasboardComponent , data:{titulo:'Dashboard'}},
      { path: 'progress' , component: ProgressComponent , data:{titulo:'ProgressBar'}},
      { path: 'grafica' , component: GraficaUnoComponent , data:{titulo:'Graficas'}},
      { path: 'settings' , component: AccountSettingsComponent, data:{titulo:'Settings'} },
      { path: 'promesa' , component: PromesasComponent, data:{titulo:'Promesas'} },
      { path: 'rxjspromesas', component: RxjsComponent, data:{titulo:'Rxjd Promesas'}}
    ]
  },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
