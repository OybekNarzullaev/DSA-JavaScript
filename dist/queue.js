var Queue = /** @class */ (function () {
    function Queue() {
        this.collection = [];
    }
    Queue.prototype.print = function () {
        return this.collection;
    };
    Queue.prototype.enqueue = function (number) {
        this.collection.push(number);
    };
    Queue.prototype.dequeue = function () {
        this.collection.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.collection.length === 0 ? true : false;
    };
    Queue.prototype.front = function () {
        return this.collection[0];
    };
    Queue.prototype.size = function () {
        return this.collection.length;
    };
    return Queue;
}());
var myQueue = new Queue();
console.log(myQueue.front());
console.log(myQueue.print());
myQueue.enqueue(1);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(0);
console.log(myQueue.print());
myQueue.dequeue();
console.log(myQueue.print());
myQueue.size();
console.log(myQueue.front());
