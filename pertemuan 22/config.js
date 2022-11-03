const yeet = require("mysql"); // ngambil package mysql

const mysqlCredentials = yeet.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodejs'
});

mysqlCredentials.connect((somethingWrong) =>{
    if(somethingWrong){
        console.log(somethingWrong);
    }else {
        console.log("YEETED succesfully");
    }
})


module.exports = mysqlCredentials; //buat ngeluarin data config.jsd biar bisa konek ke index.js 

//module.exports != module.export
