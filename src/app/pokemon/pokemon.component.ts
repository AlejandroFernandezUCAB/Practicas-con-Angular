import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public id: string ;
  public pokemon: any;
  constructor(api : RestApiService, private _route:ActivatedRoute) { 
    this.id = this._route.snapshot.paramMap.get("id");
    api.buscarPokemon(this.id).subscribe(
      msg => this.creandoElPokemon(msg)
    )
  }

  ngOnInit() {
  }

  public creandoElPokemon( pokemon:any ){
    this.pokemon.id = pokemon.id;
    if( pokemon.is_battle_only == "false"){
      this.pokemon.batalla = "No es de solo batalla";
    }else{
      this.pokemon.batalle = "Si es de solo batalla";
    }
  }
}
