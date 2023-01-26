import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeLink = document.getElementById('theme');
  // private urlSelectors = document.querySelectorAll('.selector'); 

  constructor() {
    console.log('Services Settings')
    this.setTheme();
  }

  setTheme() {
    let theme = localStorage.getItem('theme');
    (theme != undefined && theme != null)
      ? this.themeLink?.setAttribute('href', theme)
      : this.themeLink?.setAttribute('href', 'href="./assets/css/colors/default-dark.css"');
  }

  changueTheme(theme: string) {
    const urlTheme = `./assets/css/colors/${theme}.css`;

    this.themeLink?.setAttribute('href', urlTheme);

    localStorage.setItem('theme', urlTheme);

    this.checkCurrentTheme();
  }
  
  checkCurrentTheme() {
    let urlSelectors = document.querySelectorAll('.selector');
    urlSelectors!.forEach((e: any) => {
      e.classList.remove('working');
      const btn = e.getAttribute('data-theme');
      const urlTheme = `./assets/css/colors/${btn}.css`;

      const themeUrl = this.themeLink?.getAttribute('href');

      if (urlTheme == themeUrl) e.classList.add('working')

    });

  }
}
