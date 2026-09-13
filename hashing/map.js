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

// que 2

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