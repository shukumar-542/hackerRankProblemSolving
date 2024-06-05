const s = 'aba'
const n = 10

/** 
step 1 : find the string length
step 2 : find the repeat a on this string;
step 3 : find out the repeat time for string
step 4 : find the remaining string
step 5 : count total repeat a

*/

const stringLength = s.length;
let count = 0;
let extraString = 0 
for(let i = 0 ; i<s.length;  i++){
  if(s[i] === 'a'){
    count++
  }
}
const repeatedTime  = Math.floor(n / s.length)
const remainingString = n - (repeatedTime * stringLength)
for(let i = 0 ; i<remainingString;  i++){
  if(s[i] === 'a'){
    extraString++
  }
}
const result = (count * repeatedTime) + extraString
console.log(result);
