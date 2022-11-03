// let value = 70;

// if (value >= 60) {
//     console.log("lulus");
//     document.writeln("<h1>LULUS</h1>")
// }

// let namea ={
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// }

let garage =    [
    ["Mustang", "F-150", "Explorer"],
    [{
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    }, "Silverado", "Equinox"],
    ["Camry", "Highlander", "Tacoma"]
];

console.log(garage[1][0].age);

// // for(let i = 0; i < garage.length; i++){

// // for(let j = 0; j < garage[i].length; j++){

// // console.log(garage[i][j]);
// // }
// // }

// for(let val in namea){
//     console.log(`${val}: ${namea[val]}`);
// }

let menu = 'nasi goreng';

switch(menu) {
    case "nasi goreng" :
        document.writeln(`<h1> Anda memilih ${menu}</h1>
                          <h1> Harga 15K (di dalam switch case 1)</h1>`);
            switch(menu){
                case "nasi goreng" :
                    document.writeln(`<h1> Harga 15K( didalam switch case 2)</h1>`);
            }
        break;

    case "nasi goreng seafood" : 
        document.writeln(`<h1> Anda memilih ${menu}</h1>`);
        break;

    case "pecel lele" : 
        document.writeln(`<h1> Anda memilih ${menu}</h1>`);
        break;

    default : 
    document.writeln(`<h1> Menu Unavailable</h1>`);
    break;


    
}