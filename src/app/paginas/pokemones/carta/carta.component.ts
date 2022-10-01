import { Component, OnInit, Input } from '@angular/core';
import {Pokemon} from './../../../modelo/pokemon'; //Estamos importando la interfaz Pokemon para generar objetos
import { HttpClient } from '@angular/common/http'; //Estamos importando HttpClient para realizar consultas a internet

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
})
export class CartaComponent implements OnInit {
  @Input() public url!: string;
  public pokemon!: Pokemon;
  constructor(
    private clienteHttp: HttpClient
  ) { }

  ngOnInit() {
    this.clienteHttp.get<Pokemon>(this.url).subscribe(resultado => {
      this.pokemon = resultado;
    }); //Subscribe activa el evento deseado
  }

}
