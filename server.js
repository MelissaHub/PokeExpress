const express = require('express')
require('dotenv').config()
const pokemon = require('./model/Pokemon.js')
const port = process.env.PORT || 3003 // if 3000 missing or not set
const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
const mongoose = require('mongoose')
const Pokemon = require('./models/Pokemon.js')


app.post('/pokemon/', (req, res)=>{
    res.send(req.body)
})

app.get('/pokemon/', (req, res)=>{


    //what does this do?
    Pokemon.find({},(error,allPokemon) =>{
        //error is parameter built in method
        res.render('Index',{pokemon:allPokemon})
        //does this add it to new pokemon index?
        //all pokemon is called in index
    })

})

app.get('/pokemon/new', function (req,res){ 
    //form to create a new pokemon
    res.render('New')
})

//most specific first
app.get('/pokemon/:id', function(req, res){
    //shows each indiviual pokemon
    res.render('Show', {pokemon: pokemon[req.params.id]})
    // assigning /pokemon and index in the pokemon array
    //calling Show.jsx
    //render prints them

})

app.get('/pokemon', (req, res) => {
//shows all the pokemon
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