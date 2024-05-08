let  arr = [4, 5 ,10, 8 ,11]

let result = [arr.length];




while (arr.length > 0) {
    const minValue = Math.min(...arr)
    
    arr = arr.filter(num => num != minValue).map(number => number - minValue)
    if(arr.length !== 0){

        result.push(arr.length)
    }
    
}
console.log(result);