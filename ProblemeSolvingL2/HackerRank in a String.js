const arr = ['h','a','c','k','e','r','r','a','n','k']
const s =  "hackerworld"

for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if(s[i] === arr[0]){

        arr.shift()
    }
    
}
if(arr.length ===  0){
    console.log('Yes');
}else {
    console.log("NO");
}