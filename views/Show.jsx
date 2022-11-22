const React = require ('react') 

class Show extends React.Component {
    render () {
        const poke = this.props.poke
        console.log (poke)
        return (
            <div>
                <h1> Pokemon Show Page</h1>

                <div> 
                    The is {poke.name}! 
                </div>
            </div>
        )
    }
}

module.exports = Show