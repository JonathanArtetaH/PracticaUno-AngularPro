import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
 

import { AppComponent } from './app.component'; 
import { PagesModule } from './pages/pages.module'; 
import { AuthModule } from './auth/auth.module';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

@NgModule({
  declarations: [
    AppComponent, 
    NopagesfoundComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule, 
    AuthModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
