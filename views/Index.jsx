const React = require ('react')

class Index extends React.Component {
    render () {
        const {pokemon} = this.props
        return (
            <div>
                <h1>Fruits Index Page</h1>
                <nav>
                <a href="/pokemon/new">Create Your own pokemon!</a>
                </nav>
                <ul>
                {
                    pokemon.map ((poke, i) => {
                        return (
                            <li key = {i}> 
                                The {' '}
                                <a href={`/pokemon/${fruit._id}`}>{poke.name}</a>

                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

module.exports = Index