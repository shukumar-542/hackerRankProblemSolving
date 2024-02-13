const arr = [10 ,20, 20, 10 ,10,20,2]

let accumulateNumber = {}
for(let number of arr){
    if(accumulateNumber[number]){
        accumulateNumber[number]++
    }else{
        accumulateNumber[number] = 1
    }
}
let pairSocks = 0
for(let value in accumulateNumber){
    let key = accumulateNumber[value]
    const pair = Math.floor(key / 2)
    pairSocks += pair;
}
console.log(pairSocks);