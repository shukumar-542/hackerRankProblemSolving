const h = [
    1, 3, 1, 3, 1, 4, 1, 3,
    2, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5,
    5, 5
]


const letterMapping = {
    'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7,
    'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15,
    'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23,
    'y': 24, 'z': 25
};


const word = 'abc'
let wordArray = []
wordArray.push(...word)

let maxNumber = 0;
wordArray.forEach((w, i )=> {
    if(h[letterMapping[w]] > maxNumber ){
        maxNumber = h[letterMapping[w]]
    }
});
const result  = maxNumber * wordArray.length
console.log(result);