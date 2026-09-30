let a = 20, b = 36

console.log(gcd(Math.min(a,b),a,b))

function gcd(n, a, b) {
    if (n == 1) return 1;
    if (a % n === 0 && b % n === 0) return n;
    return gcd(n - 1, a, b)
}