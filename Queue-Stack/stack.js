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

// que 4 leetcode -> 232

// var MyQueue = function () {
//     this.inSt = []
//     this.revSt = []

// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function (x) {
//     this.inSt.push(x)
// }; //TC = O(1), SC = O(n)

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function () {
//     this.peek()
//     return this.revSt.pop()
// }; //TC = O(n), SC = O(n)

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function () {
//     if (this.revSt.length === 0) {
//         while (this.inSt.length !== 0) {
//             this.revSt.push(this.inSt.pop())
//         }
//     }
//     return this.revSt[this.revSt.length - 1]
// }; //TC = O(n), SC = O(n)

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function () {
//     return (this.inSt.length === 0 && this.revSt.length === 0)
// }; //TC = O(1), SC = O(n)

// let que = new MyQueue()
// que.push(10)
// que.push(20)
// que.push(30)
// console.log(que.pop())
// console.log(que.peek())
// console.log(que.empty())

// que 5 leetcode -> 225

// var MyStack = function() {
//     this.q = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//     this.q.push(x)
//     let size = this.q.length
//     while(size > 1){
//         this.q.push(this.q.shift())
//         size--;
//     }
// }; // TC = O(n), SC = O(n)

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//     return this.q.shift()
// }; // TC = O(n), SC = O(n)

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//     return this.q[0]
// }; // TC = O(1), SC = O(n)

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//     return this.q.length === 0
// }; // TC = O(1), SC = O(n)

// let stack = new MyStack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// console.log(stack.top())
// console.log(stack.pop())
// console.log(stack.empty())

// que 6 gfg

/**
* @param {number[]} arr
* @return s {number[]}
*/

// class Solution {
//     nextLargerElement(arr) {
//         // code here
//         let ans = new Array(arr.length), st = []
//         for (let i = arr.length - 1; i >= 0; i--) {
//             while (st.length !== 0 && (st[st.length - 1]) <= arr[i]) {
//                 st.pop()
//             }
//             if (st.length === 0) ans[i] = -1
//             else ans[i] = st[st.length - 1]
//             st.push(arr[i])
//         }
//         return ans

//     }
// } // TC = O(n), SC = O(n)

// let sol = new Solution()
// console.log(sol.nextLargerElement([1, 3, 2, 4]))

// que 7 leetcode -> 496

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function (nums1, nums2) {
//     let st = [], ans = new Array(nums1.length)
//     let map = new Map()
//     for (let i = 0; i < nums1.length; i++) {
//         map.set(nums1[i], i)
//     }
//     for (let i = nums2.length - 1; i >= 0; i--) {
//         while (st.length !== 0 && st[st.length - 1] <= nums2[i]) {
//             st.pop()
//         }
//         if (map.has(nums2[i])) {
//             if (st.length === 0) ans[map.get(nums2[i])] = -1
//             else if (map.has(nums2[i])) ans[map.get(nums2[i])] = st[st.length - 1]
//         }
//         st.push(nums2[i])
//     }

//     return ans
// }; // TC = O(n), SC = O(n)

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))

// que 8 gfg Previous Smaller Element

/**
* @param {number[]} arr
* @return s {number[]}
*/

// class Solution {
//     prevSmaller(arr) {
//         // code here
//         let st = [], ans = new Array(arr.length)
//         for (let i = 0; i < arr.length; i++) {
//             while (st.length !== 0 && st[st.length - 1] >= arr[i]) {
//                 st.pop()
//             }
//             if (st.length === 0) ans[i] = -1
//             else ans[i] = st[st.length - 1]
//             st.push(arr[i])
//         }
//         return ans
//     }
// } // TC = O(n), SC = O(n)
// let sol = new Solution()
// console.log(sol.prevSmaller([1, 6, 2]))

// que 9 gfg Stock Span Problem

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

// class Solution {
//     calculateSpan(arr) {
//         // code here
//         let ans = [], st = []
//         for (let i = 0; i < arr.length; i++) {
//             while (st.length !== 0 && arr[st[st.length - 1]] <= arr[i]) {
//                 st.pop()
//             }
//             if (st.length === 0) ans[i] = i + 1
//             else ans[i] = i - st[st.length - 1]
//             st.push(i)
//         }
//         return ans
//     }
// }

// let sol = new Solution()
// console.log(sol.calculateSpan([10, 4, 5, 90, 120, 80]))

// que 10 leetcode 901

var StockSpanner = function () {
    this.st = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let span = 1
    while (this.st.length !== 0 && this.st[this.st.length - 1][0] <= price) {
        span += this.st.pop()[1];
    }
    this.st.push([price, span]);
    return span
};