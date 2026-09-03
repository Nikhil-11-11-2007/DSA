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
//     let str = ""
//     let max = 0
//     for (let i = 0; i < s.length; i++) {
//         let ch = s[i]
//         if (!str.includes(ch)) {
//             str += ch
//         }
//         else {
//             str = str.slice(str.indexOf(ch) + 1) + ch
//         }

//         max = Math.max(max, str.length)
//     }

//     return max
// };

// console.log(lengthOfLongestSubstring("abcabcbb"))
