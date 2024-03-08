const arr = [1,1,0,-1,-1]


const arrLength =  arr.length;
let positiveNumber = 0 ;
let negativeNumber = 0;
let zeros = 0;
for(let number of arr){
    if(number > 0){
        positiveNumber++;
    }
    else if(number < 0 ){
        negativeNumber++;
    }else{
        zeros++
    }
}
const positiveRatio = (positiveNumber / arrLength ).toFixed(6)
const negativeRatio = (negativeNumber / arrLength ).toFixed(6)
const zeroRatio = (zeros / arrLength ).toFixed(6)

console.log(positiveRatio);
console.log(negativeRatio);
console.log(zeroRatio);