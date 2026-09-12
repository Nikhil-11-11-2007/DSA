// let arr = [1,1,3,3,5,7,7,9,9,6,6]

// let set = new Set()

// for(let i = 0; i<arr.length; i++){
//     if(set.has(arr[i])) set.delete(arr[i])
//     else set.add(arr[i])
// }

// console.log(set)

// que 2 leetcode -> 771

// var numJewelsInStones = function (jewels, stones) {
//     let count = 0
//     let set = new Set()
//     for(let i = 0; i<jewels.length; i++){
//         set.add(jewels[i])
//     }
//     for(let i = 0; i<stones.length; i++){
//         if(set.has(stones[i])) count++
//     }

//     return count
// };

// console.log(numJewelsInStones("aA","aAAbbbb"))

// que 3 leetcode -> 1832

// var checkIfPangram = function(sentence) {
//     let set = new Set(sentence)
//     return set.size === 26

//     // less optmize 

//     // let set = new Set(sentence)
//     // for(let i =0; i<26; i++){
//     //     let ch = String.fromCharCode(97+i)
//     //     if(!set.has(ch)) return false
//     // }
//     // return true
// };

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydo"))

// que 4 leetcode -> 2351

// /**
//  * @param {string} s
//  * @return {character}
//  */
// var repeatedCharacter = function (s) {
//     let str = ""
//     for (let i = 0; i < s.length; i++) {
//         if (str.includes(s[i])) return s[i]
//         else str += (s[i])
//     }
// };

// console.log(repeatedCharacter("abccbaacz"))

// que 5  leetcode -> 202

var isHappy = function(n) {
    let set = new Set();

    while (n !== 1) {
        if (set.has(n)) return false;
        set.add(n);
        let temp = n;
        let sum = 0;

        while (temp > 0) {
            let digit = temp % 10;
            sum += digit * digit;
            temp = Math.floor(temp / 10);
        }
        n = sum;
    }

    return true;
};

console.log(isHappy(19))