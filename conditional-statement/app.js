let prompt = require("prompt-sync")()

// que 7

// let a = Number(prompt("Enter number A "))
// let b = Number(prompt("Enter number B "))

// function findGreatest(a, b) {
//     // Write your code here

//     if(a > b) return a
//     else return b

// }

// console.log(findGreatest(a,b))

// que 8

// let num = Number(prompt("Enter number to check is Even or Odd "))

// function checkEvenOrOdd(num) {
//     // Write your logic here
//     if (num % 2 === 0) return console.log("Even")
//     else return console.log("Odd")
    
// }

// checkEvenOrOdd(num)

// que 9

// let name = prompt("Enter your name ")
// let age = Number(prompt("Enter your age "))

// function checkVoterEligibility(name, age) {
//     // Write your logic here
//     if(age >= 18) return `${name} is a valid voter.`
//     else return `${name} is not a valid voter.`
    
// }

// console.log(checkVoterEligibility(name,age))

// que 10

// let year = Number(prompt("Enter year to check is Leap year or not "))

// function isLeapYear(year) {
//     // Write your logic here
//     if((year%100 !== 0 && year%4 === 0) || year%400 === 0) return "Leap Year"
//     else return "Not a Leap Year"
    
// }

// console.log(isLeapYear(year))

// que 11

// let amount = +prompt("Enter amount to gave an discount ")

// function calculateFinalAmount(amount) {
//     // Write your logic here

//     // 1st method
//     // if (amount >= 0 && amount <= 5000) return amount
//     // else if (amount >= 5001 && amount <= 7000) {
//     //     return amount * (1 - 5 / 100)
//     // }
//     // else if (amount >= 7001 && amount <= 9000) {
//     //     return amount * (1 - 10 / 100)
//     // }
//     // else return amount * (1 - 20 / 100)

//     // second method 

//     // let discount = 0

//     // if (amount >= 0 && amount <= 5000) discount = 0
//     // else if (amount >= 5001 && amount <= 7000) {
//     //     discount = 5
//     // }
//     // else if (amount >= 7001 && amount <= 9000) {
//     //     discount = 10
//     // }
//     // else discount = 20

//     // // return amount*(1 - discount/100)  // ye bhi shi hai
//     // return amount - (discount*amount)/100

// }

// console.log(calculateFinalAmount(amount))

// que 12

// let unit = +prompt("enter unit ")

// function calculateElectricityBill(unit) {
//     // Write your logic here
//     if(unit >= 0 && unit <= 100) return unit * 4.2
//     else if(unit >= 101 && unit <= 200) {
//         return 100*4.2 + (unit - 100)*6
//     }
//     else if(unit >= 201 && unit <= 400) {
//         return 100*4.2 + 100*6 + (unit - 200)*8
//     }
//     else if(unit > 400) {
//         return 100*4.2 + 100*6 + 200*8 + (unit - 400)*13
//     }
// }

// console.log(calculateElectricityBill(unit))

// que 13

function findGreatest(a, b, c) {
    // Write your logic here
    if(a >= b) return a
    else if(b >= a && b >= c) return b
    else return c
}

console.log(findGreatest(3,7,5))