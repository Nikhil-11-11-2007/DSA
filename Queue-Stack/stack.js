class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

// implementing stack using linkedList

// class Stack{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     pushStack(val){
//         this.size++;
//         let newNode = new Node(val)
//         if(this.head === null){
//             this.head = newNode
//             return
//         }

//         let temp = this.head
//         while(temp.next !== null){
//             temp = temp.next
//         }
//         temp.next = newNode
//     }

//     popStack(){
//         if(this.head === null){
//             console.log("stack is empty")
//             return
//         }
//         this.size--;
//         let temp = this.head
//         while(temp.next.next !== null){
//             temp = temp.next
//         }
//         temp.next = null
//     }
//     printStack(){
//         if(this.head === null){
//             console.log("stack is empty")
//             return
//         }
//         let temp = this.head
//         while(temp !== null){
//             process.stdout.write(temp.data + " ")
//             temp = temp.next
//         }
//         console.log()
//     }
// }

// let s = new Stack()
// s.pushStack(10)
// s.pushStack(20)
// s.pushStack(30)
// s.printStack()
// s.popStack()
// s.printStack()

// implementing stack using Array

// class Stack{
//     constructor(){
//         this.arr = []
//     }
//     push(val){
//         this.arr.push(val)
//     }
//     pop(){
//         if(this.arr.length === 0){
//             console.log("stack is empty")
//             return
//         }
//         this.arr.pop()
//     }
// }

// let s = new Stack()
// s.push(10)
// s.push(20)
// s.push(30)
// console.log(s.arr)
// s.pop()
// console.log(s.arr)

// question stack & queue

// que 1 gfg

/**
 * @param {number[]} st
 * @returns {void}
 */
// class Solution {
//     insertAtBottom(st, a) {
//         if(st.length === 0){
//             st.push(a)
//             return
//         }
//         let x = st.pop()
//         this.insertAtBottom(st,a)
//         st.push(x)
//     }
//     reverseStack(st) {
//         // code here
//         if(st.length === 0) return
//         let a = st.pop()
//         this.reverseStack(st)
//         this.insertAtBottom(st,a)
//         return st
//         // itrative approch
//         // let q = []
//         // while(st.length !== 0){
//         //     q.push(st.pop())
//         // }
//         // while(q.length !== 0){
//         //     st.push(q.shift())
//         // }
//     }
// }

// let sol = new Solution()
// console.log(sol.reverseStack([1, 2, 3, 4]))

// que 2 gfg

// class Solution {
//     reverseQueue(q) {
//         // code here

//         if(q.length === 0) return
//         let a = q.shift()
//         this.reverseQueue(q)
//         q.push(a)
//         return q

//         // itrative
//         // let st = []
//         // while (q.length !== 0) {
//         //     st.push(q.pop())
//         // }
//         // while (st.length !== 0) {
//         //     q.push(st.shift())
//         // }
//         // return q

//     }
// }

// let sol = new Solution()
// console.log(sol.reverseQueue([1, 2, 3, 4]))

// que 3 leetcode -> 20

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//     let st = []
//     for (let i = 0; i < s.length; i++) {
//         let ch = s[i]
//         if (ch == "(" || ch == "{" || ch == "[") {
//             st.push(ch)
//             continue
//         }

//         if (st.length === 0) return false
//         if (ch == ")" && st[st.length - 1] === "(") st.pop()
//         else if (ch == "]" && st[st.length - 1] === "[") st.pop()
//         else if (ch == "}" && st[st.length - 1] === "{") st.pop()
//         else return false
//     }
//     if (st.length > 0) return false
//     return true

// };
// // TC = O(n), SC = O(n)
// console.log(isValid("([{}])"))