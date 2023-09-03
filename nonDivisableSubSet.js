
function nonDivisibleSubset(k, s) {
    let count = 0
    for(let i = 0 ; i<s.length-1; i++){
        for(let j=i+1; j<s.length; j++){
            let total =  s[i] + s[j]
            if(total % k == 0){
                count = count+ 1
            }
        }
    }
    return count;

}