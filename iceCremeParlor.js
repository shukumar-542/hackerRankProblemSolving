function icecreamParlor(m, arr) {
    // Write your code here
    
    let result = [];
    for(let i=0; i<arr.length;i++){
       for(let j=i+1; j<arr.length;j++){
           if(arr[i] + arr[j] === m){
               result.push(i+1)
               result.push(j+1)
               return result;
           }
       }
    }
   

}