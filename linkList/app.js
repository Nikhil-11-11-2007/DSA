// class Node {
//     constructor(val) {
//         this.data = val
//         this.next = null
//     }
// }

const { createLinkedList, ListNode, printList } = require("./LL-template");

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

// var Node = function (val) {
//     this.data = val;
//     this.next = null;
// };

// var MyLinkedList = function () {
//     this.head = null;
//     this.size = 0

// };

// /** 
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function (index) {
//     if (index < 0 || index >= this.size) return -1

//     let temp = this.head
//     for (let i = 0; i < index; i++) {
//         temp = temp.next
//     }
//     return temp.data
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function (val) {
//     let newNode = new Node(val)
//     newNode.next = this.head
//     this.head = newNode
//     this.size++
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function (val) {
//     let newNode = new Node(val)

//     if (this.head === null) {
//         this.head = newNode
//         this.size++
//         return
//     }
//     let temp = this.head
//     while (temp.next !== null) {
//         temp = temp.next
//     }

//     temp.next = newNode
//     this.size++;
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function (index, val) {
//     if (index < 0 || index > this.size) return;

//     if (index === 0) {
//         this.addAtHead(val)
//         return
//     }

//     let newNode = new Node(val);
//     let temp = this.head
//     for (let i = 0; i < index - 1; i++) {
//         temp = temp.next
//     }
//     newNode.next = temp.next
//     temp.next = newNode
//     this.size++;
// };

// /** 
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function (index) {
//     if (index < 0 || index >= this.size) return;

//     if (index === 0) {
//         this.head = this.head.next;
//         this.size--;
//         return;
//     }

//     let temp = this.head;

//     for (let i = 0; i < index - 1; i++) {
//         temp = temp.next;
//     }

//     temp.next = temp.next.next;

//     this.size--;
// };

// MyLinkedList.prototype.printList = function () {
//     let temp = this.head;

//     while (temp !== null) {
//         process.stdout.write(temp.data + " -> ");
//         temp = temp.next;
//     }

//     console.log("null");
// };


// var obj = new MyLinkedList();

// var param_1 = obj.get(3);

// obj.addAtHead(5);
// obj.addAtTail(10);
// obj.addAtIndex(2, 7);
// obj.deleteAtIndex(0);

// obj.printList();

// que 2 leetcode -> 876

// que 2 GFG

/* Linked List Node Structure
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
} */

/**
* @param {Node} head
* @return {number}
*/
// class Solution {
//     getMiddle(head) {
//         // code here
//         let size = 0;
//         let temp = head

//         while (temp !== null) {
//             size++
//             temp = temp.next
//         }

//         let mid = Math.floor(size / 2)

//         temp = head

//         for (let i = 0; i < mid; i++) {
//             temp = temp.next
//         }

//         return temp.val
//     }
// }
// let obj = new Solution()
// let head = createLinkedList([1, 2, 3, 4, 5])
// console.log(obj.getMiddle(head))
// printList(result)


// que 3 leetcode -> 876

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var middleNode = function (head) {
//     // brotforce
//     // let size = 0
//     // let temp = head

//     // while (temp !== null) {
//     //     size++
//     //     temp = temp.next
//     // }

//     // let mid = Math.floor(size / 2)

//     // temp = head

//     // for (let i = 0; i < mid; i++) {
//     //     temp = temp.next
//     // }

//     // return temp

//     // optimal 
//     // let slow = head, fast = head

//     // while (fast !== null && fast.next !== null) {
//     //     fast = fast.next.next
//     //     slow = slow.next
//     // }

//     // return slow
// };

// let head = createLinkedList([1, 2, 3, 4, 5])
// let result = middleNode(head);

// printList(result);

// que 4 leetcode -> 21

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//     // brootforce
//     // let dummy = new ListNode(-1)
//     // let temp = dummy
//     // while (list1 !== null && list2 !== null) {
//     //     if (list1.val < list2.val) {
//     //         temp.next = list1
//     //         list1 = list1.next
//     //     } else {
//     //         temp.next = list2
//     //         list2 = list2.next
//     //     }
//     //     temp = temp.next
//     // }
//     // if (list1 !== null) temp.next = list1
//     // if (list2 !== null) temp.next = list2
//     // return dummy.next

//     // optimal using recursion

//     // if (list1 === null) return list2
//     // if (list2 === null) return list1

//     // if (list1.val < list2.val) {
//     //     list1.next = mergeTwoLists(list1.next, list2)
//     //     return list1
//     // } else {
//     //     list2.next = mergeTwoLists(list1, list2.next)
//     //     return list2
//     // }
// };

// let list1 = createLinkedList([1, 2, 4])
// let list2 = createLinkedList([1, 3, 4])

// let mergedLists = mergeTwoLists(list1, list2)

// printList(mergedLists)

// TC =O(n), SC= O(n)

// que 5 leetcode -> 141

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//     // brootforce
//     // if (head === null || head.next === null) return false;

//     // let temp = head;
//     // let set = new Set();

//     // while (temp !== null) {
//     //     if (set.has(temp)) return true;
//     //     set.add(temp);
//     //     temp = temp.next;
//     // }

//     // return false;

//     // optimal

//     let slow = head, fast = head
//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next
//         slow = slow.next
//         if (fast === slow) return true
//     }
//     return false
// };

// let head = createLinkedList([3, 2, 0, -4]);

// let secondNode = head.next.next;

// let temp = head;

// while (temp.next !== null) {
//     temp = temp.next;
// }
// temp.next = secondNode;

// console.log(hasCycle(head));

// que 6 leetcode -> 142

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head

    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) break;
    }

    if(fast === null && fast.next === null) return -1
};