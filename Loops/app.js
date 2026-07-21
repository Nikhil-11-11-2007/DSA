let prompt = require("prompt-sync")()

// que 16

let n = Number(prompt("Enter number "))

function naturalNumbers(n) {
    // declare another function  and print number directly.
    function printNum(num) {
      if(num > n) return
      process.stdout.write(num + " ")
      printNum(num + 1)
   }

   printNum(1)
}

naturalNumbers(n)