const s = "saveChangesInTheEditor"
let total = 1
const isCapital = (letter) => {
    return letter === letter.toUpperCase()
}

for (let i = 0; i < s.length; i++) {
    if(isCapital(s[i])){
        total++
    }
}
console.log(total);