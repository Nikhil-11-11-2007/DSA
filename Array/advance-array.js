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

// que 10 leetcode -> 75

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // Duch national flag Algorithem
    let i = 0;
    let j = 0;
    let k = nums.length - 1;
    while(i<=k){
        if(nums[i] === 0){
            [nums[i],nums[j]] = [nums[j],nums[i]]
            i++;
            j++;
        }
        else if(nums[i] === 2){
            [nums[i], nums[k]] = [nums[k], nums[i]]
            k--;
        } else i++;
    }
    return nums
};

console.log(sortColors([2, 0, 2, 1, 1, 0]))

// TC = O(n), SC = O(n)