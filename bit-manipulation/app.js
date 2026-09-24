let prompt = require("prompt-sync")();

// que 1 convert decimal into binary

// let num = +prompt("Enter number ")
// let ans = 0
// let place = 1


// while(num > 0){
//     let bit = num%2;
//     ans += bit * place
//     place *= 10
//     num = Math.floor(num/2)
// }

// 2nd method according to place value

// while(num > 0){
//     let bit = num%2;
//     ans = bit + ans
//     num = Math.floor(num/2)
// }

// console.log(ans)

// que 2 convert binary into decimal

// let bin = +prompt("Enter a number ")
// let count = 0
// let ans = 0

// while (bin > 0) {
//     let bit = bin % 10;
//     ans += bit * Math.pow(2, count);
//     bin = Math.floor(bin / 10);
//     count++;
// }

// console.log(ans)

// & (and)
// 0+0 =false , 0+1 =false , 1+0 = false , 1+1 = true

// | (or)
// 0+0 =false , 0+1 =true , 1+0 = true , 1+1 = true

// ^ (XOR)
// // 0+0 =false , 0+1 =true , 1+0 = true , 1+1 = fase

// >> (right shift operator)
// ex => 10 >> 2
// 1010>>2 ismai 10 ko hi binary mai convert krte hai ab binary wale 1010 ko rigth side sabhi ko 2 bar shift krenge to 10 milega
// to iska ans 2 hoga kyuki 10 binary 2 ka hota hai // short trike sedhe lase ke element hata do  jaise 2 bola hai to do or hote to or hata sete right side se

// <<(left shift operator)
//  ex => 10<<2
// 1010 >> 2 ismai left side do blank bit add krenge fir sabhi ko left side shift krenge 
// ans milega 101000 // short tick end mai jina bola ho jaise 2 hai to 2 zero add kr denge and mai

// que 3 psueduo code
// let array1 = [2, 3, 56, 34];
// let a = 3, n = 4;

// for (let k = 0; k <= n - 1; k++) {
//     array1[n] = array1[0];
//     for (let j = 0; j <= n - 1; j++) {
//         array1[j] = array1[j + 1];
//     }
// }

// for (let k = 0; k <= n - 1; k++) {
//     console.log(array1[k]);
// }

// que 4

// let arr = [
//     [0, 2],
//     [1, 3]
// ];

// arr[0][0] = arr[0][1] & arr[1][0];

// if ((arr[0][1] & 6) < arr[0][1]) {
//     arr[1][1] = 4 + arr[1][1];
// }

// arr[0][1] = (arr[1][1] + 4) ^ arr[0][1];

// if ((1 + 3) < (7 - arr[1][1])) {
//     arr[0][1] = (arr[0][1] + 4) + arr[0][1];
// } else {
//     arr[0][1] = (8 + 11) & arr[1][1];
// }

// console.log(arr[1][1] + arr[0][1] + arr[1][1]);

// que 5

// function swapNumbers(a, b) {
//     // Write your logic here
//     a = a^b
//     b = a^b
//     a = a^b

//     return [a,b]

// }

// console.log(swapNumbers(10,20))

// que 6

// function checkEvenOrOdd(num) {
//     // Write your logic here
//     // if (num % 2 === 0) return "Even"
//     // else return "Odd"

//     if((num&1) === 0) return "Even"
//     else return "Odd"
// }

// console.log(checkEvenOrOdd(4))

// que 7 check if ith bit is set bit or not

// function chekSetbit(n,i) {
//     if((n>>i) & 1 === 1) return "setBit"
//     else return "not setBit"
// }

// console.log(chekSetbit(5,2))

// que 8 flip ith bit

// function flipBit(n, i) {
// let ans = n^(1<<i)
// return ans
// }

// console.log(flipBit(5, 2))

// que 9 leetcode -> 231

var isPowerOfTwo = function(n) {
    if((n&(n-1)) === 0 && n > 0) return true
    else return false
};

console.log(isPowerOfTwo(20))