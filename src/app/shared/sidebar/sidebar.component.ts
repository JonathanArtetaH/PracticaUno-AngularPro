import { Component, OnInit } from '@angular/core';
import { SedebarService } from 'src/app/services/sedebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html', 
})
export class SidebarComponent implements OnInit {

  menuItem: any;

  constructor(private serviceBar: SedebarService) { }

  ngOnInit(): void {
    this.menuItem = this.serviceBar.menu;
    console.log(this.menuItem)
  }

}
