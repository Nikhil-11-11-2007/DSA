let prompt = require("prompt-sync")()

// JavaScript code here
// que 1 // this que is also algorithem 3 pointer

// function mergeArrays(arr1, m, arr2, n) {
//     let i = 0, j = 0, k = 0;
//     let ans = new Array(m + n)
//     while (i < m && j < n) {
//         if (arr1[i] < arr2[j]) ans[k++] = arr1[i++]
//         else ans[k++] = arr2[j++]
//     }
//     while (i < m) ans[k++] = arr1[i++]
//     while (j < n) ans[k++] = arr2[j++]

//     return ans

// }

// console.log(mergeArrays([1, 3, 5], 3, [2, 4, 6], 3))

// que 2  leetcode  -> 88

// var merge = function (nums1, m, nums2, n) {

//     let i = m - 1, j = n - 1, k = m + n - 1
//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--]
//         else nums1[k--] = nums2[j--]
//     }
//     while (j >= 0) {
//         nums1[k--] = nums2[j--]
//     }

//     return nums1

// };

// console.log(merge([8, 0, 0, 0, 0], 1, [1, 4, 6, 7], 4))

// TC = O(n)+O(n) = O(n), SC =O(1)

// que 3 leetcode -> 26

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let j = 1;
//     for(let i = 0; i<nums.length -1; i++){
//         if(nums[i] !== nums[i+1]){
//             nums[j] = nums[i+1]
//             j++;
//         }
//     }
//     return j
// };

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
// TC = O(n), SC = O(1)

// que 4 leetcode  -> 1089

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
// var duplicateZeros = function(arr) {
//     let zeros = 0
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] === 0) zeros++;
//     }

//     let i = arr.length-1;
//     let j = (arr.length - 1) + zeros
//     while(i >= 0){
//         if(j < arr.length){
//             arr[j] = arr[i]
//         }
//         j--;
//         if(arr[i] === 0){
//             if(j < arr.length){
//                 arr[j] = 0
//             }
//             j--;
//         }
//         i--;
//     }

//     return arr
// };

// console.log(duplicateZeros([1,0,2,3,0,4,5,0]))

// TC = O(n)+ O(n) = O(n), SC = O(1)

// que 5 leetcode -> 283

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//     let j = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             [nums[i], nums[j]] = [nums[j], nums[i]]
//             j++;
//         }
//     }
//     return nums
// };

// console.log(moveZeroes([0,1,0,3,12]))
// TC = O(n), SC = O(n)

// que 6 leetcode -> 53

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//     // method 1 worst case mai isko use krna koi solution nhi ho jb
//     // let largeSum = nums[0];
//     // for( let i = 0; i<nums.length; i++){
//     //     let sum = 0
//     //     for(let j = i; j<nums.length; j++){
//     //         sum += nums[j]
//     //         if(largeSum < sum) largeSum = sum
//     //     }
//     // }
//     // return largeSum

//     // 2nd method Optmized method Kadane's Algorithem

//     let maxSum = nums[0]
//     let currSum = 0
//     for (let i = 0; i < nums.length; i++) {
//         currSum += nums[i]
//         maxSum = Math.max(maxSum, currSum)
//         if (currSum < 0) currSum = 0
//     }
//     return maxSum
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// TC = O(n), SC = O(1)

// que 7 leetcode -> 169

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//     // let map = new Map()
//     // let n = Math.floor(nums.length/2)
//     // for (let i = 0; i < nums.length; i++) {
//     //     map.set(nums[i], (map.get(nums[i]) || 0) + 1)
//     // }
//     // for(let key of map.keys()){
//     //     if(map.get(key) > n) return key
//     // }

//     // 2nd method boyer Moore's algorithem

//     let ans = nums[0]
//     let count = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (count === 0) {
//             ans = nums[i]
//             count = 1
//         }
//         else if (nums[i] === ans) count++;
//         else count--;
//     }

//     return ans
// };

// console.log((majorityElement([2, 1, 1, 1, 2, 2, 2])))

// TC = O(n)+O(n) = O(n), SC = O(n)
// TC = O(n), SC =O(1)

// que 8 leetcode -> 121

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let min = prices[0]
//     let maxProfit = 0
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < min) min = prices[i]
//         maxProfit = Math.max(maxProfit,prices[i] - min)
//     }
//     return maxProfit

// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// TC = O(n), SC =O(1)

// que 9 , leetcode -> 122

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let profit = 0
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1]
//     }

//     return profit

// };
// console.log(maxProfit([3, 5, 9, 4, 5, 8]))

// TC = O(n), SC = O(1)

// que 10 leetcode -> 75 medium

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//     // Duch national flag Algorithem
//     let i = 0;
//     let j = 0;
//     let k = nums.length - 1;
//     while(i<=k){
//         if(nums[i] === 0){
//             [nums[i],nums[j]] = [nums[j],nums[i]]
//             i++;
//             j++;
//         }
//         else if(nums[i] === 2){
//             [nums[i], nums[k]] = [nums[k], nums[i]]
//             k--;
//         } else i++;
//     }
//     return nums
// };

// console.log(sortColors([2, 0, 2, 1, 1, 0]))

// TC = O(n), SC = O(n)

// que 11 leetcode -> 42 (Hard)

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//     // method 1 but ye TLE de rha hai but ye brootforce hai
//     // let total = 0
//     // for (let i = 0; i < height.length; i++) {
//     //     let leftMax = rightMax = height[i]
//     //     for (let j = i; j >= 0; j--) {
//     //         leftMax = Math.max(leftMax, height[j])
//     //     }
//     //     for (let j = i; j < height.length; j++) {
//     //         rightMax = Math.max(rightMax, height[j])
//     //     }
//     //     total += Math.min(leftMax, rightMax) - height[i]
//     // }
//     // return total

//     // TC =O(n^2), SC = O(1)

//     // let leftMax = height[0], rightMax = height[height.length - 1]
//     // let leftArr = []
//     // let rigthArr = []
//     // let total = 0

//     // for (let i = 0; i < height.length; i++) {
//     //     leftMax = Math.max(leftMax, height[i])
//     //     leftArr[i] = leftMax
//     // }
//     // for (let i = height.length - 1; i >= 0; i--) {
//     //     rightMax = Math.max(rightMax, height[i])
//     //     rigthArr[i] = rightMax
//     // }
//     // for (let i = 0; i < height.length; i++) {
//     //     total += Math.min(leftArr[i], rigthArr[i]) - height[i]
//     // }

//     // return total

//     // method 3 optmized

//     // let i = 0, j = height.length - 1, total = 0
//     // let leftMax = 0, rightMax = 0
//     // while (i < j) {
//     //     leftMax = Math.max(leftMax, height[i])
//     //     rightMax = Math.max(rightMax, height[j])
//     //     if (leftMax < rightMax) total += leftMax - height[i++]
//     //     else total += rightMax - height[j--]
//     // }

//     // return total
//     // TC = O(n), SC = O(1)

// };

// console.log(trap([4, 2, 0, 3, 2, 5]))

// que 12 leetcode -> 11 (medium)

/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
// method 1 brootforce but TLE dega
// let area = 0
// for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//         let length = Math.min(height[i], height[j])
//         let breth = j - i
//         area = Math.max(area, length * breth)
//     }
// }

// return area

// TC = O(n^2), SC = O(1)

// method 2 Two pointer optmized

// let i = 0, j = height.length - 1
// let areaMax = 0
// while (i < j) {
//     let length = Math.min(height[i], height[j])
//     let breath = j - i
//     areaMax = Math.max(areaMax, (length * breth))
//     if (height[i] < height[j]) i++;
//     else j--;
// }
// return areaMax

// TC = O(n), SC = O(1)
// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

// que 13 leetcode -> 15 (medium)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {

//     // method 1 brootforce TLE dega
//     // let result = [];
//     // let seen = new Set();

//     // for(let i = 0; i<nums.length; i++){
//     //     for(let j = i+1; j<nums.length; j++){
//     //         for(let k = j+1; k<nums.length; k++){
//     //             if((nums[i]+nums[j]+nums[k]) === 0){
//     //                 let triplate  = [nums[i],nums[j],nums[k]]
//     //                 triplate.sort((a,b) => a - b);
//     //                 let key = triplate.join(",")

//     //                 if(!seen.has(key)){
//     //                     seen.add(key);
//     //                     result.push(triplate)
//     //                 }
//     //             }
//     //         }
//     //     }
//     // }

//     // return result
//     // TC = O(n^3), SC = O(n^2)

//     // method 2 optmized two pointer

//     // nums.sort((a, b) => a - b)

//     // let ans = []

//     // for (let i = 0; i < nums.length - 2; i++) {
//     //     if (i !== 0 && nums[i - 1] === nums[i]) continue;
//     //     let j = i + 1, k = nums.length - 1
//     //     while (j < k) {
//     //         let sum = nums[i] + nums[j] + nums[k]
//     //         if (sum === 0) {
//     //             let triplate = [nums[i], nums[j++], nums[k--]];
//     //             ans.push(triplate);
//     //             while (j < k && nums[j - 1] === nums[j]) j++;
//     //             while (j < k && nums[k + 1] === nums[k]) k--;
//     //         }
//     //         else if (sum < 0) j++;
//     //         else k--;
//     //     }
//     // }

//     // return ans
//     // TC = O(n^2), SC =O(n^2)

// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// que 14 leetcode -> 56 (medium)

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//     intervals.sort((a, b) => a[0] - b[0])
//     let ans = [];
//     for (let i = 0; i < intervals.length; i++) {
//         let curr = intervals[i]
//         let prev = ans[ans.length - 1]
//         if (ans.length === 0 || prev[1] < curr[0]) ans.push(curr)
//         else {
//             prev[1] = Math.max(prev[1],curr[1])
//         }
//     }

//     return ans

// };

// // TC = O(nlogn)+O(n) = O(nlogn) sorting ki wajha se , SC =O(n)

// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))

// que 15 leetcode -> 1299

/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function (arr) {
//     // this one is brootforce
//     // let ans = []
//     // for (let i = 0; i < arr.length - 1; i++) {
//     //     let greatest = arr[i + 1];
//     //     for (let j = i + 1; j < arr.length - 1; j++) {
//     //         greatest = Math.max(greatest, arr[j + 1])
//     //     }
//     //     ans.push(greatest)
//     // }
//     // ans.push(-1)
//     // return ans
//     // TC = O(n^2), SC = O(n)

//     let maxRight = -1

//     for(let i = arr.length - 1; i>=0; i--){
//         let curr = arr[i];
//         arr[i] = maxRight;
//         maxRight = Math.max(maxRight,curr);
//     }
//     return arr

        // TC = O(n), SC = O(1)

// };

// console.log(replaceElements([17, 18, 20, 5, 4, 6]))