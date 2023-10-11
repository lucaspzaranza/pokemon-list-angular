import { createAction, props } from "@ngrx/store";
import { PokemonList, Specie } from "../models/pokemon";

export const getAllPokemons = createAction('Get Pokemon List', props<{pokemonList: PokemonList}>());
export const addPokemon = createAction('Add Pokemon On List', props<{pokemonToAdd: Specie}>());
export const removePokemon = createAction('Remove Pokemon On List', props<{pokemonToRemove: Specie}>());