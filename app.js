// let [a,b] = [10,20]
// que1 sum of two integers
// function sum(a, b) {
//     // Write your logic here

//     return console.log(a + b)

// }

// sum(10,20)

// que2 Greet the user

// function greet(name, age) {
//     // Write your logic here
//     console.log(`Hello ${name} you are ${age} years old.`)

// }

// greet("Shery",12)

// que 3

function swapNumbers(a, b) {   
    // 1st method
    // let temp = a
    // a = b
    // b = temp

    // 2nd method 

    [a,b] = [b,a]

    console.log(a,b)

}

swapNumbers(5,10)
