const string = 
`S;V;iPad
C;M;mouse pad
C;C;code swarm 
S;C;OrangeHighlighter
`
let newArray = string.split("\n");
// console.log(newArray);
for(let newString of newArray){
    const [operation, indicator, words] = newString.split(';');
    if(operation === "S"){
        // if(indicator === "M"){
            const result = words.split(/(?=[A-Z])/).map(word => word.toLowerCase())
            // console.log(result.join(' '));
        // }
        // else if(indicator === "M"){
        //     console.log(words);
        // }
    //     console.log("from s ",operation,indicator,words);
    }
    else{
        if(indicator === "M"){
           
            
            const result = words.split(" ");
            console.log(result);
            
            
        }

    }
    
}
// console.log(newArray);