let prompt = require("prompt-sync")();

// Algorithem divde & conquer ya Merge sort

// let arr = [10, 5, 1, 9]

// function merge(arr, f, l, mid) {

//     let temp = new Array(l - f + 1)
//     let i = f, j = mid + 1, k = 0;

//     while (i <= mid && j <= l) {
//         if (arr[i] < arr[j]) temp[k++] = arr[i++]
//         else temp[k++] = arr[j++]
//     }
//     while (i <= mid) temp[k++] = arr[i++]
//     while (j <= l) temp[k++] = arr[j++]

//     i = f, k = 0

//     while (k < temp.length) arr[i++] = temp[k++]

// }

// function divide(arr, f, l) {
//     if (f >= l) return
//     let mid = Math.floor((f + l) / 2)
//     divide(arr, f, mid)
//     divide(arr, mid + 1, l)
//     merge(arr, f, l, mid)
// }

// divide(arr, 0, 3)

// console.log(arr)

// que 1 leetcode -> 912 medium

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArray = function (nums) {
//     function merge(nums, f, l, mid) {
//         let arr = new Array(l - f + 1)
//         let i = f, j = mid + 1, k = 0
//         while (i <= mid && j <= l) {
//             if (nums[i] < nums[j]) arr[k++] = nums[i++]
//             else arr[k++] = nums[j++]
//         }
//         while (i <= mid) arr[k++] = nums[i++]
//         while (j <= l) arr[k++] = nums[j++]
//         i = f, k = 0
//         while (k < arr.length) nums[i++] = arr[k++]
//     }

        // TC = O(n)

//     function divide(nums, f, l) {
//         if (f >= l) return
//         let mid = Math.floor((f + l) / 2)
//         divide(nums, f, mid)
//         divide(nums, mid + 1, l)
//         merge(nums, f, l, mid)
//     }
//     divide(nums, 0, nums.length - 1)

        // TC O(logn)

//     return nums
// };

// TC = O(n)*O(log(n)) = O(nlogn), SC = O(n)

// console.log(sortArray([5, 2, 3, 1]))

