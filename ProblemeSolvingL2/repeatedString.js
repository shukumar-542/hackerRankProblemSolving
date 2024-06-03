const s = 'gfcaaaecbg'
const n = 547602

let count = 0
for(let i = 0 ; i<s.length; i++){
    if(s[i] === 'a'){
        count++
    }
}
if(s.length === 1 && s ==='a'){
    return n
}else{
    let result = ((n* count)/ s.length)
    // return result
    console.log(result);
}

function repeatedString(s, n) {
    const divisionFloor = Math.floor(n / s.length);
    const mod = n % s.length;
    let count = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "a") {
        if (i < mod) {
          count += 1;
        }
  
        count += divisionFloor;
      }
    }
  
    return count;
  }