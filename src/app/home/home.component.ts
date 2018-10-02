import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pokemones: any[];
  public pokemonesGeneral:any;
  public api: RestApiService;

  constructor( api:RestApiService) { 
    this.api = api;
    api.buscarPokemones().subscribe(
      msg => this.parsePokemon(msg)
    );
  }

  ngOnInit() {
    
  }

  public parsePokemon( msg:Object){
    this.pokemonesGeneral = msg;
    this.pokemonesGeneral = Object.values( this.pokemonesGeneral)[3];
    this.pokemones = this.pokemonesGeneral;
    this.pokemones.forEach(pokemon => {
      pokemon.name = this.capitalize( pokemon.name );
      pokemon.id = this.obteniendoId( pokemon.url );
    });
    console.log( this.pokemones );
    //aqui creare una funcion para sacar los pokemones de la api
  }

  public obteniendoId(url: string): any {
    return url.split("/")[6];
  }

  public capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
