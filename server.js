const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT || 3003 // if 3000 missing or not set
const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

const Pokemon = require('./model/Pokemon.js')

app.use(express.urlencoded({extended:true})) //can make nested objects?



app.get('/pokemon', (req, res)=>{


    //what does this do?
    //Pokemon is the mongoose
    //.find is a method for an array to....
    //pokemon:allPokemon anything typed is stored into this value pokemon
    Pokemon.find({},(error,allPokemon) =>{
        //error is parameter built in method
        res.render('Index',{pokemon:allPokemon})
        //will display all pokemon
        //does this add it to new pokemon index?
        //all pokemon is called in index
    })

})

app.post('/pokemon/', (req, res)=>{
    // const newPokemon = req.body //req.body is array in jsx
    // //new body that is the req we want to store object
    // newPokemon['img']= `http://img.pokemondb.net/artwork/) ${req.body.name.toLowerCase()}`

    Pokemon.create(req.body, (error,createdPokemon) =>{
        res.redirect('/pokemon')
    } )
    //sends to make new
})

app.get('/pokemon/new', function (req,res){ 
    //form to create a new pokemon
    res.render('New')
})



//most specific first
app.get('/pokemon/:id', function(req, res){
    //shows each indiviual pokemon
    
    Pokemon.findById(req.params.id,(error,foundPokemon) => {

        res.render('Show', {
            pokemon: foundPokemon
        })
    })
    
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