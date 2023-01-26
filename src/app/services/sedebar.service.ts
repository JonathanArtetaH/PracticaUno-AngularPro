import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SedebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { tiulo: 'Principal', url: '/'},
        { tiulo: 'ProgressBar', url: './progress'},
        { tiulo: 'Graficas', url: './grafica'},
        // { tiulo: 'Principal', url: '/settings'},
      ],
    }
  ];

  constructor() { }
}
