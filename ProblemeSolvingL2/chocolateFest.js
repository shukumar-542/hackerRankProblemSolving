const n = 7;
const c = 3;
const m = 2;

let eatsChocolate = 0
let secondExchange = 0
const spentChocolate = Math.floor(n / c);
const exchangeChocolate = Math.floor(spentChocolate / m)
console.log();
const restWrapper = spentChocolate % m
if (restWrapper + exchangeChocolate >= m) {
    const additionalChocolate = restWrapper + exchangeChocolate
    secondExchange = additionalChocolate / 2;


}
eatsChocolate = secondExchange + exchangeChocolate + spentChocolate;
console.log(eatsChocolate);
