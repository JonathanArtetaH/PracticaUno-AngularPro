import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(private servicesSettings: SettingsService) { }
 
  public urlSelectors: NodeListOf<Element> | undefined;

  ngOnInit(): void {
    this.servicesSettings.checkCurrentTheme();
  }

  changueTheme(theme: string){
    this.servicesSettings.changueTheme(theme); 
  }

 

}
