const myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];


const sortedArr = myArray.sort();
console.log(sortedArr);
const arrLength = sortedArr.length;
if(arrLength % 2 === 1 ){
    console.log(sortedArr[Math.floor(arrLength / 2)]);


}else{
    console.log('even');
}