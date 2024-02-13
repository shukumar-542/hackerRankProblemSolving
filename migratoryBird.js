const arr = [1, 2, 3, 4, 5 ,4 ,3, 2, 1, 3, 4]


let totalSee = {};
for (let bird of arr) {
    if (totalSee[bird]) {
        totalSee[bird]++;
    } else {
        totalSee[bird] = 1;
    }
}

let countBird = totalSee[1];
let frequentBird = 1;

console.log(totalSee);

for (const num in totalSee) {
    console.log('count', countBird);
    console.log('total', totalSee[num]);
    console.log(frequentBird);

    if (countBird < totalSee[num]) {
        console.log('num', num);
        frequentBird = num;
    }
}

console.log(frequentBird);


