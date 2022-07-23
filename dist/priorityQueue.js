var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.collection = [];
    }
    PriorityQueue.prototype.isEmpty = function () {
        return this.collection.length === 0;
    };
    PriorityQueue.prototype.enqueue = function (element) {
        if (this.isEmpty()) {
            this.collection.push(element);
            return true;
        }
        for (var i = 0; i < this.collection.length; i++) {
            if (element.index < this.collection[i].index) {
                this.collection.splice(i, 0, element);
                return true;
            }
        }
        this.collection.push(element);
        return true;
    };
    PriorityQueue.prototype.dequeue = function () {
        this.collection.shift();
    };
    PriorityQueue.prototype.front = function () {
        return this.collection[0];
    };
    PriorityQueue.prototype.size = function () {
        return this.collection.length;
    };
    PriorityQueue.prototype.print = function () {
        return this.collection;
    };
    return PriorityQueue;
}());
var myPQueue = new PriorityQueue();
console.log(myPQueue.print());
var el1 = {
    index: 1,
    value: "Oybek"
};
myPQueue.enqueue(el1);
var el2 = {
    index: 2,
    value: "Shoxzod"
};
myPQueue.enqueue(el2);
var el3 = {
    index: 0,
    value: "Madinabonu"
};
myPQueue.enqueue(el3);
console.log(myPQueue.print());
myPQueue.dequeue();
console.log(myPQueue.print());
