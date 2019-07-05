class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    // insert last node
    insertLast(data) {
        let current = this.head;
        if(!this.head) this.head = new Node(data);
        else while(current.next) current = current.next;
        current.next = new Node(data);
    }

    // print linked list
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(500);

ll.printListData();