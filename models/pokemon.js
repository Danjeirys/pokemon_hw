// const pokemon = [
//     {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur%22%7D" },
//     {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur%22%7D" },
//     {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur%22%7D" },
//     {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander%22%7D" }, 
//     {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard%22%7D" },
//     {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle%22%7D" },
//     {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle%22%7D"}
// ]

const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, required: true}
},
{
    timestamps: true
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon 