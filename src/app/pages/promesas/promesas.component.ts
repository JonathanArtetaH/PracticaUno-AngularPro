import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  usuarios: any;

  constructor() { }

  ngOnInit(): void {
   this.getUsuarios().then(user =>{
     this.usuarios = user;
   });
  }

  getUsuarios(){

    const promesa = new Promise(result =>{
      fetch('https://reqres.in/api/users')
      .then( resul => resul.json() )
      .then( body =>  result(body.data) );
    });

    return promesa;

  }
}


// PROMESAS EJEMPLO
// const promesa = new Promise((result,reject)=>{

//   if(false){
//     result('MensajeHolaMundo');
//   }else{
//     reject('Error en la aplicacion...')
//   }
  
// });

// promesa.then((mjs) =>{
//   console.log('Llego: ', mjs);
// })
// .catch(error => console.log(error) );

// console.log('Termino-.....');