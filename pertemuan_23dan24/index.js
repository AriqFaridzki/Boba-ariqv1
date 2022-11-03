
//  * ngambil Framework

// const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const router = require("./src/routes/peserta-route.js");
app.use("/", router);


app.listen(2020, ()=>{ // ? / listen port (buat preview aplikasi)
    console.log("Server is running lol") // ? / Ctrl + C untuk mematikan node.js server
})


