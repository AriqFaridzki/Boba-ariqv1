
const {performance} = require('perf_hooks')
;
function linearO(n){

    const start = performance.now();
    let i = 1;
    let index = 0;

while(i <= n){
    i = i*2

    if(i >= n){
        console.log("number of iteration :",index)
        console.log("Target :",n)
        console.log("result :",i)

        const duration = performance.now() - start;
        console.log("time executed :",duration)
    }
    index++
    }
}


// linearO(9);

function squareO(n){
    for (let i = 0; i < n; i++) {
        document.write(`<h1>${i}</h1>`)
        for (let j = 0; j < n; j++) {
            document.writeln(`<h1>${j}</h1>`)  
        }    
    }
}

squareO(4);