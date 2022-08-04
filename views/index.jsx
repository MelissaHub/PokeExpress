const React = require('react')

    class Index extends React.Component {
      render() {
          const { pokemon } = this.props
          //this.props is whatever the stored value
          return (
                  <div>
                      <h1>This is a Pokemon</h1>
                      <ul>
                          {pokemon.map((pokemon, i) => {
                            //map is an array method and goes through each to do what you want to each
                              return (
                                //for each make them a link
                                  <li>
                                        <a href={`/pokemon/${pokemon.id}`}>
                                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                        </a><br/>
                                        <form action={`/pokemon/${pokemon.id}?_method=DELETE`} method='POST'><button type="submit">Delete</button></form>
                                        <a href={`/pokemon/${pokemon.id}/edit`}>Edit Pokemon </a>
                                  </li>
                                  //above to add apital to each name in array
                              )
                          })}
                      </ul><br/>
                      <a href="/pokemon/new">Create a Pokemon</a>

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