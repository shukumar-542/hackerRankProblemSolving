const arr = [ 4, 5, 3, 7, 2 ]
let left = []
let right = []
let equal = arr[0]
for (const number of arr) {
    console.log(number);
    if(number > equal){
        right.push(number)
    }else if(number < equal){
        left.push(number)
    }
}

const result = [...left, equal , ...right];
console.log(result);