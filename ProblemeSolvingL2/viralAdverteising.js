const n =  3;

let like = 0;   
let shared = 5
let totalLike = 0
for(let i =0 ; i< n ; i++){
    like = Math.floor(shared / 2);
    shared = like * 3;
    totalLike += like
}
console.log(totalLike);