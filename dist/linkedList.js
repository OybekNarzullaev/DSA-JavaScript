var NodeLinkedList = /** @class */ (function () {
    function NodeLinkedList(element) {
        if (element === void 0) { element = null; }
        this.element = element;
        this.next = null;
    }
    return NodeLinkedList;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.length = 0;
    }
    LinkedList.prototype.getElements = function () {
        var elements = [];
        var currentNode = this.head;
        while (currentNode) {
            elements.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return elements;
    };
    LinkedList.prototype.size = function () {
        return this.length;
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.add = function (element) {
        var node = new NodeLinkedList(element);
        // agar ro'yhat bo'sh bo'lsa
        if (this.head === null) {
            this.head = node;
        }
        // aks holda yangi elementni ro'yhatni oxiriga qo'yamiz
        else {
            var currentNode = this.head;
            //   oxirini topish
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        // o'lchaminini bittaga oshirish
        this.length++;
    };
    LinkedList.prototype.remove = function (element) {
        var currentNode = this.head;
        var prevNode;
        // agar boshidagi elementi o'chirilishi kerak bo'lsa
        if (element === currentNode.element) {
            this.head = currentNode.next;
        }
        // keyingi elementlaridan birini o'chirish
        else {
            while (currentNode.element !== element) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            prevNode.next = currentNode.next;
        }
        this.length--;
    };
    LinkedList.prototype.isEmpty = function () {
        if (this.length === 0)
            return true;
        return false;
    };
    LinkedList.prototype.indexOf = function (element) {
        var currentNode = this.head;
        var index = -1;
        while (currentNode) {
            index++;
            if (element === currentNode.element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    };
    LinkedList.prototype.elementAt = function (index) {
        var currentNode = this.head;
        var indx = -1;
        while (currentNode) {
            indx++;
            if (index === indx) {
                return currentNode.element;
            }
            currentNode = currentNode.next;
        }
        return -1;
    };
    LinkedList.prototype.addAt = function (element, index) {
        var node = new NodeLinkedList(element);
        var currentNode = this.head;
        var previousNode;
        var currentIndex = 0;
        // boshiga qo'shish kerak bo'lsa;
        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        }
        // boshqa qismlarga qo'shish kerak bo'lsa
        else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;
    };
    LinkedList.prototype.removeAt = function (index) {
        var currentNode = this.head;
        var currentIndex = 0;
        var previousNode;
        // index xato berilsa
        if (index < 0 || index > this.length)
            return null;
        if (index === 0) {
            this.head = currentNode.next;
            return null;
        }
        while (currentIndex < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
        previousNode.next = currentNode.next;
        this.length--;
    };
    return LinkedList;
}());
var lList = new LinkedList();
lList.add(1);
lList.add(2);
lList.add(3);
lList.add(4);
lList.add(5);
console.log("head: ", lList.getHead().element);
console.log("Size: ", lList.size());
console.log("Elements: ", lList.getElements());
lList.remove(2);
console.log("Elements: ", lList.getElements());
lList.remove(1);
console.log("Elements: ", lList.getElements());
console.log("IndexOf: ", lList.indexOf(3));
console.log("IsEmpty: ", lList.isEmpty());
console.log("Elements: ", lList.getElements());
console.log("Element At:", lList.elementAt(0));
lList.addAt(10, 0);
console.log("Elements: ", lList.getElements());
lList.addAt(20, 1);
console.log("Elements: ", lList.getElements());
lList.addAt(10, 4);
console.log("Elements: ", lList.getElements());
lList.removeAt(4);
console.log("Elements: ", lList.getElements());
lList.removeAt(10);
console.log("Elements: ", lList.getElements());
