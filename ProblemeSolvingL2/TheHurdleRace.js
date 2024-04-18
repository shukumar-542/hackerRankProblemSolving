const height = [ 2, 5, 4, 5, 2 ];
const k = 7
let maxNumber = 0
for (const number of height) {
    if(number > maxNumber){
        maxNumber = number
    }

}

if(maxNumber <= k ){
    console.log(0);
}else{

    console.log(maxNumber- k);
}
