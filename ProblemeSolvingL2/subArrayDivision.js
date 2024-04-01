const s = [ 1 ,2 ,1, 3, 2]
const d = 3
const m = 2
let count = 0

if (s.length === 1 && s[0] === d) {
    return  1;
}
for(let i =0 ; i<s.length; i++){
    let sum = 0;

    for(let j = i; j < m+i; j++){
        sum +=s[j]
    }
    if(sum === d){
        count++
    }
    
}
console.log(count);