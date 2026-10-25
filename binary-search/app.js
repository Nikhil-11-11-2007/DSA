let prompt = require("prompt-sync")();

// que 1 leetcode -> 35

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {

//     let start = 0, end = nums.length - 1
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if (target === nums[mid]) return mid
//         else if (target < nums[mid]) end = mid - 1
//         else start = mid + 1
//     }
//     return start

// };

// console.log(searchInsert([1, 3, 5, 6], 7))

// TC = O(log(n)), SC = O(1)

// que 2 leetcode -> 852

/**
 * @param {number[]} arr
 * @return {number}
 */
// var peakIndexInMountainArray = function (arr) {
//     let start = 0, end = arr.length - 1
//     while (start < end) {
//         let mid = Math.floor((start + end) / 2)
//         if (arr[mid] < arr[mid + 1]) start = mid + 1
//         else end = mid
//     }
//     return start
// };

// console.log(peakIndexInMountainArray([0, 10, 5, 2]))

// TC = O(log(n)), SC = O(1)

// que 3 leetcode -> 34

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//     let ans = new Array(2).fill(-1)
//     let start = 0, end = nums.length - 1
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if (target === nums[mid]) {
//             ans[0] = mid
//             end = mid - 1
//         } else if (nums[mid] < target) start = mid + 1
//         else end = mid - 1
//     }

//     start = 0, end = nums.length - 1

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if (target === nums[mid]) {
//             ans[1] = mid
//             start = mid + 1
//         } else if (nums[mid] < target) start = mid + 1
//         else end = mid - 1
//     }

//     return ans

// };

// console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 10], 8))

// // TC = O(log(n)), SC = O(1)