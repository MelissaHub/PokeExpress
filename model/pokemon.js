const mongoose = require('mongoose')

//to generate unique ID
const pokemonSchema = new mongoose.Schema({ 
    name: { type: String, required: true},
    //  color:{type: String, required: true},
    //  readyToUse: Boolean
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)
//in string is a reference

module.exports = Pokemon

// const pokemon = [
//     {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
//     {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
//     {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
//     {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
//     {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
//     {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
//     {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
//  ]
//  module.exports = pokemon
 //exports array