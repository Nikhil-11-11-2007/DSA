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

// let str = prompt("enter your name")

// function printEachChar(str) {
//     // Write your logic here
//     for(let i = 0; i<str.length; i++){
//         console.log(str.charAt(i))
//     }

// }

// printEachChar(str)

// que 64

// let str = prompt("enter your name ")

// function reverseString(str) {
//     // Write your logic here
//     let string = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         string += str[i]
//     }

//     return string


// }
// console.log(reverseString(str))

// que 65 

// let str = prompt("enter your name ")

// function isPalindromeInPlace(str) {
//     // Write your code here
//     // let copy = str
//     // let string = ""
//     // for(let i = str.length - 1; i>= 0; i--){
//     //     string += str[i]
//     // }

//     // return copy === string ? "Yes" : "No"

//     // two pointer algoritem se  ye best hai uper wale se

// let i = 0;
// let j = str.length - 1
// while (i < j) {
//     if (str[i] !== str[j]) {
//         return "No"
//     }
//     i++;
//     j--;
// }

// return "Yes"

// }

// console.log(isPalindromeInPlace(str))

// que 66

// let str = prompt("enter your name ")

// // str.toLowerCase

// function toggleCase(str) {
//     // Write your code here
//     // let string = ""
//     // for (let i = 0; i < str.length; i++) {
//     //     let ascii = str.charCodeAt(i);
//     //     if (ascii >= 65 && ascii <= 90) {
//     //         string += str[i].toLowerCase()
//     //     }
//     //     else {
//     //         string += str[i].toUpperCase()
//     //     }
//     // }

//     // return string

//     // method 2 this one is best

//     let string = ""
//     for (let i = 0; i < str.length; i++) {
//         let ascii = str.charCodeAt(i);
//         if (ascii >= 65 && ascii <= 90) {
//             string += String.fromCharCode(ascii + 32)
//         }
//         else if (ascii >= 97 && ascii <= 122) {
//             string += String.fromCharCode(ascii - 32)
//         }
//         else string += str[i]
//     }

//     return string

// }

// console.log(toggleCase(str))

// que 67

// let words = ["pay", "attention", "practice", "attend"]
// let pref = "at"


// function countPrefixMatch(words, pref) {
//     // Write your code here

//     // this one is best 
//     // let count = 0
//     // for (let i = 0; i < words.length; i++) {
//     //     if (words[i].startsWith(pref)) count++
//     // }

//     // return count

//     // method 2

//     let count = 0
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].slice(0,pref.length) == pref) count++
//     }

//     return count
// }

// console.log(countPrefixMatch(words,pref))

// que 68

function capitalizeEnds(str) {
    // Write your code here
    let arr = str.split(" ")
    let ans = ""
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        if (word.length === 1) {
            ans += word.toUpperCase()
        } else {
            let first = word[0].toUpperCase()
            let mid = word.substring(1, word.length - 1)
            let end = word[word.length - 1].toUpperCase()

            ans += (first + mid + end)
        }

        if (i < arr.length - 1) ans += " "

    }

    return ans

}

console.log(capitalizeEnds("hello bhai kaise ho"))