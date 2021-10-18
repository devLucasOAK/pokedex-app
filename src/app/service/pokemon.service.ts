import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}?limit=${limit}&offset=${offset}`)
  }

  getPokemonByName(pokemon: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${pokemon}`)
  }
}
