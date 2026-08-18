let prompt = require("prompt-sync")()

// let str = "sheryiansh"

// rule string mai actual data kabhi change nhi hota

// console.log(str.length)
// console.log(str[5])
// console.log(str.slice(0,4), str.slice(5)) // jha tk ka print krwana ho uske ange tk a index lo or koi ek hi 
// index di to wha se end tk ka khud prin kr ke dega
// console.log(str.slice(-10, -1)) // ye piche se de sakta hai charactors
// console.log(str.substring(2,6), str.substring(6,2)) same as slice but ye index ko swap kr deta hai
//  6,2 haai to 2,6 kr dega but -neg mai ye kam nhi krta
// console.log(str.concat(" coading", " school")) isne ye sheryiansh coading school to add kr diya
// console.log(str) but actual data change nhi hua same seryiansh hi hai
//console.log(str.trim()) // ye spaces ko hatata hai but actual mai ste=ring ayenge 
//console.log(str) // but re-asign kr sakete like str = str.trim() tb space nhi ayenge  ab re-asign kiya hai is liye
// console.log(str.indexOf("sher")) jo first char hoga uski index btyega s ki 0
// console.log(str.includes("yia")) //ye check krta ye exist krte hai ya nhi

// let string = "hello_how_are you fine"

// console.log(string.split("_"))
// console.log(string.charAt(3)) // ye us index ka charactor la kr de dega aise bhi kr sakte hai string[3]

// que 63

let str = prompt("enter your name")

function printEachChar(str) {
    // Write your logic here
    for(let i = 0; i<str.length; i++){
        console.log(str.charAt(i))
    }

}

printEachChar(str)