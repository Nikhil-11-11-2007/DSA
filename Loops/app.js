let prompt = require("prompt-sync")()

// que 16

// let n = Number(prompt("Enter number "))

// function naturalNumbers(n) {
//    // declare another function  and print number directly.

//    function print(num) {
//       if (num <= 0) return
//       print(num - 1)
//       console.log(num)
//    }

//    print(n)


// }

// naturalNumbers(n)

// que 17

/**
 * Recursively prints natural numbers from n to 1, separated by a space.
 * @param {number} n
 */

// let n = Number(prompt("Enter number "))

// function printNumbers(n) {
//    //Write your code here
//    if (n <= 0) return

//    process.stdout.write(n + " ")
//    printNumbers(n - 1)

// }

// printNumbers(n)

// que 18

// let n = +prompt("Enter number to get sum ")

// function sumUpToN(n) {
//     // Write your logic here
//    if (n <= 0) return 0 // ye 0 de rha hai kyuki last mai jb fn call hoga sumUpToN(0) to ye isi wajha se 0 diya hai

//    return sumUpToN(n - 1) + n
//    // console.log(n)


// }

// console.log(sumUpToN(n))

// que 19

// let n = +prompt("enter number to get factorial ")

// function factorial(n) {

//    let count = 1

//    for (let i = 1; i <= n; i++) {
//       count *= i
//    }

//    return count

// }

// console.log(factorial(n))

// que 20

// let n = +prompt("enter number to get factorial ")

// function printFactors(n) {
//    // Write your logic here
//    for(let i = 1; i<=n; i++) {
//       if(n%i === 0) console.log(i)
//    }

// }

// printFactors(n)

// que 21

// let start = +prompt("Enter starting number")
// let end = +prompt("Enter ending number")

// function sumEvenOddInRange(start, end) {
//    // Write your logic here
//    let evenSum = 0
//    let oddSum = 0
//    if (start > end) [start, end] = [end, start]

//    for (let i = start; i <= end; i++) {
//       if (i%2 === 0) evenSum += i
//       else if(i%2 !== 0) oddSum += i
//    }

//    return [evenSum,oddSum]

// }

// console.log(sumEvenOddInRange(start, end))