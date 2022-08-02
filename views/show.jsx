const React = require('react')

const myStyle = {
   color: '#ffffff',
   backgroundColor: '#000000',
 }

    class Show extends React.Component {
      render() {

          const { pokemon } = this.props
          //this.props is whatever the stored value is
          return (
                  <div  style={myStyle}>
                      <h1>Gotta Catch 'Em All</h1>
                      <h2>{pokemon.name}</h2>
                      <img src ={pokemon.img + '.jpg'}></img>
                      <a href = "/pokemon">BACK</a>

                  </div>
                  //.jpeg to finish images
          )
      }
    }
    module.exports = Show