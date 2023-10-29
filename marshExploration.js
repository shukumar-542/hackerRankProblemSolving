const s = "SOSSPSSOSSOR";

// console.log(s.length);
let sum = 0
for(let i=0 ; i < s.length; i+=3){
    // console.log(s[i]+1)
    if(s[i] !== "S"){
        sum +=1
    }
    if(s[i+1] !== "O"){
        sum +=1
    }
    if(s[i+ 2] !== "S"){
        sum +=1;
    }

}
console.log(sum);