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