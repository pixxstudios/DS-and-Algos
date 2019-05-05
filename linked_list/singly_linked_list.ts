class LinkedList {

    protected id: number;
    protected next: object;

    constructor(id: number) {
        this.id = id;
    }

    display(){
        console.log(this.id);
    }
}

var obj1 = new LinkedList(1);
obj1.display();