// class Node {
//     constructor(val) {
//         this.data = val
//         this.next = null
//     }
// }

// class LL {
//     constructor() {
//         this.head = null
//         this.size = 0;
//     }

//     insertAtFirst(val) {
//         this.size++;
//         let newNode = new Node(val)
//         if (this.head === null) {
//             this.head = newNode
//             return
//         }
//         newNode.next = this.head
//         this.head = newNode
//     }

//     insertAtLast(val) {
//         this.size++;
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

//     deleteAtFirst() {
//         if (this.head === null) {
//             console.log("linked list is empty")
//             return
//         }
//         this.size--;
//         this.head = this.head.next
//     }

//     deleteAtLast() {
//         if (this.head === null) {
//             console.log("linked list is empty")
//             return
//         }
//         this.size--;
//         let temp = this.head
//         while (temp.next.next !== null) {
//             temp = temp.next
//         }
//         temp.next = null
//     }

//     insertAtPosition(val, position) {
//         this.size++;
//         let newNode = new Node(val)
//         if (position <= 0 || position > this.size + 1) {
//             console.log("position is Out of range")
//             return
//         }
//         let temp = this.head
//         for (let i = 1; i < position - 1; i++) {
//             temp = temp.next
//         }
//         newNode.next = temp.next
//         temp.next = newNode
//     }

//     deleteAtPosition(position) {
//         if (position <= 0 || position > this.size ) {
//             console.log("position is Out of range")
//             return
//         }

//         if(position === 1){
//             this.head = this.head.next
//             this.size--;
//             return
//         }
//         let temp = this.head;
//         for(let i = 1; i<position -1; i++){
//             temp = temp.next
//         }

//         temp.next = temp.next.next
//         this.size--;

//     }



//     printLL(head) {
//         if (head === null) {
//             console.log("linked list is empty")
//             return
//         }
//         let temp = head
//         while (temp !== null) {
//             process.stdout.write(temp.data + " -> ")
//             temp = temp.next
//         }
//         console.log("null")

//     }
// }

// let obj = new LL()

// obj.insertAtFirst(10)
// obj.insertAtFirst(20)
// obj.insertAtFirst(30)
// obj.insertAtFirst(40)
// obj.insertAtFirst(50)
// obj.printLL(obj.head)
// obj.insertAtLast(-20)
// obj.insertAtLast(-30)
// obj.printLL(obj.head)
// obj.deleteAtFirst()
// obj.printLL(obj.head)
// obj.deleteAtLast()
// obj.printLL(obj.head)
// obj.insertAtPosition(35, 3)
// obj.printLL(obj.head)
// obj.deleteAtPosition(1)
// obj.printLL(obj.head)

// que 1 leetcode 707

var Node = function (val) {
    this.data = val;
    this.next = null;
};

var MyLinkedList = function () {
    this.head = null;
    this.size = 0

};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1

    let temp = this.head
    for (let i = 0; i < index; i++) {
        temp = temp.next
    }
    return temp.data
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val)

    if (this.head === null) {
        this.head = newNode
        this.size++
        return
    }
    let temp = this.head
    while (temp.next !== null) {
        temp = temp.next
    }

    temp.next = newNode
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
        this.addAtHead(val)
        return
    }

    let newNode = new Node(val);
    let temp = this.head
    for (let i = 0; i < index - 1; i++) {
        temp = temp.next
    }
    newNode.next = temp.next
    temp.next = newNode
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let temp = this.head;

    for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
    }

    temp.next = temp.next.next;

    this.size--;
};

MyLinkedList.prototype.printList = function () {
    let temp = this.head;

    while (temp !== null) {
        process.stdout.write(temp.data + " -> ");
        temp = temp.next;
    }

    console.log("null");
};


var obj = new MyLinkedList();

var param_1 = obj.get(3);

obj.addAtHead(5);
obj.addAtTail(10);
obj.addAtIndex(2, 7);
obj.deleteAtIndex(0);

obj.printList();
