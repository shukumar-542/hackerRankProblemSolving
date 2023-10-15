
function recursive(time){
    if(time === 0 ){
        return;
    }
    console.log(time);
    recursive(time - 1)

}
// recursive(10)

// sum of number using recursive function;


function sumOfNumber(number){
    if(number === 1){
        return 1 
    }
    return number + sumOfNumber(number - 1);
}
const result = sumOfNumber(5);
// console.log(result);

//sum of number of array
const sumOfArray =(arr,lastIndex)=>{
    if(lastIndex < 0){
        return 1 
    }
    // console.log(arr,lastIndex);
    return arr[lastIndex]  + sumOfArray(arr, lastIndex - 1 )

    
}
const arr = [1,2,3,4,5]
const arraySum = sumOfArray(arr , arr.length - 1);
console.log(arraySum);






