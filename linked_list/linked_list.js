class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let n = new Node(100);
console.log(n);