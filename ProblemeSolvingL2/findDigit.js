const n = 1012

const nArr =  n.toString().split("")


let divisor = 0
for(let i = 0 ; i < nArr.length; i++){
    if( n % nArr[i] === 0){
        divisor++
    }
}
console.log(divisor);