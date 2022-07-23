var Set = /** @class */ (function () {
    function Set() {
        this.collection = [];
    }
    Set.prototype.has = function (e) {
        if (this.collection.indexOf(e) !== -1) {
            return true;
        }
        return false;
    };
    Set.prototype.values = function () {
        return this.collection;
    };
    Set.prototype.add = function (num) {
        if (this.collection.indexOf(num) === -1) {
            this.collection.push(num);
            return true;
        }
        return false;
    };
    Set.prototype.remove = function (num) {
        if (this.collection.indexOf(num) === -1) {
            return false;
        }
        this.collection.splice(this.collection.indexOf(num), 1);
        return true;
    };
    Set.prototype.size = function () {
        return this.collection.length;
    };
    Set.prototype.onion = function (otherSet) {
        var newSet = new Set();
        var currentValues = this.collection;
        var newValues = otherSet.collection;
        newValues.forEach(function (element) {
            newSet.add(element);
        });
        currentValues.forEach(function (element) {
            newSet.add(element);
        });
        return newSet;
    };
    Set.prototype.intersect = function (otherSet) {
        var newSet = new Set();
        this.collection.forEach(function (elem) {
            if (otherSet.has(elem)) {
                newSet.add(elem);
            }
        });
        return newSet;
    };
    Set.prototype.difference = function (otherSet) {
        var _this = this;
        var newSet = new Set();
        otherSet.collection.forEach(function (elem) {
            if (!_this.has(elem))
                newSet.add(elem);
        });
        this.collection.forEach(function (elem) {
            if (!otherSet.has(elem))
                newSet.add(elem);
        });
        return newSet;
    };
    return Set;
}());
var mySet = new Set();
console.log(mySet.values());
mySet.add(5);
mySet.add(6);
mySet.add(6);
mySet.add(7);
mySet.add(8);
console.log(mySet.values());
mySet.remove(7);
console.log(mySet.values());
console.log(mySet.has(0), mySet.has(6), mySet.size());
var otherSet = new Set();
otherSet.add(1);
otherSet.add(2);
otherSet.add(3);
otherSet.add(4);
otherSet.add(5);
console.log(mySet.onion(otherSet).collection);
console.log(mySet.intersect(otherSet).collection);
console.log(mySet.difference(otherSet).collection);
