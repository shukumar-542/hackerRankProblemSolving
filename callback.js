const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const posNumber = (numbers )=>{
    const newArr = []
    for (const x of numbers) {
       
        if(x >= 0){
            newArr.push(x)
        }
    }
    return newArr
}
// const  removeNeg = (x)=> x >= 0;

const result = posNumber(myNumbers);
console.log(result);