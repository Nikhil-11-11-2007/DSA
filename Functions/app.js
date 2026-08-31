let prompt = require("prompt-sync")()

let n = +prompt("Enter number ")

function isStrongNumber(n) {
    // Write your logic here
    let copy = n, sum = 0

    while(n > 0) {
        let rem = n%10
        let fact = 1
        let value = rem

        while(value > 0) {
            fact *= value
            value--
        }

        sum += fact
        n = Math.floor(n/10)
    }

    if(sum === copy) return "Strong Number"
    else return "Not a Strong Number"

}

console.log(isStrongNumber(n))