const string  = [ 'aba', 'baba', 'aba', 'xzxb' ]
const queries =  [ 'aba', 'xzxb', 'ab' ];

// let count  = 0 
let result = []
for(query of queries){
    const count =  string.filter(st => st === query)
    result.push(count.length)

}
console.log(result);