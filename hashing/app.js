// que 1 leetcode -> 349

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

// que 2 leetcode - 560

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