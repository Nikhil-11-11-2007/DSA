let prompt = require("prompt-sync")()

// let arr = new Array(3)

// for(let i = 0; i<arr.length; i++){
//     arr[i] = new Array(3)
// }

// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr[i].length; j++){
//         arr[i][j] = +prompt("Enter a number ")
//     }
// }

// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr[i].length; j++){
//         process.stdout.write(arr[i][j] + " ")
//     }
//     console.log()
// }

// let arr2 = Array.from({length:3}, () => new Array(3).fill(0))

// for(let i = 0; i<arr2.length; i++){
//     for(let j = 0; j<arr2[i].length; j++){
//         process.stdout.write(arr2[i][j] + " ")
//     }
//     console.log()
// }

// let arr3 = new Array(3)

// for (let i = 0; i < arr3.length; i++) {
//     arr3[i] = new Array(+prompt("Enter length of inner array "))
// }

// for (let i = 0; i < arr3.length; i++) {
//     for (let j = 0; j < arr3[i].length; j++) {
//         arr3[i][j] = +prompt("Enter a value ")
//     }
// }

// for (let i = 0; i < arr3.length; i++) {
//     for (let j = 0; j < arr3[i].length; j++) {
//         process.stdout.write(arr3[i][j] + " ")
//     }
//     console.log()
// }

// que 1 leetcode -> 1572

// var diagonalSum = function (mat) {

//     // TC = O(n^2)
//     // let sum = 0;
//     // for (let i = 0; i < mat.length; i++) {
//     //     for (let j = 0; j < mat[i].length; j++) {
//     //         if (i === j || (i + j) === mat.length - 1) {
//     //             sum += mat[i][j]
//     //         }
//     //     }
//     // }

//     // return sum

//     // 2nd method optmized TC = O(n)

//     let sum = 0
//     let n = mat.length

//     for(let i = 0; i<mat.length; i++){
//         sum += mat[i][i]
//         if(i !== n-1-i){
//             sum += mat[i][n-1-i]
//         }
//     }

//     return sum


// };

// console.log(diagonalSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]))

// que 2 letcode -> 867

// var transpose = function (matrix) {

//     let row = matrix.length
//     let col = matrix[0].length
//     let arr = []

//     for(let i = 0; i<col; i++){
//         arr[i] = new Array(row)
//     }

//     for(let i = 0; i<matrix.length; i++){
//         for(let j = 0; j<matrix[i].length; j++){
//             arr[j][i] = matrix[i][j]
//         }
//     }

//     return arr

// };

// console.log(transpose([
//     [1, 2, 3],
//     [4, 5, 6]
// ]))

// que 3 leetcode -> 832

// var flipAndInvertImage = function (image) {
//     for (let i = 0; i < image.length; i++) {
//         let arr = image[i]
//         let j = 0;
//         let k = arr.length - 1
//         while (j < k) {
//             [arr[j], arr[k]] = [arr[k], arr[j]]
//             j++;
//             k--;
//         }
//     }

//     for (let i = 0; i < image.length; i++) {
//         for (let j = 0; j < image[i].length; j++) {
//             if (image[i][j] === 1) image[i][j] = 0
//             else image[i][j] = 1
//         }
//     }

//     return image

// };

// console.log(flipAndInvertImage(
//     [
//         [1, 1, 0],
//         [1, 0, 1],
//         [0, 0, 0]
//     ]
// ))

// que 4 leetcode -> 48

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function (matrix) {

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = i+1; j < matrix[i].length; j++) {
//                 [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
//         }
//     }

//     for(let i = 0; i<matrix.length; i++){
//         let arr = matrix[i]
//         let j = 0;
//         let k = matrix[i].length - 1
//         while(j<k){
//             [arr[j], arr[k]] = [arr[k], arr[j]]
//             j++;
//             k--;
//         }
//     }

//     return matrix

// };

// console.log(rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]))

// que 5 leetcode -> 54

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let arr = [];
    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) {
            arr.push(matrix[top][j])
        }
        top++;
        if (top <= bottom) {
            for (let i = top; i <= bottom; i++) {
                arr.push(matrix[i][right])
            }
            right--;
        }

        if (top <= bottom && left <= right) {
            for (let j = right; j >= left; j--) {
                arr.push(matrix[bottom][j])
            }
            bottom--;
        }

        if (top <= bottom && left <= right) {
            for (let i = bottom; i >= top; i--) {
                arr.push(matrix[i][left])
            }
            left++;
        }
    }

    return arr

};


console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

// que 6 leetcode -> 73

/**
  * @param {number[][]} matrix
  * @return {void} Do not return anything, modify matrix in-place instead.
*/
// var setZeroes = function (matrix) {
//     let row = matrix.length;
//     let cols = matrix[0].length;
//     let firstRowZero = false;
//     let firstColZero = false;

//     for(let j = 0; j<cols; j++){
//         if(matrix[0][j] === 0){
//             firstRowZero = true;
//             break;
//         }
//     }

//     for(let i = 0; i<row; i++){
//         if(matrix[i][0] === 0){
//             firstColZero = true;
//             break;
//         }
//     }

//     for(let i = 1; i<row; i++){
//         for(let j = 1; j<cols; j++){
//             if(matrix[i][j] === 0){
//                 matrix[i][0] = 0
//                 matrix[0][j] = 0
//             }
//         }
//     }

//     for(let i = 1; i<row; i++){
//         for(let j= 1; j<cols; j++){
//             if(matrix[i][0] === 0 || matrix[0][j] === 0){
//                 matrix[i][j] = 0
//             }
//         }
//     }

//     if(firstRowZero){
//         for(let j = 0; j<cols; j++){
//             matrix[0][j] = 0
//         }
//     }

//     if(firstColZero){
//         for(let i = 0; i<row; i++){
//             matrix[i][0] = 0
//         }
//     }

//     return matrix
// };

// console.log(setZeroes([
//     [1, 2, 0, 4],
//     [5, 6, 7, 0],
//     [9,10,11,12]
// ]))