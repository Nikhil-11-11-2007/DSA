// que 71 leetcode -> 349

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//     let set = new Set()
//     let ans = []
//     for(let i = 0; i<nums1.length; i++){
//         set.add(nums1[i])
//     }
//     for(let i = 0; i<nums2.length; i++){
//         if(set.has(nums2[i])){
//             ans.push(nums2[i])
//             set.delete(nums2[i])
//         }
//     }

//     return ans

// };

// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
// TC = O(n)+O(n) = O(n), SC = O(n)

// que 72 leetcode - 560

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function (nums, k) {
//     let map = new Map()
//     map.set(0, 1)
//     let sum = 0, count = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         let rem = sum - k
//         if (map.has(rem)) count += map.get(rem)
//         map.set(sum, (map.get(sum) || 0) + 1)
//     }

//     return count
// };

// console.log(subarraySum([1, 2, 3], 3))

// TC = O(n),  SC = (n)


// que 73 leetcode -> 250

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//     let map = new Map()
//     let ans = []
//     for (let i = 0; i < nums1.length; i++) {
//         map.set(nums1[i], (map.get(nums1[i]) || 0) + 1)
//     }
//     for (let i = 0; i < nums2.length; i++) {
//         if (map.has(nums2[i])) {
//             ans.push(nums2[i])
//             if (map.get(nums2[i]) === 1) map.delete(nums2[i])
//             else map.set(nums2[i], map.get(nums2[i]) - 1)
//         }
//     }

//     return ans
// };

// TC = O(n),  SC = (n)

// console.log(intersect([4, 9, 5, 9], [9, 4, 9, 8, 4]))

// que 74 leetcode -> 325 GFG -> Longest Subarray with Sum K

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
// class Solution {
//     longestSubarray(arr, k) {
//         // code here
//         let map = new Map()
//         map.set(0, -1)
//         let maxLength = 0, sum = 0
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i]
//             if (map.has(sum - k)) maxLength = Math.max(maxLength, i - map.get(sum - k))
//             if (!map.has(sum)) {
//                 map.set(sum, i);
//             }
//         }

//         return maxLength

//     }
// }

// let ans = new Solution()
// console.log(ans.longestSubarray([0, 1, -1, 2], 2))

// TC  = O(n), SC = O(n)

// que 75 leetcode  -> 525 & gfg Largest Subarray of Equal 0's and 1's

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxLength = function (nums) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === 0) nums[i] = -1
//     }

//     let map = new Map()
//     map.set(0,-1)

//     let sum = 0, maxLength = 0
//     for(let i = 0; i<nums.length; i++){
//         sum += nums[i]
//         if(map.has(sum)) maxLength = Math.max(maxLength, i - map.get(sum))
//         else map.set(sum, i)
//     }

//     return maxLength

// };

// console.log(findMaxLength([0, 1, 1, 1, 0, 0]))

// TC  = O(n)+O(n) = O(n), SC = O(n)

// que 76 leetcode -> 128 GFG -> Longest Consecutive Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//     // brotforce TC = O(nlog(n))
//     // if (nums.length === 0) return 0
//     // nums.sort((a, b) => a - b)
//     // let count = 1, maxlength = 1
//     // for (let i = 0; i < nums.length - 1; i++) {
//     //     if (nums[i + 1] === nums[i]) continue;
//     //     else if (nums[i + 1] === nums[i] + 1) count++;
//     //     else {
//     //         maxlength = Math.max(maxlength, count)
//     //         count = 1
//     //     }
//     // }
//     // return Math.max(maxlength, count)

//     // better approch TC = o(n)+O(n)+O(n) = O(n)

//     // let map = new Map(), maxLength = 0
//     // for (let i = 0; i < nums.length; i++) {
//     //     map.set(nums[i], true)
//     // }
//     // for (let i = 0; i < nums.length; i++) {
//     //     if (map.has(nums[i] - 1)) map.set(nums[i], false)
//     // }

//     // for (let key of map.keys()) {
//     //     if (map.get(key)) {
//     //         let count = 1
//     //         while (map.has(key + count)) {
//     //             count++
//     //         }
//     //         maxLength = Math.max(maxLength, count)
//     //         count = 1
//     //     }
//     // }

//     // return maxLength

//     optimal approch TC = O(n)

//     let set = new Set(), maxlength = 0

//     for(let  i = 0; i<nums.length; i++){
//         set.add(nums[i])
//     }
//     for(let val of set){
//         if(!set.has(val - 1)){
//             let count = 1
//             while(set.has(val + count)){
//                 count++
//             }
//             maxlength = Math.max(maxlength,count)
//             count = 1
//         }
//     }

//     return maxlength

// };

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

// que 77 GFG -> Count Distinct Elements in Every Window

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

// class Solution {
//     countDistinct(arr, k) {
//         // code here
//         // brotforce
//         // let ans = []
//         // for (let i = 0; i <= arr.length - k; i++) {
//         //     let set = new Set()
//         //     for (let j = i; j < i + k; j++) {
//         //         set.add(arr[j])
//         //     }
//         //     ans.push(set.size)
//         // }

//         // return ans

//         // optimal TC = O(n)
//         let map = new Map(), ans = []
//         for (let i = 0; i < k - 1; i++) {
//             map.set(arr[i], (map.get(arr[i]) || 0) + 1)
//         }
//         let i = 0, j = k - 1
//         while (j < arr.length) {
//             map.set(arr[j], (map.get(arr[j]) || 0) + 1);
//             ans.push(map.size);
//             if (map.get(arr[i]) === 1) map.delete(arr[i])
//             else map.set(arr[i], map.get(arr[i]) - 1)
//             i++, j++;
//         }
//         return ans
//     }
// }

// let ans = new Solution()
// console.log(ans.countDistinct([1, 2, 1, 3, 4, 2, 3], 4))

// que 78 leetcode -> 2461

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maximumSubarraySum = function (nums, k) {
//     let map = new Map(), maxSum = 0, sum = 0
//     for (let i = 0; i < k - 1; i++) {
//         map.set(nums[i], (map.get(nums[i]) || 0) + 1)
//         sum += nums[i]
//     }
//     let i = 0, j = k - 1
//     while (j < nums.length) {
//         map.set(nums[j], (map.get(nums[j]) || 0) + 1)
//         sum += nums[j]
//         if (map.size === k) maxSum = Math.max(maxSum, sum)
//         sum -= nums[i]
//         if(map.get(nums[i]) === 1) map.delete(nums[i])
//         else map.set(nums[i], map.get(nums[i]) - 1)
//         i++; j++
//     }

//     return maxSum
// };

// TC = O(n), SC = O(1)