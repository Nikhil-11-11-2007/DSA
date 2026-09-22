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
//     let count = 0
//     for (let i = 0; i < s.length; i++) {
//         let ch = s[i]
//         if (str.includes(ch)) {
//             str = str.substring(str.indexOf(ch) + 1) + ch
//         } else {
//             str += ch
//         }
//         count = Math.max(count, str.length)
//     }

//     return count

// };

// console.log(lengthOfLongestSubstring("pwwkew"))

// que 3

// var findMedianSortedArrays = function (nums1, nums2) {
//     let i = 0;
//     let j = 0;
//     let arr = []

//     while (i < nums1.length && j < nums2.length) {
//         if (nums1[i] < nums2[j]) {
//             arr.push(nums1[i])
//             i++;
//         } else {
//             arr.push(nums2[j])
//             j++;
//         }
//     }
//     while (i < nums1.length) {
//         arr.push(nums1[i])
//         i++;
//     }

//     while (j < nums2.length) {
//         arr.push(nums2[j])
//         j++;
//     }

//     let n = arr.length

//     if (n % 2 === 0) {
//         let mid = n / 2
//         return (arr[mid - 1] + arr[mid]) / 2
//     } else{
//         let mid = Math.floor(n/2)
//         return arr[mid]
//     }

// };

// console.log(findMedianSortedArrays([1, 3], [2]))

// que 4

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//     let result = "" // r
//     function expand(left, right) {
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             left--;
//             right++;
//         }

//         return s.slice(left + 1, right)
//     }

//     for (let i = 0; i < s.length; i++) {
//         let odd = expand(i, i) // r, a, c, racecar, c,a,r
//         let even = expand(i, i + 1) // "","", ""
//         if (odd.length > result.length) result = odd
//         if (even.length > result.length) result = even
//     }

//     return result
// };

// console.log(longestPalindrome("racecar"))

// que 5 leetcode -> 1572

// var diagonalSum = function (mat) {

//     // TC = O(n^2)
//     // let sum = 0;
//     // for (let i = 0; i < mat.length; i++) {
//     //     for (let j = 0; j < mat[i].length; j++) {
//     //         if (i === j || (i + j) === mat.length - 1) {
//     //             sum += mat[i][j]
//     //         }
//     //     }
//     // }

//     // return sum

//     // 2nd method optmized TC = O(n)
//     let sum = 0
//     let n = mat.length
//     for(let i = 0; i<n; i++){
//         sum += mat[i][i]
//         if(i !== n-1-i){
//             sum += mat[i][n-1-i]
//         }
//     }

//     return sum
// };

// console.log(diagonalSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]))

// que 6 letcode -> 867

// var transpose = function (matrix) {

//     let row = matrix.length
//     let col = matrix[0].length
//     let arr = []

//     for(let i = 0; i<col; i++){
//         arr[i] = new Array(row)
//     }

//     for(let i = 0; i<matrix.length; i++){
//         for(let j = 0; j<matrix[i].length; j++){
//             arr[j][i] = matrix[i][j]
//         }
//     }

//     return arr

// };

// console.log(transpose([
//     [1, 2, 3],
//     [4, 5, 6]
// ]))

// que 7 leetcode -> 832

// var flipAndInvertImage = function (image) {

//     for(let i = 0; i<image.length; i++){
//         let arr = image[i]
//         let j = 0;
//         let k = arr.length - 1;
//         while(j<k){
//             [arr[j],arr[k]] = [arr[k],arr[j]]
//             j++;
//             k--;
//         }
//     }

//     for(let i = 0; i<image.length; i++){
//         for(let j = 0; j<image[i].length; j++){
//             if(image[i][j] === 1) image[i][j] = 0
//             else image[i][j] = 1
//         }
//     }

//     return image

// };

// console.log(flipAndInvertImage(
//     [
//         [1, 1, 0],
//         [1, 0, 1],
//         [0, 0, 0]
//     ]
// ))

// que 8 leetcode -> 54

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// var spiralOrder = function (matrix) {
//     let arr = []
//     let top = 0;
//     let left = 0;
//     let right = matrix[0].length - 1;
//     let bottom = matrix.length - 1;
//     while (top <= bottom && left <= right) {
//         for (let i = left; i <= right; i++) {
//             arr.push(matrix[top][i])
//         }
//         top++;
//         if (top <= bottom) {
//             for (let i = top; i <= bottom; i++) {
//                 arr.push(matrix[i][right])
//             }
//             right--
//         }

//         if (left <= right && top <= bottom) {
//             for (let i = right; i >= left; i--) {
//                 arr.push(matrix[bottom][[i]])
//             }
//             bottom--
//         }

//         if (top <= bottom && left <= right) {
//             for (let i = bottom; i >= top; i--) {
//                 arr.push(matrix[i][left])
//             }
//             left++
//         }
//     }

//     return arr
// };

// console.log(spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]))

// que 9 leetcode -> 73

/**
  * @param {number[][]} matrix
  * @return {void} Do not return anything, modify matrix in-place instead.
*/
// var setZeroes = function (matrix) {
//     let row = matrix.length;
//     let cols = matrix[0].length;
//     let firstRowZero = false;
//     let firstColZero = false;

//     for(let j = 0; j<cols; j++){
//         if(matrix[0][j] === 0){
//             firstRowZero = true;
//             break;
//         }
//     }

//     for(let i = 0; i<row; i++){
//         if(matrix[i][0] === 0){
//             firstColZero = true;
//             break;
//         }
//     }

//     for(let i = 1; i<row; i++){
//         for(let j = 1; j<cols; j++){
//             if(matrix[i][j] === 0){
//                 matrix[i][0] = 0
//                 matrix[0][j] = 0
//             }
//         }
//     }

//     for(let i = 1; i<row; i++){
//         for(let j= 1; j<cols; j++){
//             if(matrix[i][0] === 0 || matrix[0][j] === 0){
//                 matrix[i][j] = 0
//             }
//         }
//     }

//     if(firstRowZero){
//         for(let j = 0; j<cols; j++){
//             matrix[0][j] = 0
//         }
//     }

//     if(firstColZero){
//         for(let i = 0; i<row; i++){
//             matrix[i][0] = 0
//         }
//     }

//     return matrix
// };

// console.log(setZeroes([
//     [1, 2, 0, 4],
//     [5, 6, 7, 0],
//     [9,10,11,12]
// ]))

// que 10 leetCode -> 74

// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// var searchMatrix = function (matrix, target) {
//     let rows = matrix.length;
//     let cols = matrix[0].length;

//     let left = 0;
//     let right = rows * cols - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         let row = Math.floor(mid / cols);
//         let col = mid % cols;

//         if (matrix[row][col] === target) {
//             return true;
//         }

//         if (matrix[row][col] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return false;
// };

// console.log(searchMatrix([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ], 7))

// que 11 leetcode -> 387

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

// que 12 leetcode -> 1

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

// que 13 leetcode -> 1748

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

// que 14 leetcode -> 771

// var numJewelsInStones = function (jewels, stones) {
//     let count = 0
//     let set = new Set()
//     for(let i = 0; i<jewels.length; i++){
//         set.add(jewels[i])
//     }
//     for(let i = 0; i<stones.length; i++){
//         if(set.has(stones[i])) count++
//     }

//     return count
// };

// console.log(numJewelsInStones("aA","aAAbbbb"))

// que 15 leetcode -> 1832

// var checkIfPangram = function(sentence) {
//     let set = new Set(sentence)
//     return set.size === 26

//     // less optmize 

//     // let set = new Set(sentence)
//     // for(let i =0; i<26; i++){
//     //     let ch = String.fromCharCode(97+i)
//     //     if(!set.has(ch)) return false
//     // }
//     // return true
// };

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydo"))

// que 16 leetcode -> 2351

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

// que 17  leetcode -> 202

// var isHappy = function(n) {
//     // let set = new Set();

//     // while (n !== 1) {
//     //     if (set.has(n)) return false;
//     //     set.add(n);
//     //     let temp = n;
//     //     let sum = 0;

//     //     while (temp > 0) {
//     //         let digit = temp % 10;
//     //         sum += digit * digit;
//     //         temp = Math.floor(temp / 10);
//     //     }
//     //     n = sum;
//     // }

//     // return true;

//     let set = new Set()
//     while(true){
//         let sum = 0
//         while(n>0){
//             let dig = n%10
//             sum += dig*dig
//             n = Math.floor(n/10)
//         }
//         if(sum === 1) return true
//         if(set.has(sum)) return false
//         set.add(sum)
//         n = sum
//     }
// };

// console.log(isHappy(19))

// que 18 leetcode -> 2418

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

// que 19 leetcode -> 2404

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

// que 20 leetcode -> 2325

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

// que 21 leetcode -> 575

/**
 * @param {number[]} candyType
 * @return {number}
 */
// var distributeCandies = function(candyType) {
//     let set = new Set(candyType)
//     let eat = Math.floor(candyType.length/2)
//     return Math.min(eat,set.size)
// };

// console.log(distributeCandies([1,1,2,2,3,3]))

// que 22 leetcode -> 2053

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
// var kthDistinct = function(arr, k) {

//     let map = new Map()
//     for(let i = 0; i<arr.length; i++){
//         map.set(arr[i], (map.get(arr[i]) || 0) + 1)
//     }

//     let count = 0
//     for(let [key,value] of map){
//         if(value === 1) count++
//         if(count === k) return key
//     }

//     return ""

// };

// console.log(kthDistinct(["d","b","c","b","c","a"],2))

// que 23 leetcode -> 290

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// var wordPattern = function(pattern, s) {
//     let words = s.split(" ")
//     if(pattern.length !== words.length) return false
//     let map = new Map()
//     let set = new Set()
//     for(let i = 0; i<pattern.length; i++){
//         let char = pattern[i];
//         let word = words[i];
//         if(map.has(char)){
//             if(map.get(char) !== word) return false
//         } else{
//             if(set.has(word)){
//                 return false
//             }

//             map.set(char,word);
//             set.add((word));
//         }
//     }

//     return true

// };

// console.log(wordPattern("abba","dog cat cat fish"))

// que 24 leetcode -> 645

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findErrorNums = function (nums) {

//     // method 1
//     // const n = nums.length;
//     // const count = Array(n + 1).fill(0);
//     // for (const num of nums) {
//     //     count[num]++;
//     // }

//     // let duplicate = -1;
//     // let missing = -1;

//     // for (let i = 1; i <= n; i++) {
//     //     if (count[i] === 0) missing = i;
//     //     if (count[i] === 2) duplicate = i;
//     // }

//     // return [duplicate, missing];

//     // method 2

//     let map = new Map();
//     let duplicate;
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], (map.get(nums[i]) || 0) + 1)
//     }

//     for (let [key, value] of map) {
//         if (value > 1) {
//             duplicate = key
//         }
//     }

//     for (let i = 1; i < nums.length + 1; i++) {
//         if (!map.has(i)) {
//             return [duplicate, i]
//         }
//     }

// };

// console.log(findErrorNums([1, 2, 2, 4]))

// que 25  leetcode -> 6

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function (s, numRows) {
//     if (numRows === 1 || numRows >= s.length) return s
//     let rows = new Array(numRows).fill("")

//     let row = 0;
//     let direction = 1;
//     for (let i = 0; i < s.length; i++) {
//         rows[row] += s[i];

//         if (row === 0) direction = 1;
//         if (row === numRows - 1) direction = -1;
//         row += direction;
//     }

//     return rows.join("")

// };

// console.log(convert("PAYPALISHIRING",3))

// que 26 leetcode -> 8

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();

  let ans = 0;
  let sign = 1;
  let i = 0;

  if (s[i] === "-") {
    sign = -1;
    i++;
  } else if (s[i] === "+") {
    i++;
  }

  for (; i < s.length; i++) {
    let code = s.charCodeAt(i);

    if (code < 48 || code > 57) {
      break;
    }

    let digit = code - 48;

    ans = ans * 10 + digit;

    if (sign === 1 && ans > 2147483647) {
      return 2147483647;
    }

    if (sign === -1 && ans > 2147483648) {
      return -2147483648;
    }
  }

  return ans * sign;
};

console.log(myAtoi("-+"))