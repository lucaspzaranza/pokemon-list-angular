import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './store/pokemon.reducer';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemondataComponent } from './components/pokemondata/pokemondata.component';
import { PokecountComponent } from './components/pokecount/pokecount.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemondataComponent,
    PokecountComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({myPokemons: pokemonReducer}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
