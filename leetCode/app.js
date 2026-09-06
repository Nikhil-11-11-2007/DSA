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
//     let max = 0
//     for (let i = 0; i < s.length; i++) {
//         let ch = s[i]
//         if (!str.includes(ch)) {
//             str += ch
//         }
//         else {
//             str = str.slice(str.indexOf(ch) + 1) + ch
//         }

//         max = Math.max(max, str.length)
//     }

//     return max
// };

// console.log(lengthOfLongestSubstring("abcabcbb"))

// que 3

var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    let arr = []
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i])
            i++;
        } else {
            arr.push(nums2[j])
            j++;
        }
    }

    while (i < nums1.length) {
        arr.push(nums1[i])
        i++;
    }

    while (j < nums2.length) {
        arr.push(nums2[j])
        j++;
    }

    let n = arr.length

    if (n % 2 === 0) {
        let mid = n / 2
        return (arr[mid - 1] + arr[mid]) / 2
    } else {
        let mid = Math.floor(n / 2)
        return arr[mid]
    }

};

console.log(findMedianSortedArrays([1, 3], [2, 4]))