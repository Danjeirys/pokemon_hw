const React = require('react') 

class Show extends React.Component {
    render () {
        const {name,img} = this.props.pokemon
        // console.log (poke)
        return (
            <div>
                <h1> Gotta Catch 'Em All</h1>


                    <h2>The is {name} </h2>
                    <img src={img + ".jpg"}/>
                    <a href={`/pokemon/`}>Back</a>
            </div>
        )
    }
}



module.exports = Show