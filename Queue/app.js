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

// circular array method to implement Queue

class Queue {
    constructor(size) {
        this.arr = new Array(size)
        this.size = size
        this.front = -1
        this.rear = -1
    }

    // TC = O(1)
    enQueue(val) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("full queue")
            return
        }
        if (this.front === -1) this.front = 0
        this.rear = (this.rear + 1) % this.size
        this.arr[this.rear] = val
    }

    insertFront(val) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is full")
            return
        }
        if (this.front === -1) this.front = this.rear = 0
        else this.front = (this.front - 1 + this.size) % this.size
        this.arr[this.front] = val
    }

    deleteRear() {
        if (this.front === -1) {
            console.log("queue is empty")
            return
        }
        let deleteEl = this.arr[this.rear]
        if (this.rear === this.front) this.front = this.rear = -1
        else this.rear = (this.rear - 1 + this.size) % this.size
        return deleteEl

    }

    // TC = O(1)
    dQueue() {
        if (this.front === -1) {
            console.log("empty Queue")
            return
        }

        let deleteEle = this.arr[this.front]
        if (this.front === this.rear) this.front = this.rear = -1
        else this.front = (this.front + 1) % this.size
        return deleteEle
    }

    printQueue() {
        if (this.front === -1) {
            console.log("empty Queue")
            return
        }
        let i = this.front
        while (true) {
            process.stdout.write(this.arr[i] + " -> ");
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }
        console.log();
    }
}

let q = new Queue(8)
q.enQueue(-10)
q.enQueue(-20)
q.enQueue(-30)
q.enQueue(-40)
q.printQueue()
q.insertFront(10)
q.insertFront(20)
q.insertFront(30)
q.insertFront(40)
q.printQueue()
q.dQueue()
q.printQueue()
q.deleteRear()
q.printQueue()
