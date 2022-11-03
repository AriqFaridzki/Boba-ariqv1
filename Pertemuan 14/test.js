let idB = document.getElementsByTagName("p")
document.get
// console.log(idB[0])

let qAll = document.querySelectorAll("p")
let body = document.querySelectorAll("body")
let kakTeguh = document.querySelectorAll("#a ol li a")[0]
let lastListRemove = document.querySelectorAll("#b ol li:last-child")

console.log(qAll)
// let style = qAll.style.color = "green"

// qAll.forEach((value, index) => {
// console.log(value[index]);
    
// })

let p = document.getElementsByTagName("p")
// console.log(p[2]);

qAll[2].innerHTML = "HELLO";
qAll[2].style.fontFamily = "Product Sans"
qAll[2].style.fontSize = "100px"

body[0].style.backgroundColor = "#fff0e5"

// kakTeguh.href = "www.google.com"
kakTeguh.setAttribute("class", "a")

let hapus = () => {
    lastListRemove
}

