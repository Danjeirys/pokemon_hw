// require('dotenv').config()
const express = require("express")
const pokemon = require("./models/pokemon")
const app = express()
const PORT = 3000
const reactViews = require ('express-react-views')
// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// mongoose.connection.once('open', () => {
//     console.log ('connected to mongo')
// })

app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())


app.get ('/', (req, res) => {
    res.send ('Welcome to Pokemon App!')
})

app.get ('/pokemon', (req, res) => {
    res.render ('Index', {pokemon: pokemon})
})

app.get ('/pokemon/:id', (req,res) => {
    res.render (pokemon [req.params.id])
})

// app.get("/pokemon/:id", (req, res) => {
//     pokemon.findById(req.params.id, (error, foundPoke) => {
//         if (!error) {
//             res.status (200).render('pokemon/Show', {
//                 pokemon: foundPruit 
//             })
//         } else {
//             res.status(400).send (error)
//         }
//     })

// res.render('pokemon/Show', {
//     fruit: fruits [req.params.indexOfFruit] 
// })
// })

app.get ('/pokemon/new', (req,res) => {
    res.render ('new')
})








app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
})