// que 1 frequencey of an number
// let arr = [1, 2, 6, 7, 5, 3, 7, 9, 2, 6, 7, 1, 9, 5, 2, 8, 1, 8]

// let map = new Map()
// for (let i = 0; i < arr.length; i++) {

//     if (map.has(arr[i])) {
//         map.set(arr[i], map.get(arr[i]) + 1)
//     } else {
//         map.set(arr[i], 1)
//     }

// }

// console.log(map)

// que 2 leetcode -> 387

// var firstUniqChar = function (s) {
//     let map = new Map()
//     for (let i = 0; i < s.length; i++) {
//         map.set(s[i], (map.get(s[i]) || 0) + 1)
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (map.get(s[i]) === 1) return i
//     }
//     return -1
// };

// console.log(firstUniqChar("leetcode"))

// que 3 leetcode -> 1

// var twoSum = function (nums, target) {
//     let map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(target - nums[i])) {
//             return [map.get(target - nums[i]),i]
//         } else {
//             map.set(nums[i], i)
//         }
//     }

// };

// console.log(twoSum([2,7,11,5],9))

// que 4 leetcode -> 1748

// var sumOfUnique = function(nums) {
//     let map = new Map()
//     let sum = 0

//     for(let i = 0; i<nums.length; i++){
//         map.set(nums[i], (map.get(nums[i]) || 0) + 1)
//     }
//     for(let i = 0; i<nums.length; i++){
//         if(map.get(nums[i]) === 1) {
//             sum += nums[i]
//         }
//     }

//     return sum
// };

// console.log(sumOfUnique([1,2,3,2]))

// que 5 leetcode -> 2351

// /**
//  * @param {string} s
//  * @return {character}
//  */
// var repeatedCharacter = function (s) {
//     // method 1
//     // let str = ""
//     // for (let i = 0; i < s.length; i++) {
//     //     if (str.includes(s[i])) return s[i]
//     //     else str += (s[i])
//     // }

//     // method 2
//     // let set = new Set()
//     // for (let i = 0; i < s.length; i++) {
//     //     if (set.has(s[i])) {
//     //         return s[i]
//     //     }

//     //     set.add(s[i])
//     // }

//     // method 3
//     let map = new Map()
//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             return s[i]
//         } else {
//             map.set(s[i], true)
//         }
//     }
// };

// console.log(repeatedCharacter("abccbaacz"))

// que 6 leetcode -> 2418

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
// var sortPeople = function (names, heights) {
//     // method 1
//     // for(let i = 0; i<heights.length; i++){
//     //     for(let j = i+1; j<heights.length; j++){
//     //         if(heights[i] < heights[j]){
//     //             [heights[i],heights[j]] = [heights[j],heights[i]];
//     //             [names[i],names[j]] = [names[j],names[i]];
//     //         }
//     //     }
//     // }

//     // methos 2

//     let map = new Map()
//     let namesArr = []

//     for (let i = 0; i < heights.length; i++) {
//         map.set(heights[i], names[i])
//     }

//     heights.sort((a, b) => b - a);
//     for (let i = 0; i < heights.length; i++) {
//         namesArr.push(map.get(heights[i]))
//     }
//     return namesArr
// };

// console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))

// que 7 leetcode -> 2404

/**
 * @param {number[]} nums
 * @return {number}
 */
// var mostFrequentEven = function (nums) {
//     let maxfreqency = -1
//     let elem = -1
//     let map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], (map.get(nums[i]) || 0) + 1)
//     }

//     for (let [key, value] of map) {
//         if (key % 2 === 0) {
//             if (maxfreqency < value || (value === maxfreqency && key < elem)) {
//                 maxfreqency = value;
//                 elem = key
//             }
//         }
//     }

//     return elem

// };

// console.log(mostFrequentEven([0, 1, 4, 4, 2, 2, 1]))

// que 8

// class Solution {
//     countFrequency(arr) {
//         let freq = new Map();
//         let order = [];

//         // Count frequency
//         for (let i = 0; i < arr.length; i++) {
//             if(!freq.has(arr[i])){
//                 freq.set(arr[i], 1)
//                 order.push(arr[i])
//             } else{
//                 freq.set(arr[i], freq.get(arr[i])+1)
//             }
//         }

//         // Sort by frequency in descending order
//         // Same frequency -> first occurrence order
//         order.sort((a, b) => freq.get(b) - freq.get(a));

//         let result = [];

//         for (let num of order) {
//             result.push(num + " " + freq.get(num));
//         }

//         return result.join("\n");
//     }
// }

// let countfreq = new Solution()
// console.log(countfreq.countFrequency([1,2,3,4,5]))

// que 9 leetcode -> 2325

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
// var decodeMessage = function (key, message) {
//     let map = new Map()
//     let alphabet = "abcdefghijklmnopqrstuvwxyz", idx = 0
    
//     for(let i = 0; i<key.length; i++){
//         if(key[i] === " ") continue;
//         else if(!map.has(key[i])){
//             map.set(key[i],alphabet[idx])
//             idx++;
//         }
//     }

//     let result = ""

//     for(let i = 0; i<message.length; i++){
//         if(message[i] === " ") result += " ";
//         else result += map.get(message[i])
//     }

//     return result

// };

// console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"))

// que 10 leetcode -> 575

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let set = new Set(candyType)
    let eat = Math.floor(candyType.length/2)
    return Math.min(eat,set.size)
};

console.log(distributeCandies([1,1,2,2,3,3]))