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

let arr3 = new Array(3)

for (let i = 0; i < arr3.length; i++) {
    arr3[i] = new Array(+prompt("Enter length of inner array "))
}

for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3[i].length; j++) {
        arr3[i][j] = +prompt("Enter a value ")
    }
}

for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3[i].length; j++) {
        process.stdout.write(arr3[i][j] + " ")
    }
    console.log()
}