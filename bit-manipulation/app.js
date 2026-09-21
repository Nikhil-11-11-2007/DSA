let prompt = require("prompt-sync")();

// que 1 convert decimal into binary

let num = +prompt("Enter number ")
let ans = 0
let place = 1

// while(num > 0){
//     let bit = num%2;
//     ans = bit + ans
//     num = Math.floor(num/2)
// }

// 2nd method according to place value

while(num > 0){
    let bit = num%2;
    ans += bit * place
    place *= 10
    num = Math.floor(num/2)
}

console.log(ans)

// que 2 convert binary into decimal

// let bin = +prompt("Enter a number ")
// let count = 0
// let ans = 0

// while(bin > 0){
//     let bit = bin%10;
//     ans += bit * Math.pow(2,count);
//     bin = Math.floor(bin/10);
//     count++;
// }

// console.log(ans)

// & (and)
// 0+0 =false , 0+1 =false , 1+0 = false , 1+1 = true

// | (or)
// 0+0 =false , 0+1 =true , 1+0 = true , 1+1 = true

// ^ (XOR)
// // 0+0 =false , 0+1 =true , 1+0 = true , 1+1 = fase