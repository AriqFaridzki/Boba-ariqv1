let luasLingkaran = r =>{
    let phi = 3.14;
    console.log(phi * r * r) 
}

// luasLingkaran(10);

let luasPersegi = (luas = '12') =>{
    setTimeout( ()=>{
        console.log(luas*luas)
    },2000)
    
}

// luasPersegi()

var gangen = (n) => {
let hasil = "";
    if(n % 2 === 0){
        hasil = "hasil genap"
    } else{
        hasil = "hasil ganjil"
    }
    return hasil;  
}
// console.log(gangen(12));


let luasPersegiP = (p,l) =>{
    
    console.log(p * l) 
}

luasPersegiP(10,20);
/*


Function ada 2 macam
- function void
- function non void

-function void itu tidak akan ngasih kembalian output (di console.log bakal menghasilkan undefined)
(tidak ditampilkan hasil kembaliannya)

- function non void itu kebalikan dari function void

-kodingan dibawah return dalam scope function kode tidak akan dijalankan

-jika function bentuk hasilnya return, maka nilai return 
bisa digunakan secara fleksibel

var gangen = (n) => {
let hasil = "";
    if(n % 2 === 0){
        hasil = "hasil genap"
    } else{
        hasil = "hasil ganjil"
    }
    return hasil;  // jika console.log(hasil)
}
console.log(gangen(12)); // maka function tersebut bakal mengeluarin 
                            (console.log(console.log(hasil))) 

                            dan hasilnya bakal undefined


*/