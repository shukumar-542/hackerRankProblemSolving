const unSorted = ["1", "30", "4", "21", "100000"]

// unSorted.sort((a,b)=>{
//     return parseInt(a) - parseInt(b)
// })
// console.log(unSorted);
for (let i = 0; i < unSorted.length; i++) {
    const element = unSorted[i];
    // console.log(element);
    
}
let stringNumbers = ["2", "3", "1", "4", "6"];

for (let i = 0; i < unSorted.length; i++) {
  for (let j = 0; j < unSorted.length - 1 ; j++) {
    if (parseInt(unSorted[j]) > parseInt(unSorted[j + 1])) {
      let temp = unSorted[j];
      unSorted[j] = unSorted[j + 1];
      unSorted[j + 1] = temp;
    }
  }
}

console.log(unSorted);