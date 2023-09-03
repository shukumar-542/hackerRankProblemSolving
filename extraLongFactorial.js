function extraLongFactorials(n) {
  
    let a = BigInt(1);
    for(let i=2; i<=n ;i++){
        a = a * BigInt(i)
    }
    let result = a.toString()
    return result

}
extraLongFactorials(25)