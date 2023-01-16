import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagesfound',
  templateUrl: './nopagesfound.component.html', 
  styleUrls:['./nopagesfound-component.css']
})
export class NopagesfoundComponent implements OnInit {


  constructor() { }

  year: string='';

  ngOnInit(): void {

    this.year = new Date().getFullYear().toString();
  }

}
