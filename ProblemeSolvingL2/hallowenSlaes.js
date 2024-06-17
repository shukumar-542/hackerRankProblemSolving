let s = 85;
let d = 3;
let m = 6;
let p = 20;
let count = 0;
for (let i = s ; i >= m ; i--){
    if(count === 0){
        count++;
        s = s - p
    }
   if(p >= m){
    count++
    p = p - d
    s = s - p 

   }
}
console.log('count', count , 's',s);