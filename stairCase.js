let star = 6;

let output = ""
for(let i=1; i <= star ; i++){
    for(let s=star -1 ; s>=i; s--){
        output +=" ";
    }
    for(let j=1 ; j <= i; j++){
        // console.log("*");
        output += "#"
    }
    output+="\n";
}
console.log(output);