import { createReducer, on } from "@ngrx/store";
import { getAllPokemons, addPokemon, removePokemon } from "./pokemon.action";
import { AppState, Pokemon, PokemonList, Specie } from "../models/pokemon";

export const initialState: AppState = {
    pokemonList: new PokemonList(),
    myPokemons: new Array<Specie>()
}

export const pokemonReducer = createReducer(
    initialState, 
    on(getAllPokemons, (state, val) => {
        return ({
            ...state,
            pokemonList: val.pokemonList
        })
    }),

    on(addPokemon, (state, val) => {
        return ({
            ...state,
            myPokemons: [
                ...state.myPokemons,
                val.pokemonToAdd
            ]
        })
    }),
    
    on(removePokemon, (state, val) => ({
        ...state,
        myPokemons: state.myPokemons.filter(pokemon => pokemon.name !== val.pokemonToRemove.name)
    }))
)