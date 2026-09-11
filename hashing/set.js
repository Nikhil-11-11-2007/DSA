let arr = [1,1,3,3,5,7,7,9,9,6,6]

let set = new Set()

for(let i = 0; i<arr.length; i++){
    if(set.has(arr[i])) set.delete(arr[i])
    else set.add(arr[i])
}

console.log(set)
