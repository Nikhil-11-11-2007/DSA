let prompt = require("prompt-sync")()
// que 1
// let num = +prompt("Enter number ")

// function naturalNumbers(num) {
//     if (num == 0) return;
//     process.stdout.write(num + " ")
//     naturalNumbers(num - 1)
//     console.log(num)
// }

// naturalNumbers(num)

// que 2

// function sumUptoN(n) {
//     if (n == 1) return n;
//     return n + sumUptoN(n - 1)
// }

// console.log(sumUptoN(1))

// que 3

// function factorialOfN(n) {
//     if (n == 1) return n;
//     return n * factorialOfN(n - 1)
// }

// console.log(factorialOfN(5))

// que 4

/**
 * @param {number} n
 * @return {void}
 */
// var fibonacci = function (n) {
//     // method 1 
//     // let first = 0;
//     // let second = 1;

//     // process.stdout.write(first + " " + second + " ");

//     // for (let i = 0; i < n - 2; i++) {
//     //     let third = first + second;

//     //     process.stdout.write(third + " ");

//     //     first = second;
//     //     second = third;
//     // }

//     // ye number mai output dega loop se hi

//     // if (n <= 1) return n;

//     // let first = 0;
//     // let second = 1;

//     // for (let i = 0; i < n - 1; i++) {
//     //     let third = first + second;

//     //     first = second;
//     //     second = third;
//     // }

//     // return second;

//     // method 2 recursion real use

//     let first = 0, second = 1

//     process.stdout.write(first + " " + second + " ")

//     function generate(n, first, second) {
//         if (n <= 0) return;
//         let third = first + second
//         process.stdout.write(third + " ")
//         first = second
//         second = third

//         generate(n - 1, first, second)
//     }

//     generate(n - 2, first, second)


// };

// fibonacci(5)

// que 5 leetcode -> 509

/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(3))

//  que 6 

function sumOfDigits(n) {
    // Write your logic here
    if (n < 10) return n;

    return (n % 10) + sumOfDigits(Math.floor(n / 10));

}

console.log(sumOfDigits(936))