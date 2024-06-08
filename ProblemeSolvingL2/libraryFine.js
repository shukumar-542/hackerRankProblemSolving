const d1  = 28
const m1  = 2
const y1  = 2015
const d2  = 15
const m2  = 4
const y2  = 2015

// 28 2 2015
// 15 4 2015

if(m1 === m2 && y1 === y2 && d1 > d2){
    console.log(15 * (d1 - d2))
}
else if(y1 === y2 && m1 !== m2 && m1 > m2){
    console.log( 500 * (m1- m2));
}else if(y1 !== y2 && y1 > y2){
    console.log(10000);
}else if(d1 <= d2 || y1 < y2 || m1 > m2){
    console.log(0);
}else{
    console.log(0);
}



// if(y1 !== y2){
//     return 10000
// }else if(m1 !== m2){
//     return 500 * (m1 - m2)
// }else {
//     return 15 * ( d1 - d2)
// }

