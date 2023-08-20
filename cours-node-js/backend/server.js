const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config()
const port = 5000;

//Connexion à la DB
connectDB();


const app = express();

//Middleware qui permet de traiter les données de la req
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/post", require("./routes/post.routes"))

//Lancer le serveur
app.listen(port, () => console.log("Le server a démarré au port " + port))