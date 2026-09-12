// let arr = [1,1,3,3,5,7,7,9,9,6,6]

// let set = new Set()

// for(let i = 0; i<arr.length; i++){
//     if(set.has(arr[i])) set.delete(arr[i])
//     else set.add(arr[i])
// }

// console.log(set)

// que 2 leetcode -> 771

var numJewelsInStones = function (jewels, stones) {
    let count = 0
    let set = new Set()
    for(let i = 0; i<jewels.length; i++){
        set.add(jewels[i])
    }
    for(let i = 0; i<stones.length; i++){
        if(set.has(stones[i])) count++
    }

    return count
};

console.log(numJewelsInStones("aA","aAAbbbb"))