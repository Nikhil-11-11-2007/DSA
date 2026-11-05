
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Array to Linked List
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let temp = head;

    for (let i = 1; i < arr.length; i++) {
        temp.next = new ListNode(arr[i]);
        temp = temp.next;
    }

    return head;
}

// Print Linked List
function printList(head) {
    let temp = head;

    while (temp !== null) {
        process.stdout.write(temp.val + " -> ");
        temp = temp.next;
    }

    console.log("null");
}


module.exports = {
    ListNode,
    createLinkedList,
    printList
};