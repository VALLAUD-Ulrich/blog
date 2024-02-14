// Initialisation du serveur express
require("dotenv").config();
const express = require("express");
const app = express();

//mise en place des fichiers static public
app.use(express.static("public"));

//permet de recuperer le req.body sur un post
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
