
// ? / ngambil modul (certified "require" moments)

const db = require("../config/database.js"); // ? / konek database
const mysql = require("mysql"); // ? module mysql
const pool = mysql.createPool(db); // ? .....

pool.on("error lol", (adaKesalahan)=>{ // ? what is .on
    console.log(adaKesalahan)
});

let listdata = {
    ambilSemuaData(req, res){ // ? what is this

        pool.getConnection((error, connection)=>{
            if(error){
                console.log("data loaded unsuccesfully");
            }
            
        let perintah= "SELECT * FROM peserta";

        connection.query(perintah, (error2, response)=>{

            res.send({
                data: response
            })

        });
            connection.release();
        })

    },
    bikinData(req, res){ // ? what is this

        pool.getConnection((error, connection)=>{
            if(error){
                console.log("data loaded unsuccesfully");
            }

        let inputName = req.body.name; // ? nama custom sendiri ya yang ".name" bisa .nama atau apalah gitu wkwkw
        let inputGender = req.body.gender;
            
        let perintah= "INSERT INTO peserta (name, gender) VALUES ('"+ inputName+"', '"+inputGender+"')";

        connection.query(perintah, (error2, response)=>{

            res.send({
                data: response
            })

        });
            connection.release();
        })

    },
    hapusData(req, res){ // ? what is this

        pool.getConnection((error, connection)=>{
            if(error){
                console.log("data loaded unsuccesfully");
            }

        let inputId = req.params.id; // ? nama custom sendiri ya yang ".name" bisa .nama atau apalah gitu wkwkw
       
            
        let perintah= "DELETE FROM peserta WHERE id = '"+inputId+"'";

        connection.query(perintah, (error2, response)=>{

            res.send({
                data: response
            })

        });
            connection.release();
        })

    },

    updateData(req, res){ // ? what is this

        pool.getConnection((error, connection)=>{
            if(error){
                console.log("data loaded unsuccesfully");
            }

        let inputId = req.params.id; 
        let inputName = req.body.name; // ? nama custom sendiri ya yang ".name" bisa .nama atau apalah gitu wkwkw
        let inputGender = req.body.gender;
            
        let perintah= "UPDATE peserta SET name = '"+inputName+"', gender = '"+inputGender+"' WHERE id = '"+inputId+"'";

        connection.query(perintah, (error2, response)=>{

            res.send({
                data: response
            })

        });
            connection.release();
        })

    },
}
module.exports = listdata;
