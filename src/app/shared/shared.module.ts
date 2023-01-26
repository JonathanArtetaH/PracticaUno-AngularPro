import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ 
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ 
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent, 
  ]
})
export class SharedModule { }
