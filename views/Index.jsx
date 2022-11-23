const React = require('react')

class Index extends React.Component {
    render() {
        const {pokemon} = this.props
        return (
            <div>
                <h1>The Pokemon App</h1>
                <nav>
                <a href="/pokemon/new">Create Your own pokemon!</a>
                </nav>
                <ul>
                {
                    pokemon.map ((poke, i) => {
                        return (
                            <li key = {i}> 
                                {/* <a href={`/pokemon/${i}`}>{poke.name[0].toUpperCase() + poke.name.slice(1)}</a> */}
                                <a href={`/pokemon/${poke._id}`}>{poke.name[0].toUpperCase() + poke.name.slice(1)}</a>
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

