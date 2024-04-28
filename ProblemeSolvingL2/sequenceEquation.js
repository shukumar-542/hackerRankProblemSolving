const p = [4, 3, 5 ,1, 2 ]


const arrMaxValue = Math.max(...p)

const sequenceArray = []
for(let i = 1 ; i<= arrMaxValue ; i++){
    const pos = p.indexOf(i)+1
    const seq = p.indexOf(pos)
    sequenceArray.push(seq+1)
}
console.log(sequenceArray);
