import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
//@ts-ignore
declare function customFuntions();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html', 
})
export class PagesComponent implements OnInit { 

  constructor(private serviceSettings: SettingsService) { }

  ngOnInit(): void {
    // this.setTheme();
    customFuntions();
  } 
}
