const sticks = [1,6 ,3 ,2,4,5]

sticks.sort((a,b)=> a -b);
for(let i = sticks.length - 1 ; i >=0 ; i--){
    const first = sticks[i - 2]
    const second = sticks[i - 1]
    const third = sticks[i]
    if(first + second > third){
        return [first, second, third]
    }
    return [-1]
}
