const n = 12;
const p = 9;

let TotalFlip = n / 2;
let leftToRight = Math.floor(p / 2);
let rightToLeft  = TotalFlip - leftToRight;
console.log(Math.min(leftToRight ,rightToLeft));