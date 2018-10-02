import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  public readonly apiUrl: string = 'http://jsonplaceholder.typicode.com/';

  public constructor (private http: Http) {}

  public buscarPost() {
    return new Promise( (resolve, reject) => {
      this.http.get( this.apiUrl + 'posts', '' ).pipe(

      );
    });
  }
}
