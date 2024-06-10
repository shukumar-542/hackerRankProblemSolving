const n = 15;
const c = 3;
const m = 2;



let buyChocolate = Math.floor(n / c);

let totalWrapper = buyChocolate;
while(totalWrapper >= m){
    let exchangeChocolate = Math.floor( totalWrapper / m) 
    totalWrapper  = (totalWrapper % m ) +  exchangeChocolate
    buyChocolate += exchangeChocolate
}
console.log(buyChocolate);

// function chocolateFeast(n, c, m) {
//     let eaten = Math.floor(n / c);
//     let wrappers = eaten;
//     while (wrappers >= m) {
//       let bars = Math.floor(wrappers / m);
//       wrappers = wrappers % m + bars;
//       eaten += bars;
//     }
//     return eaten;
//   }