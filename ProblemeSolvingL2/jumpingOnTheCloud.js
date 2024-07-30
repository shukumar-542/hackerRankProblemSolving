
const c = [
    0, 0, 1, 0,
    0, 1, 1, 0
]
const k = 2;

let energy = 100;
let jump = [(6 + k) % c.length]
// console.log("jump",jump);
if(c[jump] === 1){
    energy -= 3
}else{
    energy -= 1
}
while(c[jump] != 0){
    console.log('object');
    jump = [(jump + k) % c.length]
    console.log(jump);
}
console.log("energy",energy);