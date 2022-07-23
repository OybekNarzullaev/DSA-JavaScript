var Stack = /** @class */ (function () {
    function Stack() {
        this.count = 0;
        this.storage = {};
    }
    // push
    Stack.prototype.push = function (item) {
        this.storage[this.count++] = item;
    };
    // pop
    Stack.prototype.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };
    // size
    Stack.prototype.size = function () {
        return this.count;
    };
    //   peek
    Stack.prototype.peek = function () {
        return this.storage[this.count - 1];
    };
    return Stack;
}());
var myStack = new Stack();
console.log(myStack.peek());
myStack.push(1);
myStack.push(2);
myStack.push(4);
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
