import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //Necesito consultarle los datos a la API
import {Peticion} from './../../modelo/peticion'; //Como estoy en la lista de pokemones, la petición traerá el 'array' de pokemones

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  public peticion!: Peticion;
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
  constructor(
    private clienteHttp: HttpClient
  ) { }

  ngOnInit() {
    this.clienteHttp.get<Peticion>(this.url).subscribe(resultado =>{
      this.peticion = resultado;
    });
  }

}
