let prompt = require("prompt-sync")()

// que 1

// var twoSum = function(nums, target) {

//     for(let i = 0; i<nums.length; i++){
//         for(let j = i+1; j<nums.length; j++){
//             if(nums[i]+nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }

// };

// console.log(twoSum([2,7,11,15],17))

// que 2

// var lengthOfLongestSubstring = function (s) {
//     let logsubString = ""
//     let max = 0
//     for (let i = 0; i < s.length; i++) {
//         let ch = s[i]
//         if (!logsubString.includes(ch)) {
//             logsubString += ch
//         } else {
//             logsubString = logsubString.slice(logsubString.indexOf(ch) + 1) + ch
//         }
//         max = Math.max(max, logsubString.length)
//     }

//     return max
// };

// console.log(lengthOfLongestSubstring("abcabcbb"))

let arr = [1, 2, 3, 4, 5]

function leftRotateByOne(arr) {
    // Write your logic here
    // let i = 1, j = 0

    // while (i < arr.length) {
    //     [arr[j], arr[i]] = [arr[i], arr[j]]
    //     j++;
    //     i++;
    // }

    // return arr

    // 2nd method for interview

    let temp = arr[0]

    for(let i = 1; i<arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length - 1] = temp

    return arr
}

console.log(leftRotateByOne(arr))