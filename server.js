const express = require('express')

require('dotenv').config()

const port = process.env.PORT || 3003 // if 3000 missing or not set

//enviormental var
const app = express()

const index = [ 



]

app.get('/pokemon', (req, res) => {


    //link to pokemons
    console.log(req.params.question)
//res.send(item)

})


//our port
app.listen(port,() => {
    console.log('I am listening on port' , port)
})