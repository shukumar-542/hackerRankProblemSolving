const arr  = [4,3,5,7,9];

let sum =0
let min = arr[0];
let max = 0;
for(let i = 0 ; i<arr.length ; i++){
    // console.log(arr[i]);
    
    sum += arr[i];
    if(arr[i] > max){
        max = arr[i]
    }
    if(arr[i] < min){
        min = arr[i]
    }

}
console.log('sum',sum, 'max', max, 'min',min );