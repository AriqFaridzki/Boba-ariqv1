
// let index = 0;
// for ( index ; index < 10; index++) {
//     console.log(index)
    
// }


let Plastik = ["gunting", "Aqua"];

let tas = ["Buku", Plastik, "Megumin"];

tas.forEach((data, index) => {
    console.log("array data1 ke-"+ index + " " + data);

    data.forEach((data2, index2) => {
        console.log(data2)
    })
})

//  menggunakan diterminal node.js
// cara menjalankan file.js 

/* 

1. terminal harus di folder tersebut
2. awalan kata harus ada kata "node" ... nama file (node test.js)
3. biasanya yg diterminal untuk kode backend

ngecek array "array.isarray(variable)" ;
*/