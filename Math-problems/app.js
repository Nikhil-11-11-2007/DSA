let prompt = require("prompt-sync")();
// let a = 20, b = 36

// console.log(gcd(Math.min(a,b),a,b))

// function gcd(n, a, b) {
//     if (n == 1) return 1;
//     if (a % n === 0 && b % n === 0) return n;
//     return gcd(n - 1, a, b)
// }

// que 1
/**
 * Find the GCD of two numbers using recursion
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
// function gcd(a, b) {
//     // Write your code here
//     if(b === 0) return a
//     return gcd(b,a%b)
// }

// console.log(gcd(20,36))
// TC = O(log(n)), SC = O(log(n))

// que 2

/**
 * Prints the GCD of the smallest and largest number in the array
 * using recursion.
 * @param {number[]} arr - input array
 */
function findArrayGCD(arr) {
    // Write your logic here
    let smallest = arr[0]
    let greatest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) smallest = arr[i]
        if (arr[i] > greatest) greatest = arr[i]
    }

    gcd(smallest, greatest)
    function gcd(a, b) {
        if (b === 0) return a
        return gcd(b, a % b)
    }

}

console.log(findArrayGCD([5, 10, 15, 20, 25]))
