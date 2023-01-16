import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { GraficaUnoComponent } from './pages/grafica-uno/grafica-uno.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '' , component: PagesComponent ,
    children:[
      { path: 'dashboard' , component: DasboardComponent },
      { path: 'progress' , component: ProgressComponent },
      { path: 'graficaUno' , component: GraficaUnoComponent },
      { path: '' , redirectTo: '/dashboard' , pathMatch: 'full'},
    ]
  },

  { path: 'register' , component: RegisterComponent },
  { path: 'login' , component: LoginComponent },
  
  { path: '**' , component: NopagesfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
