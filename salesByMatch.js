const arr = [10 ,20, 20, 10 ,10,20 ]
const newArr = arr.sort()
// console.log(newArr);

let count = 0;
for(let i=0; i<newArr.length;i++){
   
       if(newArr[i]=== newArr[i+1]){
        count++
        i++
       }
   
}
console.log(count);