const countVowel  = (string)=>{
    let count = 0 
    string = string.toLowerCase()
    for(let i = 0 ; i< string.length; i++){
        if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
            count++
        }

    }
    return count
}

const result = countVowel('Happy New Year');
console.log(result);