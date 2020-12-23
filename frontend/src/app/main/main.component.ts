import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	mascotas = new FormControl();
  mascota;
  mascotasLista;

  constructor() { 
    fetch('http://localhost:3000/mascotas')
    .then(resp => resp.json() )
    .then(obj => { 
      this.mascotasLista = obj 
      this.mascota = this.mascotasLista[0];
    })
    .catch(err => console.log(err))
  }

  ngOnInit(): void {
  	

  }

  change(event) {
    if (event.isUserInput) {
      this.mascota = this.mascotasLista.filter(
        el => el.nombre == event.source.value.nombre
      )[0];
    }
  }

}
