const d1  = 9
const m1  = 6
const y1  = 2015
const d2  = 6
const m2  = 6
const y2  = 2015


if(y1 !== y2){
    return 10000
}else if(m1 !== m2){
    return 500 * (m1 - m2)
}else {
    return 15 * ( d1 - d2)
}

