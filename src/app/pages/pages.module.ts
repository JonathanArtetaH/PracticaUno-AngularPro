import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaUnoComponent } from './grafica-uno/grafica-uno.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PagesRoutingModule } from './pages.routing';
import { FormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    DasboardComponent,
    ProgressComponent,
    GraficaUnoComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    PagesRoutingModule,
    FormsModule,
    ComponentsModule,
  ],
  exports:[
    DasboardComponent,
    ProgressComponent,
    GraficaUnoComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
})
export class PagesModule { }
