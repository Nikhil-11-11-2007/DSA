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

function sumUptoN(n) {
    if (n == 1) return n;
    return n + sumUptoN(n - 1)
}

console.log(sumUptoN(1))