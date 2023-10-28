const grade =  [ 74, 68, 39, 33 ];

const newResult = []
for (let result of grade) {
    if(result > 40){
        let rest = result % 5
        if(rest > 2){
            let add = 5 - rest
            result = add + result
            newResult.push(result)

        }else{
            newResult.push(result)
        }
    }
    else if(result >=38){
        newResult.push(40)
    }
    else{
        newResult.push(result)
    }
}
console.log(newResult);