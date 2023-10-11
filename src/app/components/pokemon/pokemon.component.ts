import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Pokemon, PokemonList, Specie } from 'src/app/models/pokemon';
import { PokemonAPIService } from 'src/app/services/pokemon-api.service';
import { addPokemon, removePokemon } from 'src/app/store/pokemon.action';
import { selectMyPokemons } from 'src/app/store/pokemon.selector';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokeList: PokemonList = new PokemonList();
  myPokemons: Array<Specie> = new Array<Specie>();
  pokeIndexList: Array<boolean> = new Array<boolean>();
  selectedIndex: number = -1;
  spriteUrl: string = ''
  selectedPokemon: Pokemon = new Pokemon();

  constructor(private pokeService: PokemonAPIService, private store: Store<AppState>) {  }

  ngOnInit(): void {
    this.pokeService.loadPokemonsOnStore();

    this.store.select(selectMyPokemons).subscribe((data: any) => {
      this.pokeList = data.pokemonList
      this.myPokemons = data.myPokemons
     })
  }

  viewPokeData(index: number) {
    console.log(this.pokeList.results[index].url);

    this.pokeService.getPokemonByURL(this.pokeList.results[index].url).subscribe(pokemon => {
      this.selectedPokemon = pokemon;
      this.spriteUrl = this.selectedPokemon.sprites.front_default;

      this.pokeIndexList[index] = true;
      this.selectedIndex = index;
    });
  }

  hidePokeData(index: number) {
    this.pokeIndexList[index] = false;
    this.selectedIndex = -1;
  }

  dispatchAddPokemon(pokemon: Specie) {
    if(!this.myPokemons.includes(pokemon)) {
      this.store.dispatch(addPokemon({pokemonToAdd: pokemon}));
    }
    else {
      console.log('Você já capturou esse pokemon!');
    }
  }

  dispatchRemovePokemon(pokemon: Specie) {
    this.store.dispatch(removePokemon({pokemonToRemove: pokemon}));
  }
}
