export class Pokemon {
    abilities: Array<AbilityData> = new Array<AbilityData>()
    base_experience: number = 0
    game_indices: Array<GameIndice> = new Array<GameIndice>()
    height: number = 0
    held_items: Array<Object> = new Array<Object>
    id: number = 0
    is_default: boolean = false
    location_area_encounters: string = ''
    moves: Array<Object> = new Array<Move>
    name: string = ''
    order: number = 0
    past_types: Array<Object> = new Array<Object>
    sprites: Sprites = new Sprites()
    stats: Array<Stats> = new Array<Stats>
    type: Array<PokeType> = new Array<PokeType>
    weight: number = 0
}

export class PokemonList {
    count: number = 0
    next: string = ''
    previous: string = ''
    //results: Array<Pokemon> = new Array<Pokemon>()
    results: Array<Specie> = new Array<Specie>()
}

export interface AbilityData {
    ability: {
        name: string,
        url: string
    } 
    is_hidden: boolean
    slot: number
}

export interface GameIndice {
    game_index: number,
    version: {
        name: string,
        url: string
    }
}

export interface Specie {
    name: string,
    url: string,
    results: Specie[]
}

export class Sprites {
    back_default: string = ''
    back_female: string = ''
    back_shiny: string = ''
    back_shiny_female: string = ''
    front_default: string = ''
    front_female: string = ''
    front_shiny: string = ''
    front_shiny_female: string = ''
}

export interface Stats {
    base_stat: number, 
    effort: number, 
    stat: {
        name: string,
        url: string
    }
}

export interface PokeType {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

export interface Move {
    move: {
        name: string,
        url: string
    },

    version_group_details: {
        level_learned_at: number,

        move_learned_method: {
            name: string,
            url: string
        },
        
        version_group: {
            name: string,
            url: string
        }
    }
}

export interface AppState {
    pokemonList: PokemonList,
    myPokemons: Specie[]
}