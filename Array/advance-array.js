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

var merge = function (nums1, m, nums2, n) {

    let i = m - 1, j = n - 1, k = m + n - 1
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--]
        else nums1[k--] = nums2[j--]
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--]
    }

    return nums1

};

console.log(merge([8, 0, 0, 0, 0], 1, [1, 4, 6, 7], 4))

// TC = O(n)+O(n) = O(n), SC =O(1)