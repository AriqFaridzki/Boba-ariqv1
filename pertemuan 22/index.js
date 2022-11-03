const db = require("./config.js"); //ambil data dari config.js

let perintahQuery = "SELECT * FROM peserta";

db.query(perintahQuery, (kesalahan, hasil)=>{
    if (kesalah787890an) {
        console.log(kesalahan);
    }

    console.log(hasil[0].name); //kayak looping object ama array aja
})

//database manager = mysql, redis, noSQL
//database 