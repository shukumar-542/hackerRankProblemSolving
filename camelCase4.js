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
        let result = '';

        for (let i = 0; i < words.length; i++) {
          const char = words[i];
          if (char === char.toUpperCase()) {
            result += ' ' + char.toLowerCase();
          } else {
            result += char;
          }
        }
      
        console.log(result.trim());
      
    }
    else{
        if(indicator === "M"){
           
            
            const word = words.split(' ');
            let result = '';
          
            for (let i = 0; i < words.length; i++) {
              const newWord = words[i];
              if (i === 0 && newWord !== 'M') {
                result += newWord.charAt(0).toUpperCase() + newWord.slice(1);
              } else {
                result += newWord.charAt(0).toUpperCase() + newWord.slice(1);
              }
            }
          
            if (indicator === 'M') {
              result += '()';
            }
          
            // return result;
            console.log(result);
            
        }

    }
    
}
// console.log(newArray);