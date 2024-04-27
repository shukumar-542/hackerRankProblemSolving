const n = 7;
const m = 19;
const s = 2


  
const mod = m % n 
if( (mod + s -1) % n === 0){
    console.log(n);
}else{
    console.log((mod + s -1) % n)
}