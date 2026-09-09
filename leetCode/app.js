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
var spiralOrder = function (matrix) {
    let arr = []
    let top = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    let left = 0

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            arr.push(matrix[top][i])
        }
        top++
        if (top <= bottom) {
            for (let i = top; i <= bottom; i++) {
                arr.push(matrix[i][right])
            }
            right--
        }
        if (top <= bottom && left <= right) {
            for (let i = right; i >= left; i--) {
                arr.push(matrix[bottom][i])
            }
            bottom--
        }
        if (top <= bottom && left <= right) {
            for (let i = bottom; i >= top; i--) {
                arr.push(matrix[i][left])
            }
            left++
        }
    }

    return arr
};

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))