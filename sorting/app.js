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

// que 2 Quick Sort algorithim
// let nums = [5, 2, 3, 1]

// function findPartition(nums, f, l) {
//         let i = f - 1, j = f, pivot = nums[l]
//         while (j < l) {
//                 if (nums[j] <= pivot) {
//                         i++;
//                         [nums[i], nums[j]] = [nums[j], nums[i]]
//                 }
//                 j++;
//         }

//         i++;
//         [nums[i], nums[l]] = [nums[l], nums[i]]
//         return i
// }

// function quickSort(nums, f, l) {
//         if (f >= l) return
//         let pIdx = findPartition(nums, f, l)
//         quickSort(nums, f, pIdx - 1)
//         quickSort(nums, pIdx + 1, l)
// }

// quickSort(nums, 0, nums.length - 1)

// console.log(nums)

// que 3

// let arr = [38, 27, 43, 3, 9, 82, 10]
// function quickSort(arr, low, high) {
//         // Your code here
//         if (low >= high) return
//         function partition(arr, low, high) {
//                 let i = low - 1, pivot = arr[high], j = low
//                 while (j < high) {
//                         if (arr[j] < pivot) {
//                                 i++;
//                                 [arr[i], arr[j]] = [arr[j], arr[i]]
//                         }
//                         j++
//                 }
//                 i++;
//                 [arr[i], arr[high]] = [arr[high], arr[i]]
//                 return i
//         }

//         let pivotIdx = partition(arr, low, high)
//         quickSort(arr, low, pivotIdx - 1)
//         quickSort(arr, pivotIdx + 1, high)
//         return arr

// }

// console.log(quickSort(arr, 0, arr.length - 1))

// cyclic sort algorithem

// function cyclicSort(arr) {
//     let i = 0
//     while(i<arr.length){
//         let currIdx = arr[i]
//         if(arr[i] !== arr[currIdx]){
//             [arr[i],arr[currIdx]] = [arr[currIdx],arr[i]]
//         } else i++
//     }

//     return arr
// }

// TC = O(n), SC = O(n)

// let arr = [2, 5, 1, 6, 3, 7, 4, 0]

// console.log(cyclicSort(arr))

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let i = 0
    while (i < nums.length) {
        let currIdx = nums[i]
        if ((nums[i] < nums.length) && (nums[i] !== nums[currIdx])) {
            [nums[i], nums[currIdx]] = [nums[currIdx], nums[i]]
        }
        else i++
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i
    }
    return nums.length

};

console.log(missingNumber([3, 0, 1]))
// 1,0,3 -> 0,1,3