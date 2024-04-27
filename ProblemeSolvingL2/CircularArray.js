const a = [1, 2, 3]
const k = 2
const queries = [ 1, 2]




for (let i = 0; i < k; i++) {
    const lastElement = a.pop();
    a.unshift(lastElement)
}

let result = []
for(let i=0 ; i<queries.length; i++){
    result.push(a[queries[i]])
}
console.log(result);


