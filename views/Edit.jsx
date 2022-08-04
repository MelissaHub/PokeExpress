const React = require('react')

class Edit extends React.Component {
    render() {
        const pokemon = this.props.pokemon
        return (
            <div>
                <h1>Edit Pokemon page</h1>
                <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Img: <input type="text" name="img" /><br/>
                    <input type="submit" name="" value="Edit Pokemon"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit