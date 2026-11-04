class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class LL {
    constructor() {
        this.head = null
        this.size = 0;
    }

    insertAtFirst(val) {
        this.size++;
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }

    insertAtLast(val) {
        this.size++;
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            return
        }

        let temp = this.head
        while (temp.next !== null) {
            temp = temp.next
        }
        temp.next = newNode
    }

    deleteAtFirst() {
        if (this.head === null) {
            console.log("linked list is empty")
            return
        }
        this.size--;
        this.head = this.head.next
    }

    deleteAtLast() {
        if (this.head === null) {
            console.log("linked list is empty")
            return
        }
        this.size--;
        let temp = this.head
        while(temp.next.next !== null){
            temp = temp.next
        }
        temp.next = null
    }

    printLL(head) {
        if (head === null) {
            console.log("linked list is empty")
            return
        }
        let temp = head
        while (temp !== null) {
            process.stdout.write(temp.data + " -> ")
            temp = temp.next
        }
        console.log("null")

    }
}

let obj = new LL()

obj.insertAtFirst(10)
obj.insertAtFirst(20)
obj.insertAtFirst(30)
obj.insertAtFirst(40)
obj.insertAtFirst(50)
obj.printLL(obj.head)
obj.insertAtLast(-20)
obj.insertAtLast(-30)
obj.printLL(obj.head)
obj.deleteAtFirst()
obj.printLL(obj.head)
obj.deleteAtLast()
obj.printLL(obj.head)