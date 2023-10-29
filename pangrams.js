const s = "e Promptly judged antique ivory buckles for the next prize";


function checkPangram(s){
    const lowerWord = s.toLowerCase()
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (const letter of alphabet ) {
        if(lowerWord.indexOf(letter) === -1){
           return false 
            
        }
    }
    return  true;
}
if(checkPangram(s)){
    console.log('pangram');
}else{
    console.log("not pangram");
}