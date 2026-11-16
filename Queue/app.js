// linkedList method to implement Queue
// class Node {
//     constructor(val) {
//         this.data = val
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.head = null
//     }
//     enqueue(val) {
//         let newNode = new Node(val)
//         if (this.head === null) {
//             this.head = newNode
//             return
//         }
//         let temp = this.head
//         while (temp.next !== null) {
//             temp = temp.next
//         }
//         temp.next = newNode
//     }

//     dQueue() {
//         if (this.head === null) {
//             console.log("Empty Queue")
//             return
//         }
//         this.head = this.head.next
//     }

//     printQueue() {
//         if (this.head === null) {
//             console.log("Empty Queue")
//             return
//         }
//         let temp = this.head
//         while (temp !== null) {
//             process.stdout.write(temp.data + " -> ")
//             temp = temp.next
//         }
//         console.log()
//     }
// }

// let q = new Queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.enqueue(50)
// q.printQueue()
// q.dQueue()
// q.printQueue()

// Array method to Implment Queue

// class Queue{
//     constructor(){
//         this.arr = []
//         this.size = 0
//     }

//     enQueue(val){
//         this.size++;
//         this.arr.push(val)
//     }
//     dQueue(){
//         if(this.arr.length === 0){
//             console.log("empty Queue")
//             return
//         }
//         this.size--;
//         this.arr.shift()
//     }
// }

// let q = new Queue()

// q.enQueue(10)
// q.enQueue(20)
// q.enQueue(30)
// q.enQueue(40)
// q.enQueue(50)
// console.log(q.arr)
// q.dQueue()
// console.log(q.arr)