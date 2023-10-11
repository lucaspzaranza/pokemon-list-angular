import { createSelector } from "@ngrx/store";
import { AppState, Specie } from "../models/pokemon";

export const selectMyPokemonsFeature = (state: AppState) => state.myPokemons;

export const selectMyPokemons = createSelector(
    selectMyPokemonsFeature,
    (myPokemons: Specie[]) => myPokemons
)