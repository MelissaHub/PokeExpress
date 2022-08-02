//stuck at set up your index view


const express = require('express')

require('dotenv').config()

const pokemon = require('./model/pokemon.js')

const port = process.env.PORT || 3003 // if 3000 missing or not set
//enviormental var
const app = express()


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())




app.get('/', (req, res) => {
    //link to pokemons
    res.send('Welcome to the Pokemon App!')
//res.send(item)
})

app.get('/pokemon', (req, res) => {

        res.render('Index', {pokemon: pokemon})
    //link to pokemons
    // res.send(pokemon)
//res.send(item)

    })
    
 

//our port
app.listen(port,() => {
    console.log('I am listening on port' , port)
})