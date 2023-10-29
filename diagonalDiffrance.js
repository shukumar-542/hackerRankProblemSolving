const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]

let firstDiagonal = 0;
let secondDiagonal = 0;
for(let i=0; i<arr.length; i++){
    firstDiagonal  += arr[i][i]
    secondDiagonal += arr[i][arr.length - 1 -i]
}
let diagonalDifference = firstDiagonal - secondDiagonal
console.log(diagonalDifference);