
const express = require("express")
const pokemon = require("./models/pokemon")
const app = express()
const PORT = 3000




app.get ('/', (req, res) => {
    res.send ('Welcome to Pokemon App!')
})

app.get ('/pokemon', (req, res) => {
    res.send (pokemon)
})








app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
})