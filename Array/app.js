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

let arr = [0, 1, 0, 1, 1]

function moveZerosToEnd(arr) {
    // Write Your Code Here
    // let arr2 = []

    // for(let i = 0; i<arr.length; i++){
    //     if(arr[i] === 1){
    //         arr2.push(1)
    //     }
    // }

    // while(arr2.length < arr.length){
    //     arr2.push(0)
    // }

    // return arr2

    // let n = arr.length

    // let arr2 = new Array(n)

    // let i = 0, j = 0

    // while(arr2.length < arr.length){

    //     if(arr[i] === 0){
    //         arr2[j] === arr[i]
    //         i++;
    //         j++;
    //     }

    // }

    // return arr2

}

console.log(moveZerosToEnd(arr))