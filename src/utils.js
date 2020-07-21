// allows us to request data from API using superagent suite
import request from 'superagent'

export function getPokemonById(pokeId){
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${pokeId}`);
}