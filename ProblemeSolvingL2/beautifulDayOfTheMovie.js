const i = 20;
const j = 23;
const k = 6

const reverseNumber = (num)=>{
    return parseInt(num.toString().split('').reverse().join(''))
    
}

let count = 0

for(let s = i ; s<= j ; s++){
    if((s - reverseNumber(s)) % k === 0){
        count++;
    }
}
console.log(count);