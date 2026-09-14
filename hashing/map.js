// que 1 frequencey of an number
// let arr = [1, 2, 6, 7, 5, 3, 7, 9, 2, 6, 7, 1, 9, 5, 2, 8, 1, 8]

// let map = new Map()
// for (let i = 0; i < arr.length; i++) {

//     if (map.has(arr[i])) {
//         map.set(arr[i], map.get(arr[i]) + 1)
//     } else {
//         map.set(arr[i], 1)
//     }

// }

// console.log(map)

// que 2 leetcode -> 387

// var firstUniqChar = function (s) {
//     let map = new Map()
//     for (let i = 0; i < s.length; i++) {
//         map.set(s[i], (map.get(s[i]) || 0) + 1)
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (map.get(s[i]) === 1) return i
//     }
//     return -1
// };

// console.log(firstUniqChar("leetcode"))

// que 3 leetcode -> 1

// var twoSum = function (nums, target) {
//     let map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(target - nums[i])) {
//             return [map.get(target - nums[i]),i]
//         } else {
//             map.set(nums[i], i)
//         }
//     }

// };

// console.log(twoSum([2,7,11,5],9))

// que 4 leetcode -> 1748

var sumOfUnique = function(nums) {
    let map = new Map()
    let sum = 0

    for(let i = 0; i<nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    for(let i = 0; i<nums.length; i++){
        if(map.get(nums[i]) === 1) {
            sum += nums[i]
        }
    }

    return sum
};

console.log(sumOfUnique([1,2,3,2]))