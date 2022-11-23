const React = require('react')

class New extends React.Component {
    render () {
        return (
            <div>
                <h1>New Pokemon Page</h1>
                <nav>
                    <a href='/pokemon'>Back to Home Page</a>
                </nav>

                <form action='/pokemon' method = 'POST'>
                    Name: <input type="text" name ="name"/>
                    Image: <input type="text" name ="img"/>
                    <input type='submit' value='Create New Pokemon'/>
                </form>
            </div>
        )
    }
}

module.exports = New