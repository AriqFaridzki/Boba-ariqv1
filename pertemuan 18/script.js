axios.defaults.headers.common['Authorization'] = 
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFU0lUREMiLCJyb2xlIjoiZ29kIiwiaWF0IjoxNjUzODk5NzMxLCJleHAiOjE2NTY0OTE3MzF9.Qu6eA_o05kezgbvzE1hSHO7PU120PL6xrZA2k5-_0KM";


// ambil data backend JSON


// axios.get("https://api.bacod.id/mahasiswa") //masukan link backend
// .then((response)=>{

// console.log(response)
    
// }) 

// delete data backend


// for (let i = 15; i < 20; i++) {
//     axios.delete(`https://api.bacod.id/mahasiswa/MHS00${i}`) //masukan link backend
// .then((response)=>{

// console.log(response)
    
// }) 
    
// }


// masukan data backend

    let names = [
    
        "Aaren"
        ,
        "Aarika"
        ,
        "Abagael"
        ,
        "Abagail"
        ,
        "Abbe"
        ,
        "Abbey"
        ,
        "Abbi"
        ,
        "Abbie"
        ,
        "Abby"
        ,
        "Abbye"
    ]

// for (let index = 0; index < 1; index++) {
//     axios.post("https://api.bacod.id/mahasiswa", {
//     nama: `names ${[index]}`,
//     jenisKelamin: "male",
//     jurusan: "informatika"

// }).then((response)=>{
//     console.log(response)
// })
    
// }

axios.post("https://api.bacod.id/mahasiswa", {
    nama: "Ariq",
    jenisKelamin: "male",
    jurusan: "informatika"

}).then((response)=>{
    console.log(response)
})



//ngubah data backend

// axios.get("https://api.bacod.id/mahasiswa/M04464220224121", {
//     nama: "Meguminnnnn",
//     jenisKelamin: "male",
//     jurusan: "informatika"

// }).then((response)=>{
//     console.log(response)
// }).catch((responseError)=> {
//     console.log(responseError);
// })

// axios.get("https://api.bacod.id/mahasiswa") //masukan link backend
// .then((response)=>{

// console.log(response)

// })



//jangan pernah ambil API pakai settimeout()