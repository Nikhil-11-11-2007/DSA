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

// function capitalizeEnds(str) {
//     // Write your code here
//     let arr = str.split(" ")
//     let ans = ""
//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i]
//         if (word.length === 1) {
//             ans += word.toUpperCase()
//         }
//         else {
//             let first = word[0].toUpperCase()
//             let mid = word.substring(1, word.length - 1)
//             let end = word[word.length - 1].toUpperCase()
//             ans += (first + mid + end)
//         }
//         if(i < arr.length - 1){
//             ans += " "
//         }
//     }

//     return ans

// }

// console.log(capitalizeEnds("hello b kaise ho"))

// que 69

// let str = "hello world is me"

// function characterFrequency(str) {
//     // Write your code here
//     let arr = new Array(26).fill(0)
//     for (let i = 0; i < str.length; i++) {
//         if (arr[i] !== " ") {
//             let ascii = str[i].charCodeAt()
//             arr[ascii - 97] = arr[ascii - 97] + 1
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             console.log(String.fromCharCode(i + 97) + ": " + arr[i])
//         }
//     }
// }

// characterFrequency(str)

// que 70

// function isAnagram(s1, s2) {
//     // Your code here
//     // if (s1.length !== s2.length) {
//     //     return false
//     // }
//     // let arr = new Array(26).fill(0)
//     // let arr2 = new Array(26).fill(0)
//     // for (let i = 0; i < s1.length; i++) {
//     //     let ascii = s1.charCodeAt(i)
//     //     arr[ascii - 97] = arr[ascii - 97] + 1
//     //     let ascii2 = s2.charCodeAt(i)
//     //     arr2[ascii2 - 97] = arr2[ascii2 - 97] + 1
//     // }
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr2[i] !== arr[i]) return false
//     // }
//     // return true

//     // this one is optmized

//     if (s1.length !== s2.length) {
//         return false
//     }
//     let arr = new Array(26).fill(0)
//     for (let i = 0; i < s1.length; i++) {
//         let ascii = s1.charCodeAt(i)
//         arr[ascii - 97] = arr[ascii - 97] + 1
//         let ascii2 = s2.charCodeAt(i)
//         arr[ascii2 - 97] = arr[ascii2 - 97] - 1
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) return false
//     }
//     return true
// }

// console.log(isAnagram("taste", "state"))

// que 71

// let sentences = ["coding is fun", "practice makes perfect", "consistency is the key to success"]

// function mostWordsFound(sentences) {
//     // Write your logic here
//     let maxWords = 0
//     for (let i = 0; i < sentences.length; i++) {
//         let snt = sentences[i].split(" ")
//         if (snt.length > maxWords) {
//             maxWords = snt.length
//         }
//     }
//     return maxWords
// }
// console.log(mostWordsFound(sentences))

// // que 72

// class Solution {
//     sort(s) {
//         //write your code here
//         let arr = s.split(" ")
//         for(let i = 0; i<arr.length-1; i++){
//             for(let j = 0; j<arr.length-1-i; j++){
//                 if(arr[j]>arr[j+1]){
//                     [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//                 }
//             }
//         }
//         return arr.join(" ")
//     }
// }

// let srt = new Solution()
// console.log(srt.sort("sorting words in a sentence"))

// que 73

// function countAsterisks(s) {
//     let count = 0
//     let inside = false

//     for (let i = 0; i < s.length; i++) {

//         if (s[i] === "|") {
//             inside = !inside
//         }

//         if (s[i] === "*" && !inside) {
//             count++
//         }
//     }

//     return count
// }

// console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"))

// que 74

// class Solution {
//   /**
//    * @param {string} s
//    * @param {string} letter
//    * @returns {number}
//    */
//   percentageLetter(s, letter) {
//     // Write your code here
//     let sum = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === letter) {
//         sum++
//       }
//     }

//     return Math.floor((sum / s.length) * 100)

//   }
// }

// let percentage = new Solution()
// console.log(percentage.percentageLetter("hello","l"))

// que 75

// function checkString(s) {
//   // Write your code here
//   for(let i = 1; i<s.length; i++){
//     if(s[i] == "a" && s[i-1] == "b")return false
//   }

//   return true
// }

// console.log(checkString("aabb"),checkString("aaabbbab"))

// que 76

// class Solution {
//     /**
//      * @param {string} password
//      * @return {boolean}
//      */
//     strongPasswordCheckerII(password) {
//         if (password.length < 8) return false;

//         let hasLower = false;
//         let hasUpper = false;
//         let hasDigit = false;
//         let hasSpecial = false;

//         const specialChars = "!@#$%^&*()-+";

//         for (let i = 0; i < password.length; i++) {
//             const char = password[i];
//             const ascii = password.charCodeAt(i);

//             if (i > 0 && password[i] === password[i - 1]) return false;

//             if (ascii >= 97 && ascii <= 122) hasLower = true;

//             if (ascii >= 65 && ascii <= 90) hasUpper = true;

//             if (ascii >= 48 && ascii <= 57) hasDigit = true;

//             if (specialChars.includes(char)) hasSpecial = true;
//         }

//         return hasLower && hasUpper && hasDigit && hasSpecial;
//     }
// }

// let strongPass = new Solution()
// console.log(strongPass.strongPasswordCheckerII("Abcdefg1"))

// que 77

// function greatestLetter(s) {
//     // Write your logic here
//     for (let i = 90; i >= 65; i--) {
//         let upper = String.fromCharCode(i)
//         let lower = String.fromCharCode(i + 32)
//         if (s.includes(upper) && s.includes(lower)) {
//             return upper
//         }

//     }
//     return ""; // return empty string if none found
// }

// console.log(greatestLetter("aAbBcCdD"))

// que 78

// class Solution {
//     checkDistances(s, distance) {
//         // Write your code here
//         let firstIndex = {}
//         for (let i = 0; i < s.length; i++) {
//             let char = s[i]
//             if(firstIndex[char] === undefined){
//                 firstIndex[char] = i
//             }
//             else{
//                 let actualdis = i - firstIndex[char] - 1
//                 let charIndex = char.charCodeAt(0) - 97

//                 if(actualdis !== distance[charIndex]){
//                     return false
//                 }
//             }
//         }

//         return true
//     }
// }

// let checkcharDis = new Solution()
// console.log(checkcharDis.checkDistances("zzxxccvvbbnnmmllkkjjiihhggffddssaa",
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]))

// que 79

// class Solution {
//     largestGoodInteger(num) {
//         // Write your code here
//         let condidate = ""
//         for (let i = 0; i < num.length - 2; i++) {
//             if(num[i] === num[i+1] && num[i+1] === num[i+2]){
//                 let current = num.substring(i,i+3)
//                 if(condidate < current || condidate === ""){
//                     condidate = current
//                 }
//             }
//         }
//         return condidate;
//     }
// }

// let goodInt = new Solution()
// console.log(goodInt.largestGoodInteger("6777199933339"))

// que 80 
// class Solution {
//     removeDigit(number, digit) {
//         // Write your code here
//         let ans = ""
//         for (let i = 0; i < number.length; i++) {
//             if (number[i] === digit) {
//                 let curr = number.slice(0, i) + number.slice(i + 1)
//                 if (curr > ans || ans === "") {
//                     ans = curr
//                 }
//             }
//         }

//         return ans
//     }
// }

// let digRemove = new Solution()
// console.log(digRemove.removeDigit("1231", "1"))

// que 81

// [1,2,1,0,....0]

class Solution {
    /**
     * @param {string} num
     * @return {boolean}
     */
    digitCount(num) {
        // Write your code here
        let arr = new Array(10).fill(0)
        for (let i = 0; i < num.length; i++) {
            let digit = Number(num[i])
            arr[digit]++
        }
        for (let i = 0; i < num.length; i++) {
            if (Number(num[i]) !== arr[i]) return false
        }

        return true

    }
}

let countdig = new Solution()
console.log(countdig.digitCount("1210"))
