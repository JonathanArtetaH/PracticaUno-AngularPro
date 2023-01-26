import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {  
  //  this.returnObs().pipe(
  //     retry(4)
  //   ).subscribe(
  //     val => console.log('Valor: ', val),
  //     error => console.error('Error: ', error),
  //     ()=> console.info('TERMINO EL OBS')
  //   );

  this.intervalSubs = this.returnInterval().subscribe(
    (i)=> console.log(i)
  ) 
  }

ngOnDestroy(): void { 
  this.intervalSubs.unsubscribe();
}

 
  returnInterval(): Observable<number>{
    return interval(500).pipe(
                          // take(10),
                          map(val => val+1),
                          filter(val => (val % 2 === 0) ? true : false)
                          );  
  }

  returnObs(): Observable<number>{
    const obs$ = new Observable<number>( observable =>{

      let i =-1;

     const intervel =  setInterval(()=>{ 
        i++;
        observable.next(i)

        if(i === 5){
          clearInterval(intervel)
          observable.complete();
        }

        if(i === 3){
          clearInterval(intervel)
          observable.error('Llego a 3 el Obs');
        }

       }, 1000)

    });

    return obs$;
  }

}
