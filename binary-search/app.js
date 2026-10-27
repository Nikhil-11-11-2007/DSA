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

// function firstPosition(nums, target) {
//     let start = 0, end = nums.length, first = -1
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if (nums[mid] === target) {
//             first = mid
//             end = mid - 1
//         } else if (nums[mid] < target) start = mid + 1
//         else end = mid - 1
//     }

//     return first
// }

// function lastPosition(nums, target) {
//     let start = 0, end = nums.length - 1, last = -1
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if (nums[mid] === target) {
//             last = mid
//             start = mid + 1
//         } else if (nums[mid] < target) start = mid + 1
//         else end = mid - 1
//     }

//     return last

// }
// var searchRange = function (nums, target) {
//     //     let ans = new Array(2).fill(-1)
//     //     let start = 0, end = nums.length - 1
//     //     while (start <= end) {
//     //         let mid = Math.floor((start + end) / 2)
//     //         if (target === nums[mid]) {
//     //             ans[0] = mid
//     //             end = mid - 1
//     //         } else if (nums[mid] < target) start = mid + 1
//     //         else end = mid - 1
//     //     }

//     //     start = 0, end = nums.length - 1

//     //     while (start <= end) {
//     //         let mid = Math.floor((start + end) / 2)
//     //         if (target === nums[mid]) {
//     //             ans[1] = mid
//     //             start = mid + 1
//     //         } else if (nums[mid] < target) start = mid + 1
//     //         else end = mid - 1
//     //     }

//     //     return ans

//     // ye second method 
//     return [firstPosition(nums,target),lastPosition(nums,target)]

// };

// console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 10], 8))

// // TC = O(log(n)), SC = O(1)

// que 4 leetcode -> 33

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {

//     let start = 0, end = nums.length - 1
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if (nums[mid] === target) return mid
//         if (nums[start] <= nums[mid]) {
//             if (nums[start] <= target && target <= nums[mid]) end = mid - 1
//             else start = mid + 1
//         }
//         else if (nums[mid] <= nums[end]) {
//             if (nums[mid] <= target && target <= nums[end]) start = mid + 1
//             else end = mid - 1
//         }
//     }

//     return -1

// };

// console.log(search([6, 7, 1, 2, 3, 4, 5], 3))

// TC  = O(log(n)) 

// que 5 GFG ka

/**
 * @param {number[]} pages - Array of book pages
 * @param {number} students - Number of students
 * @return {number} - Minimum number of maximum pages assigned to a student
 */
// function isValid(arr, upper, students) {
//     let sum = 0, count = 1
//     for (let i = 0; i < arr.length; i++) {
//         if (sum + arr[i] > upper) {
//             sum = arr[i]
//             count++
//             if (count > students) return false
//         } else sum += arr[i]
//     }
//     return true
// }

// function allocateBooks(pages, students) {
//     // Write Your code here
//     if (pages.length < students) return -1
//     let first = -Infinity, last = 0, ans = -1
//     for (let i = 0; i < pages.length; i++) {
//         first = Math.max(first, pages[i])
//         last += pages[i]
//     }

//     while (first <= last) {
//         let mid = Math.floor((first + last) / 2)
//         if (isValid(pages, mid, students)) {
//             ans = mid
//             last = mid -1
//         } else first = mid + 1
//     }
//     return ans
// }


// TC = O(nlog(n)), SC = O(1)

// console.log(allocateBooks([12, 34, 67, 90], 2))

// que 6 leetcode -> 1011 (medium)

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// function isValid(arr, upper, days) {
//     let sum = 0, count = 1
//     for (let i = 0; i < arr.length; i++) {
//         if (sum + arr[i] > upper) {
//             sum = arr[i]
//             count++;
//             if (count > days) return false
//         } else sum += arr[i]
//     }
//     return true
// }

// var shipWithinDays = function (weights, days) {
//     let first = 0, last = 0, ans = -1
//     for (let i = 0; i < weights.length; i++) {
//         first = Math.max(first, weights[i])
//         last += weights[i]
//     }
//     while (first <= last) {
//         let mid = Math.floor((first + last) / 2)
//         if (isValid(weights, mid, days)) {
//             ans = mid
//             last = mid - 1
//         } else first = mid + 1
//     }
//     return ans
// };

// console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
// // TC = O(nlog(n)), SC = O(1)

// que 7 leetcode -> 1482

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
// function isValid(arr, mid, m, k) {
//     let flowers = 0, banquet = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= mid) {
//             flowers++;
//             if (flowers === k) {
//                 banquet++;
//                 flowers = 0
//             }
//         } else flowers = 0
//     }
//     return banquet >= m
// }
// var minDays = function (bloomDay, m, k) {
//     if (m * k > bloomDay.length) return -1
//     let first = Infinity, last = 0, ans = -1
//     for (let i = 0; i < bloomDay.length; i++) {
//         first = Math.min(first, bloomDay[i])
//         last = Math.max(last, bloomDay[i])
//     }
//     while (first <= last) {
//         let mid = Math.floor((first + last) / 2)
//         if (isValid(bloomDay, mid, m, k)) {
//             ans = mid
//             last = mid - 1
//         } else first = mid + 1
//     }
//     return ans
// };

// // TC = O(nlog(n)), SC = O(1)
// console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3))
