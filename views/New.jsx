const React = require('react')

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>Make a Pokemon</h1>
          
            <form action="/pokemon" method="POST">
              Name: <input type="text" name="name" /><br/>
              {/* Color: <input type="text" name="color" /><br/> */}
              <input type="submit" name="" value="Create Pokemon"/>
            </form>
                             <nav>
                              <a href="/pokemon">Home</a>
                              </nav>
        </div>)
    }
  }
module.exports = New
//create new page