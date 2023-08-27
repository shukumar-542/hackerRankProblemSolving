function superReducedString(s) {
    const output = s.split('')
    for(let i=0; i<output.length;i++){
        console.log(output[i]);
    if(output[i] === output[i+1]){
        output.splice(i,2) 
        i= -1
       
    }
    }
    // console.log(output)
    return output.length === 0 ? 'Empty String' : output.join('')

}
const result = superReducedString('abbaa');
console.log('result',result);

