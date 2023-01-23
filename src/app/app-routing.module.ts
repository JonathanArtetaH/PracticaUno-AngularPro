import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

const routes: Routes = [
   
  { path: '**' , component: NopagesfoundComponent},
  
  { path: '' , redirectTo: '/dashboard' , pathMatch: 'full'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
