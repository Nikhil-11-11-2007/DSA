let prompt = require("prompt-sync")()

// que 44

// let n = +prompt("Enter size of an array ")
// let arr = new Array(n)

// for(let i = 0; i<=n; i++){
//     arr[i] = +prompt("Enter number ")
// }

// console.log(arr)

// que 45

// let n = +prompt("Enter Number ")
// let arr = [1,2,3,4,5]

// function calculateSumAndMean(arr, n) {
//     // Write your logic here
//     let sum = 0 
//     for(let i = 0; i<arr.length; i++){
//         sum += arr[i]
//     }

//     let mean = sum/n
//     return [sum,mean]

// }

// console.log(calculateSumAndMean(arr, n))

// que 45

// let arr = [1000,2,35,4,500]

// function findGreatestElementAndIndex(arr) {
//     // Write your logic here
//     let gretestNum = arr[0]
//     let idx = 0
//     for(let i = 1; i<arr.length; i++){
//         if(gretestNum < arr[i]){
//             gretestNum = arr[i]
//             idx = i
//         }
//     }

//     return [gretestNum,idx]


// }

// console.log(findGreatestElementAndIndex(arr))

// que 46

// let arr = [2, 96, 69, 77, 145, 20]

// function findSecondGreatestElement(arr) {
//     // Write your logic here
//     let greatEl = Math.max(arr[0], arr[1])
//     let secGreat = Math.min(arr[0],arr[1])

//     for(let i = 2; i<arr.length; i++){
//         if(arr[i] > greatEl){
//             secGreat = greatEl
//             greatEl = arr[i]
//         }
//         else if(arr[i] > secGreat && arr[i] !== greatEl ){
//             secGreat = arr[i]
//         }
//     }

//     return secGreat

// }
// console.log(findSecondGreatestElement(arr))

// que 47

// let arr = [1,2,3,4,5]

function copyAndReverseArray(arr) {
    // Write your logic here
    // method-1
    // let newArr = []

    // for(let i = 0; i<arr.length; i++){
    //     newArr.push(arr[arr.length - i - 1])
    // }

    // return newArr

    // 2nd method 

    // let temp = new Array(arr.length)

    // let i = arr.length - 1

    // for(let j = 0; j<arr.length; j++){
    //     temp[j] = arr[i]
    //     i--
    // }
    // return temp

}

// console.log(copyAndReverseArray(arr))

// que 48

// let arr = [1, 2, 3, 4, 5]

// function reverseArray(arr) {

//     // Write your code here

//     let i = 0
//     let j = arr.length - 1

//     while (i < j) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//         i++;
//         j--
//     }

//     return arr

// }

// console.log(reverseArray(arr))

// que 49

// let arr = [0, 1, 0, 1, 1]

// function moveZerosToEnd(arr) {
//     // Write Your Code Here
//     let arr2 = []

//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] === 1){
//             arr2.push(1)
//         }
//     }

//     while(arr2.length < arr.length){
//         arr2.push(0)
//     }

//     return arr2
// }

// console.log(moveZerosToEnd(arr))

// que 50

// let arr = [0, 1, 0, 1, 1]

// class Solution {

//     moveZeros(arr) {
//         // write your code here
//         let i = 0, j = 0
//         while(i < arr.length){
//             if(arr[i] === 1){
//                 [arr[i],arr[j]] = [arr[j],arr[i]]
//                 j++;
//             }
//             i++;
//         }
//         return arr
//     }

// }

// let moveZero = new Solution()
// console.log(moveZero.moveZeros(arr))

// que 51

// let arr = [1, 2, 3, 4, 5]

// function leftRotateByOne(arr) {
//     // Write your logic here
//     // let i = 1, j = 0

//     // while (i < arr.length) {
//     //     [arr[j], arr[i]] = [arr[i], arr[j]]
//     //     j++;
//     //     i++;
//     // }

//     // return arr

//     // 2nd method for interview

//     let temp = arr[0]

//     for(let i = 1; i<arr.length; i++){
//         arr[i-1] = arr[i]
//     }
//     arr[arr.length - 1] = temp

//     return arr
// }

// console.log(leftRotateByOne(arr))

// que 52

// let arr = [1, 2, 3, 4, 5]
// let k = +prompt("Enter number ")

// function leftRotateByK(arr, k) {

//     k = k % 10

//     for (let i = 0; i < k; i++) {
//         let temp = arr[0]
//         for (let j = 1; j < arr.length; j++) {
//             arr[j - 1] = arr[j]
//         }

//         arr[arr.length - 1] = temp
//     }

//     return arr

// }

// console.log(leftRotateByK(arr, k))

// que 53

// let arr = [1, 2, 3, 4, 5]

// function rightRotateByOne(arr) {
//     // Write your logic here
//     // let temp = arr[arr.length - 1]

//     // for(let i = arr.length - 2; i>=0; i--){
//     //     arr[i+1] = arr[i]
//     // }
//     // arr[0] = temp

//     // return arr

//     let i = arr.length - 2;
//     let j = arr.length - 1;

//     while (i >= 0) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//         i--;
//         j--;
//     }

//     return arr
// }

// console.log(rightRotateByOne(arr))

// que 54

// let arr = [-1n, 3n, -2n, 5n]

// class Solution {
//     /**
//      * @param {bigint[]} arr - array of integers as BigInt
//      * @return {bigint} sum of absolute differences across all unordered pairs
//      */
//     sumOfAbsDiff(arr) {
//         // Write your code here
//         let sum = 0n;
//         for(let i = 0; i<arr.length; i++){
//             for(let j = i; j<arr.length; j++){
//                 sum += arr[i] > arr[j] ? arr[i] - arr[j] : arr[j] - arr[i]
//             }
//         }

//         return sum
//     }
// }

// let absNumSum = new Solution()

// console.log(absNumSum.sumOfAbsDiff(arr))

// que 55

// let arr = [1,2,3,4,5]

// class Solution {
//   /**
//    * @param {number[]} arr
//    * @returns {number[]} updated array
//    */
//   multiplyPrevNext(arr) {
//     // Write your logic here
//     let arr2 = []
//     for(let i = 0; i<arr.length; i++){
//         if(i === 0 ){
//             arr2.push(arr[i]*arr[i+1])
//         }
//         else if(i === arr.length - 1){
//             arr2.push(arr[i]*arr[arr.length - 2])
//         }
//         else{
//             arr2.push(arr[i-1]*arr[i+1])
//         }
//     }
//     return arr2
//   }

// //   let arr2 = new Array(arr.length)
// //     for(let i = 0; i<arr.length; i++){
// //         if(i === 0){
// //             arr2[0] = arr[i]*arr[1]
// //         }
// //         else if (i === arr.length - 1){
// //             arr2[i] = arr[arr.length - 2]*arr[i]
// //         }
// //         else{
// //             arr2[i] = arr[i-1]*arr[i+1]
// //         }

// //     }
// //     return arr2

// }

// let multiplyPrev = new Solution()

// console.log(multiplyPrev.multiplyPrevNext(arr))

// que 56

// class Solution {
//     minAddForBalance(arr) {
//         // Write your code here
//         let rightSum = 0
//         let leftSum = 0
//         for(let i = 0; i<arr.length/2; i++){
//             leftSum += arr[i]
//         }
//         for(let i = arr.length/2; i<arr.length; i++){
//             rightSum += arr[i]
//         }

//         return (rightSum > leftSum) ? rightSum - leftSum : leftSum - rightSum
//     }
// }

// let balance = new Solution()

// console.log(balance.minAddForBalance([2,2,2,2]))

// que 57

// class Solution {
//     sortHalves(arr) {
//         // write your code here
//         let n = Math.floor(arr.length / 2)
//         for (let i = 0; i < n - 1; i++) {
//             for (let j = i + 1; j < n; j++) {
//                 if (arr[i] > arr[j]) {
//                     [arr[i],arr[j]] = [arr[j],arr[i]]
//                 }

//             }
//         }

//         for(let i = n; i<arr.length-1; i++){
//             for(let j = i+1; j<arr.length; j++){
//                 if(arr[i]<arr[j]){
//                     [arr[i],arr[j]] = [arr[j],arr[i]]
//                 }
//             }
//         }


//         return arr
//     }
// }
// let halfSort = new Solution()
// console.log(halfSort.sortHalves([-4, -1, 3, 2, 10, 0]))

// searching Alogrithem

// que 58

// let target = +prompt("Enter search elelment ")
// let arr = [12, 34, 6, 78, 89, 45, 69]

// let idx = -1
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] === target){
//         idx = i
//         break
//     }
// }

// console.log(idx === -1 ? "not found": `found at ${idx} index`)

// que 59 binary search

// let arr = [1, 10, 78, 81, 93, 99, 1000]
// let target = +prompt("Enter Search element ")
// let idx = -1, start = 0, end = arr.length - 1

// while (start <= end) {
//     let mid = Math.floor((start + end)/2);
//     if (target === arr[mid]) {
//         idx = mid
//         break
//     }
//     else if (target < arr[mid]) end = mid - 1
//     else start = mid + 1
// }

// console.log(idx === -1 ? "Element not found" : `Element found at ${idx} index`)

// Sorting algorithems 

// que 60 bubble sort

// function bubbleSort(arr) {
//     // Write your logic here
//     let n = arr.length
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }

//     return arr
// }

// console.log(bubbleSort([3, 2, 9, 10, 5, 6, 7, 3, 4]))

// que 61 selection sort

function selectionSort(arr) {
    // Write your logic here
    let n = arr.length
    for(let i = 0; i<n-1; i++){
        let min = i
        for(let j = i+1; j<n; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        if(min !== i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }

    return arr

}

console.log(selectionSort([3, 2, 9, 10, 5, 6, 7, 3, 4]))