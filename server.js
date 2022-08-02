const express = require('express')
require('dotenv').config()
const pokemon = require('./model/pokemon.js')
const port = process.env.PORT || 3003 // if 3000 missing or not set
const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())



//most specific first
app.get('/pokemon/:id', function(req, res){

    res.render('Show', {pokemon: pokemon[req.params.id]})
    // assigning /pokemon and index in the pokemon array
    //calling Show.jsx
    //render prints them

})

app.get('/pokemon', (req, res) => {

    res.render('Index', {pokemon: pokemon})
//link to pokemons

})

app.get('/', (req, res) => {
    //link to pokemons
    res.send('Welcome to the Pokemon App!')
})


//our port
app.listen(port,() => {
    console.log('I am listening on port' , port)
})