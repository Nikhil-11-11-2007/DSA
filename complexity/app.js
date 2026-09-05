function example(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += i;
    }

    return sum;
}

// TC = O(n) , equ = n, SC = O(1)

function example(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    return arr;
}

// TC = O(n) , equ = n, SC = O(n)

function example(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}

// TC = O(n) , equ = 2n, SC = O(n)

function example(n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }

    return count;
}

// TC = O(n^2) , equ = n^2, SC = O(1)

function example(n) {
    let count = 0;

    while (n > 1) {
        n = Math.floor(n / 2);
        count++;
    }

    return count;
}

// TC = O(log(n)) , equ = log(n), SC = O(1)

function example(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    while (n > 1) {
        n = Math.floor(n / 2);
    }

    return arr;
}

// TC = O(n) , equ = n+log(n), SC = O(n)


function example(n) {
    for (let i = 0; i < n; i++) {
        let j = 1;

        while (j < n) {
            j = j * 2;
        }
    }
}

// TC = O(nlog(n)) , equ = nlog(n), SC = O(1)

function example(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            console.log(i, j);
        }
    }
}

// TC = O(n^2) , equ = n(n-1)/2, SC = O(1)