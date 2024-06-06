const a = 3 
const b = 9

let count = 0
for(let i = 1 ; i <= Math.floor(Math.sqrt(b)) ; i++){
    let square = i * i 
    if( square >= a && square <= b ){
        count++
    }
}
console.log(count);