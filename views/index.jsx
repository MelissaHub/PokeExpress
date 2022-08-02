const React = require('react')

    class Index extends React.Component {
      render() {
          const { pokemon } = this.props
          //this.props is whatever the stored value
          return (
                  <div>
                      <h1>This is Pokemon</h1>
                      <ul>
                          {pokemon.map((pokemon, i) => {
                            //map is an array method and goes through each to do what you want to each
                              return (
                                //for each make them a link
                                  <li>
                                        <a href={`/pokemon/${i}`}>
                                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                        </a>

                                  </li>
                                  //above to add apital to each name in array
                              )
                          })}
                      </ul>

                  </div>
          )
      }
    }
    module.exports = Index





    // const React = require('react')

    // class Index extends React.Component {
    //   render() {
    //        ( can have only 1 div per (PARENT DIV))
          
    //   }
    // }
    // module.exports = Index