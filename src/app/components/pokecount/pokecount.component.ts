import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/pokemon';
import { selectMyPokemons } from 'src/app/store/pokemon.selector';

@Component({
  selector: 'app-pokecount',
  templateUrl: './pokecount.component.html',
  styleUrls: ['./pokecount.component.css']
})
export class PokecountComponent implements OnInit{
  //constructor(private store: Store<{myPokemons: Array<Specie>}>) { }
  constructor(private store: Store<AppState>) { }

  pokemons = this.store.select(selectMyPokemons);
  loadedData: any;

  ngOnInit(): void {
    this.pokemons.subscribe(data => {
      this.loadedData = data;
    })
  }
}
