import { Injectable } from '@angular/core';
import { Pokemon, PokemonList, Specie } from '../models/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllPokemons } from '../store/pokemon.action';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {
  apiURL: string = "https://pokeapi.co/api/v2";
  allPokemonsEndpoint: string = `${this.apiURL}/pokemon?limit=100000&offset=0`

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private store: Store<{pokemonList: PokemonList}>) { }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(this.apiURL + `/pokemon/${id}`);
  }

  getPokemonByURL(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  loadPokemonsOnStore(): void {
    this.http.get<PokemonList>(this.allPokemonsEndpoint).subscribe(data => {
        this.store.dispatch(getAllPokemons({pokemonList: data}))
      });
  }
}
