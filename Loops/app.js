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

// function sumUpToN(n) {
//     // Write your logic here
//     let count = 0
//     for(let i = 0; i<=n; i++){
//         count += i
//     }

//     return count

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

// que 22 

// let tabel = +prompt("Enter a num to a table of an number ")

// function printTable(table) {
//     for(let i = 1; i<=10; i++){
//         console.log(`${tabel} * ${i} = ${i*tabel}`)
//     }
// }

// printTable(tabel)

// que 23

// let n = +prompt("Enter number to check wheather is prime or not ")

// function isPrime(n) {
//     // Write your logic here

//      this one methon is best

//     if (n <= 1) return "Not Prime"
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return "Not Prime"
//     }
//     return "Prime"

// 2nd method 

// let count = 0;
// for(let i = 1; i<=n; i++) {
//     if(n%i === 0) count++
// }

// if(count === 2) return "Prime"
// return "Not Prime"

// }

// console.log(isPrime(n))

// que 24

// let a = +prompt("Enter Number: ")
// let b = +prompt("Enter power of an Number: ")

// function calculatePower(a, b) {

//     let pow = 1;
//     for(let i = 1; i<=b; i++) {
//         pow *= a
//     }

//     return pow

// }

// console.log(calculatePower(a,b))

// while loop 


// que 25

// let n = +prompt("Enter number to gave sum ")

// function sumOfDigits(n) {
//     // Write your logic here
//     let sum = 0
//     while (n > 0) {
//         let rem = n % 10
//         let divident = Math.floor(n / 10)
//         sum += rem
//         n = divident
//     }
//     return sum

// }

// console.log(sumOfDigits(n))

// que27 

// let n = +prompt("Enter Number to check is Automorphic or not ")

// function isAutomorphic(n) {
//     // Write your logic here
//     let count = 0, copy = n, sq = Math.pow(n,2)

//     while(n > 0) {
//         count++
//         n = Math.floor(n/10)
//     }

//     if(copy === sq%Math.pow(10,count)) return "Yes"
//     else return "No"

// }

// console.log(isAutomorphic(n))

// que 28

// let n = +prompt("Enter Number to Reverse ")

// function reverseNumber(n) {
//     // Write your logic here
//     let reverse = 0
//     while (n > 0) {
//         let rem = n%10
//         reverse = (reverse * 10) + rem 
//         n = Math.floor(n/10)
//     }

//     return reverse
// }

// console.log(reverseNumber(n))

// que 29

// let n = +prompt("Enter number ")

// function isStrongNumber(n) {
//     // Write your logic here
//     let copy = n, sum = 0

//     while(n > 0) {
//         let rem = n%10
//         let fact = 1
//         let value = rem

//         while(value > 0) {
//             fact *= value
//             value--
//         }

//         sum += fact
//         n = Math.floor(n/10)
//     }

//     if(sum === copy) return "Strong Number"
//     else return "Not a Strong Number"

// }

// console.log(isStrongNumber(n))


// que 30

// let n = prompt("Enter number ")

//  method 1
// function isIsbnNumber(n) {

//     let count = 0, copy = n

//     while (n > 0) {
//         count++
//         n = Math.floor(n / 10)
//     }

//     console.log(count)

//     if (count !== 10) return "Not ISBN"
//     else {
//         let sum = 0
//         while (copy > 0) {
//             let rem = copy % 10
//             sum += count * rem
//             count--
//             copy = Math.floor(copy/10)
//         }

//         if (sum % 11 === 0) return "ISBN Number"
//         else return "Not ISBN"
//     }

// }

// method 2 this one is used for industry level

// function isIsbnNumber(n) {

//     if(n.length !== 10) return "Not ISBN"
//     let count = 0, sum = 0
//     while(count < 10){
//         if(isNaN(n[count])) return "Not ISBN"

//         sum += Number(n[count]) * (count + 1) 
//         console.log(sum)
//         count++
//     }

//     if(sum%11 === 0) return "ISBN Number"
//     else return "Not ISBN"

// }

// console.log(isIsbnNumber(n))


// do-while loop

// que 31
// guess the correct number

// let computer = Math.floor((Math.random() * 100) + 1)
// console.log(computer)
// let user, attempts = 0

// do {
//     attempts++
//     user = +prompt(`Enter a number between 1 to 100 You have 5 Attempts ${attempts}:  `)
//     if (user > 100 || user < 1) console.log("Please Enter number between 1 to 100")
//     else if (user > computer) console.log("Too large")
//     else if (user < computer) console.log("Too small")
//     else if (user == computer) console.log("Congurates! ", "You guess correct number", `Attempts ${attempts}`)
//     else console.log("Invalid number")
// } while (user != computer && attempts !== 5)

// Assignment of loops
// que 32

// let n = +prompt("Enter Harshad number ")

// class Solution {

//     checkHarshad(n) {

//         // write your code here

//         let copy = n
//         let sum = 0
//         while (n > 0) {
//             let rem = n%10
//             sum += rem
//             n = Math.floor(n/10)
//         }

//         if(copy%sum === 0) return "Harshad Number"
//         else return "Not Harshad Number"

//     }

// }

// let checkHar = new Solution()

// console.log(checkHar.checkHarshad(n))

// que 33

// let n = +prompt("Enter Number ")

// class Solution {

//     checkAbundant(n) {

//         // write your code here
//         let sum = 0
//         for (let i = 1; i <= n / 2; i++) {
//             if (n % i === 0) sum += i
//         }

//         if (sum > n) return "Yes"
//         else return "No"

//     }

// }

// let abundant = new Solution()

// console.log(abundant.checkAbundant(n))

// que 34

// let n = +prompt("Enter Number ")

// class Solution {

//     primeFactors(n) {

//         // write your code here
//         if (n === 0 || n === 1) return "No prime factors"
//         for (let i = 2; i <= n; i++) {
//             while (n % i === 0) {
//                 process.stdout.write(i + " ")
//                 n = Math.floor(n / i)
//             }
//         }

//         return ""
//     }

// }

// let primefac = new Solution()

// console.log(primefac.primeFactors(n))

// que 35

// let n = +prompt("Enter Number ")

// class Solution {

//     checkNeon(n) {

//         // write your code here
//         let squ = n * n
//         let sum = 0
//         while (squ > 0) {
//             let rem = squ % 10
//             sum += rem
//             squ = Math.floor(squ / 10)
//         }

//         if (sum === n) return "Yes"
//         else return "No"

//     }

// }

// let neon = new Solution()

// console.log(neon.checkNeon(n))

// que 36

// let n = +prompt("Enter Number ")

// class Solution {

//     checkArmstrong(n) {

//         // write your code here
//         let temp = n
//         let copy = n
//         let count = 0
//         while (n > 0) {
//             count++
//             n = Math.floor(n / 10)
//         }

//         let sum = 0

//         while (copy > 0) {
//             let rem = copy % 10
//             sum += Math.pow(rem, count)
//             copy = Math.floor(copy / 10)
//         }

//         if (temp === sum) return "Armstrong"
//         else return "Not Armstrong"

//     }

// }

// let armStrong = new Solution()

// console.log(armStrong.checkArmstrong(n))

// que 37

// let n = +prompt("Enter number")

// function printPattern(n) {
//     // Write your code here
//     for(let i = 1; i<=n; i++){
//         for(let j = 1; j<=i; j++){
//             process.stdout.write("* ")
//         }
//         console.log()
//     }
// }

// printPattern(n)

// que 38

// let n = +prompt("Enter number ")

// function printRightTriangleNumbers(n) {
//     // Write your logic here
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write(j + " ")
//         }
//         console.log()
//     }
// }

// printRightTriangleNumbers(n)

// que 39

// let n = +prompt("Enter number ")

// function printRightTriangleAlphabets(n) {
//     // Write your logic here
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= i; j++) {
//             let ch = String.fromCharCode(64 + j)
//             process.stdout.write(ch + " ")
//         }
//         console.log()
//     }
// }

// printRightTriangleAlphabets(n)

// que 40

// let n = +prompt("Enter number ")

// function printPattern(n) {
//     // Write your code here
//     for(let i = 1; i<=n; i++){
//         for(let j = i; j<=n; j++){
//             process.stdout.write(" *")
//         }
//         console.log()
//     }

// }

// printPattern(n)

// que 41

// let n = +prompt("Enter number ")

// function printMirroredRightTriangle(n) {
//     // Write your logic here
//     // inverted triangle
//     for (let i = 1; i <= n; i++) {
//         for(let k = i; k<=n-1; k++){
//             process.stdout.write("  ")
//         }
//         // right angle tringle
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write(" *")
//         }
//         console.log()
//     }

// other method

//     for(let i = 1; i<=n; i++){
//     for(let j = 1; j<=n-i; j++){
//         process.stdout.write("  ")
//     }
//     for(let k = 1; k<=i; k++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }

// }

// printMirroredRightTriangle(n)

// que 42

// let n = +prompt("Enter number ")

// function printXShapePattern(n) {
//     // Write your logic here
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if ((i === j) || (i + j === n + 1)) process.stdout.write("* ")
//             else process.stdout.write("  ")
//         }
//         console.log()
//     }

// }

// printXShapePattern(n)

// que 43

let n = +prompt("Enter number ")

function printVShapePattern(n) {
    // Write your logic here

    // for (let i = 1; i <= n; i++) {
    //     for (let j = 1; j <= n; j++) {
    //         if (i === j) {
    //             process.stdout.write(" *")
    //         }
    //         else {
    //             process.stdout.write(" ")
    //         }
    //     }

    //     for (let k = 1; k <= n - 1; k++) {
    //         if (i + k === n) {
    //             process.stdout.write("*")
    //         }
    //         else {
    //             process.stdout.write(" ")
    //         }
    //     }
    //     console.log()
    // }

    // 2nd method this one is optmized

    for(let i = 1; i<=n; i++){
        for(let j = 1; j<= 2*n-1; j++){
            if((i === j) || (i+j === 2*n)){
                process.stdout.write("*")
            }
            else{
                process.stdout.write(" ")
            }
        }
        console.log()
    }

}

printVShapePattern(n)

