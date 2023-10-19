const a = [1,2,3,1,2]

let countNumber = {}
for(let i=0 ; i < a.length; i++){
    const num = a[i];
    if(countNumber[num]){
        countNumber[num]++;
    }else{
        countNumber[num] = 1
    }
}

let findUniqueNumber;

for(let number in countNumber){
    if(countNumber[number] === 1){
        findUniqueNumber = parseInt(number);
        break
    }
}
console.log(findUniqueNumber);




// another approach for finding the unique number
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   result ^= arr[i];
// }

// console.log(result);
