const c = [0, 0, 1, 0, 0, 1, 0];
let count = 0;
let i = 0

while( i < c.length-1){
    if(c[i + 2] === 0){
        i +=2
        count +=1
    }else{
        i += 1
        count +=1
    }
}
console.log(count);


// for (let i = 0; i < c.length; ) {
//     if (c[i + 2] === 0) {
//         count += 1
//         console.log("upper",i);
//         i = i + 2
//         console.log("lower",i);

//     }
//     else {
//         count +=1
//     }
// }
// console.log(count);