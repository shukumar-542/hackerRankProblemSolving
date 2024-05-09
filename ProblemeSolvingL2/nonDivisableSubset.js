const  s = [278, 576, 496, 727, 410 ,124 ,338 ,149, 209, 702, 282, 718, 771, 575, 436]
k = 7

let count = 0
for(let i = 0 ; i<s.length-1; i++){
    for(let j=i+1; j<s.length; j++){
        let total =  s[i] + s[j]
        if(total % k == 0){
            count = count+ 1
        }
    }
}
console.log(count);

// let newArr = []

// let result = []
// for(let i =0; i < S.length ; i++){
//     for(let j = i+1 ; j < S.length; j++){

//         newArr.push(S[i] + S[j])

//     }
// }
// const x = newArr.filter(number => number % k)
// console.log(x.length);

