require("dotenv").config();
const express = require("express");
const Pokemon = require("./models/pokemon");
const pokemon = require('./models/pokemon')
const app = express();
const PORT = 3000;
const reactViews = require("express-react-views");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

app.use((req, res, next) => {
    next();
});

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Welcome to Pokemon App!");
});

// app.get ('/pokemon', (req, res) => {
//     res.render ('Index', {pokemon: Pokemon})
// })

app.get("/pokemon", (req, res) => {
Pokemon.find({}, (error, allPokemon) => {
    if (!error) {
        res.status(200).render("Index", {
        pokemon: allPokemon,
    });
    } else {
        console.log("error");
        res.status(400).send(error);
    }
    });
});

app.get("/pokemon/new", (req, res) => {
    res.render("New");
});

app.post("/pokemon", (req, res) => {
Pokemon.create(req.body, (error, createdPokemon) => {
    // console.log(createdPokemon)
    if (!error) {
        res.status(200).redirect("/pokemon")
      //res.status(200).send(createdPokemon)
    } else {
        res.status(400).send(error);
    }
});
});

// app.get ('/pokemon/:id', (req,res) => {
//     res.render ('Show', Pokemon [req.params.id])
// })

app.get("/pokemon/:id", (req, res) => {
Pokemon.findById(req.params.id, (error, foundpoke) => {
    if (!error) {
        res.status(200).render("Show", {
        pokemon: foundpoke,
    });
    } else {
        res.status(400).send(error);
    }
});
});
// res.render('pokemon/Show', {
//     fruit: fruits [req.params.indexOfFruit]
// })

// app.get ('/pokemon/new', (req,res) => {
//     res.render ('new')
// })

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
