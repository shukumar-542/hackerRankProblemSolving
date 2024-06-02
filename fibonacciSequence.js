// rules: 1,1,2,3,5,8

const fibonacciSequence = (len)=>{
    let fib = [1,1]
    for(let i = 2 ; i <= len; i++ ){
        fib[i] = fib[i - 1] + fib[i- 2]
    }
    console.log(fib);
}
fibonacciSequence(10)