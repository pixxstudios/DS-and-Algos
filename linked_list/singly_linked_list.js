var LinkedList = /** @class */ (function () {
    function LinkedList(id) {
        this.id = id;
    }
    LinkedList.prototype.display = function () {
        console.log(this.id);
    };
    return LinkedList;
}());
var obj1 = new LinkedList(1);
obj1.display();
