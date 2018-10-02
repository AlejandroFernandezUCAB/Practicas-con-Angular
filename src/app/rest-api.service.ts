import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class RestApiService {

  public readonly apiUrl: string = 'https://pokeapi.co/api/v2/pokemon-form/';

  public constructor (private http: HttpClient) {}

  public buscarPokemones( ) {

    return this.http.get(this.apiUrl , {responseType: 'json'});

  }

  public buscarPokemon( direccion:string ) {
    return this.http.get( this.apiUrl + direccion +'/' , {responseType: 'json'});

  }

}
