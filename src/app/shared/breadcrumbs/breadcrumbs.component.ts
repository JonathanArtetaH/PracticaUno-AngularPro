import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html', 
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo: string ='';
  public tituloSub$: Subscription;

  constructor(private router: Router) { 
    this.getDataRouter();

    this.tituloSub$ = this.getDataRouter().subscribe(event => {
      this.titulo = event['titulo']
      document.title = `AdminPro - ${this.titulo}`;
    })
  } 

  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  getDataRouter(){
   return this.router.events
    .pipe(
      filter((val): val is ActivationEnd => val instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data)
      )
    
  }

}
