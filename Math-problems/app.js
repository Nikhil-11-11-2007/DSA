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
// function findArrayGCD(arr) {
//     // Write your logic here
//     let smallest = arr[0]
//     let greatest = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) smallest = arr[i]
//         if (arr[i] > greatest) greatest = arr[i]
//     }

//     return gcd(smallest, greatest)
//     function gcd(a, b) {
//         if (b === 0) return a
//         return gcd(b, a % b)
//     }

// }

// 2nd method 

/**
 * Prints the GCD of the smallest and largest number in the array
 * using recursion.
 * 
 * @param {number[]} arr - input array
 */
// function findArrayGCD(arr) {
//     const min = Math.min(...arr); // Smallest number
//     const max = Math.max(...arr); // Largest number
//     const result = gcd(min, max); // GCD of min and max
//     return result // Print result
// }

/**
 * Recursive function to compute GCD of two numbers
 * 
 * @param {number} a 
 * @param {number} b 
 * @return {number} GCD of a and b
 */
// function gcd(a, b) {
//     if (b === 0) return a; // Base case
//     return gcd(b, a % b); // Recursive step
// }


// console.log(findArrayGCD([5, 10, 15, 20, 25]))

// TC = O(n) + O(log(n)) = O(n), SC = O(log(n))
// 2nd method complexity TC = O(n) + O(n) + O(log(n)) = O(n), SC = O(log(n))

// que 3 leetcode -> 9

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    let original = x;
    let reverse = 0;

    while (x > 0) {
        let digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reverse;
};

console.log(isPalindrome(121))