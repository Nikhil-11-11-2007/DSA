let prompt = require("prompt-sync")();

// Algorithem divde & conquer ya Merge sort

let arr = [10, 5, 1, 9]

function merge(arr, f, l, mid) {

    let temp = new Array(l - f + 1)
    let i = f, j = mid + 1, k = 0;

    while (i <= mid && j <= l) {
        if (arr[i] < arr[j]) temp[k++] = arr[i++]
        else temp[k++] = arr[j++]
    }
    while (i <= mid) temp[k++] = arr[i++]
    while (j <= l) temp[k++] = arr[j++]

    i = f, k = 0

    while (k < temp.length) arr[i++] = temp[k++]

}

function divide(arr, f, l) {
    if (f >= l) return
    let mid = Math.floor((f + l) / 2)
    divide(arr, f, mid)
    divide(arr, mid + 1, l)
    merge(arr, f, l, mid)
}

divide(arr, 0, 3)

console.log(arr)