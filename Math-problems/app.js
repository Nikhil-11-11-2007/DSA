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
// var isPalindrome = function (x) {
//     if (x < 0) return false;
//     let original = x;
//     let reverse = 0;

//     while (x > 0) {
//         let digit = x % 10;
//         reverse = reverse * 10 + digit;
//         x = Math.floor(x / 10);
//     }

//     return original === reverse;
// };

// console.log(isPalindrome(121))

// que 4 leetcode -> 204

/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function(n) {
//     let prime = new Array(n+1).fill(true)
//     prime[0] = prime[1] = false
//     let count = 0
//     for(let i = 2; i<=Math.sqrt(n); i++){
//         if(prime[i]){
//             for(let j = i*i; j<n; j+=i){
//                 prime[j] = false
//             }
//         }
//     }

//     for(let i =2; i<n; i++){
//         if(prime[i]) count++
//     }

//     return count
// };

// console.log(countPrimes(10))

// TC = n * log(log(n)) = O(n log log(n)), TC = O(n)

// que 5 leetcode -> 69

/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {
//     if (x < 2) return x
//     let left = 1
//     let right = x
//     let ans = 0
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)
//         if (mid * mid === x) return mid;
//         if (mid * mid < x) {
//             ans = mid
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return ans

//     // 2nd method
//     // let i;
//     // for(i = 1; i*i<=x; i++){
//     //     if(i*i === x) return i
//     // }
//     // return i - 1

// };

// console.log(mySqrt(20))

// TC = O(log(x)), SC = O(1)

// que 6 leetcode -> 50

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// function solve(x, n) {
//     if (n === 0) return 1;
//     let ans = solve(x, Math.floor(n / 2));
//     if (n % 2 === 0) return ans * ans;
//     return ans * ans * x;
// }
// var myPow = function (x, n) {
//     if (n < 0) {
//         n = -n;
//         return 1 / solve(x, n);
//     }
//     return solve(x, n);
// };

// console.log(myPow(2,10))

// TC = O(log(n)), SC = O(log(n))

// que 7

/**
 * Print all factors of the number in ascending order
 * @param {number} n
 */
// function findFactors(n) {
//     // Write your code here
//     function hleper(i) {
//         if (i > n / 2) return;
//         if (n % i === 0) process.stdout.write(i + " ")
//         return hleper(i + 1)
//     }

//     hleper(1)

//     process.stdout.write(n.toString())

//     // 2nd method less optmized

//     // let factors = []

//     // for(let i = 1; i<=Math.sqrt(n); i++){
//     //     if(n%i === 0) {
//     //         factors.push(i)
//     //         if(i !== n/i){
//     //             factors.push(n/i)
//     //         }
//     //     }
//     // }

//     // factors.sort((a,b) => a - b)
//     // console.log(factors.join(" "))

// }

// findFactors(6)

// TC = O(n/2) + O(1) = O(n), SC = O(n)

// que 8 leetcode -> 1492

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    let factors = []
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i)
            if (i !== n / i) {
                factors.push(n / i)
            }
        }
    }

    factors.sort((a, b) => a - b)
    return (factors.length < k) ? -1 : factors[k - 1]
};

console.log(kthFactor(7, 2))

// TC = O(√n + d log d), SC = O(d)
// TC = O(√n + d log d), SC = O(d)
// Loop √n times
//        ↓
//    O(√n)

// Array has d elements
//        ↓
//    Sorting
//        ↓
//  O(d log d)

// Array stores d elements
//        ↓
//    O(d) space