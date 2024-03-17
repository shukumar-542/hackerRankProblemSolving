let x1 =  21 
let v1 = 6
let x2 = 47
let v2 = 3
// const v2 = 2  
function kangaroo(x1, v1, x2,) {
    // Write your code here
    
    if (v1 <= v2) {
        return "NO"
    }
    
    while(x1 <= x2){
        x1 += v1
        x2 += v2
        if(x1 === x2){
            return "YES"
        }
    }
    return "NO"
}