const React = require('react')

const myStyle = {
   color: '#ffffff',
   backgroundColor: '#000000',
 }

    class Show extends React.Component {
      render() {

          const {pokemon} = this.props
          //destructre it {pokemon}
          //this.props is whatever the stored value is
          return (
                  <div  style={myStyle}>
                      <h1>Gotta Catch 'Em All</h1>
                      <h2>Here is Pokemon {pokemon.name}</h2>
                      <img src={`http://img.pokemondb.net/artwork/${pokemon.name.toLowerCase()}.jpg`}></img>

                      <a href = "/pokemon/new">Create a Pokemon</a><br/>
                      <a href = "/pokemon">BACK</a>

                  </div>
                  //.jpeg to finish images
          )
      }
    }
    module.exports = Show