var MyNodeTree = /** @class */ (function () {
    function MyNodeTree(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return MyNodeTree;
}());
var BynarySearchTree = /** @class */ (function () {
    function BynarySearchTree() {
        this.root = null;
    }
    // add
    BynarySearchTree.prototype.add = function (data) {
        var node = this.root;
        if (node === null) {
            this.root = new MyNodeTree(data);
            return;
        }
        // add to left part
        var searchNode = function (node) {
            if (node.data > data) {
                if (node.left === null) {
                    node.left = new MyNodeTree(data);
                    return;
                }
                return searchNode(node.left);
            }
            if (node.data < data) {
                if (node.right === null) {
                    node.right = new MyNodeTree(data);
                    return;
                }
                return searchNode(node.right);
            }
            return null;
        };
        return searchNode(node);
    };
    // find
    BynarySearchTree.prototype.find = function (data) {
        var current = this.root;
        while (current) {
            if (current.data === data) {
                return current;
            }
            if (data < current.data) {
                current = current.left;
            }
            if (data > current.data) {
                current = current.right;
            }
        }
        return null;
    };
    // find max
    BynarySearchTree.prototype.findMax = function () {
        // if no elements
        if (this.root === null)
            return null;
        // if has some elements
        var current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    };
    // find min
    BynarySearchTree.prototype.findMin = function () {
        // if no elements
        if (this.root === null)
            return null;
        // if has some elements
        var current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    };
    // remove
    BynarySearchTree.prototype.remove = function (data) {
        var removeNode = function (node, data) {
            // if tree has no element
            if (node === null)
                return null;
            // agar horiy tugunnga o'chiralayotgan qiymat teng bo'lsa
            if (node.data === data) {
                // agar o'chirilayotgan tugunni childi bo'lmasa
                if (node.data === data && node.left === null && node === null)
                    return null;
                // agar o'chiralayotgan elementni chap yoni yo'q bo'lsa
                if (node.left === null)
                    return node.right;
                // agar o'chirilayotgan tugunni o'ng yoni bo'lmasa
                if (node.right === null)
                    return node.left;
                // agar o'chiralayotgan tugunni ikki tomoni ham bo'lsa
                // o'ng tomonni alohida daraxtga o'zlashtiramiz:
                var tempNode = node.right;
                // olingan tugunnni chap tomonni bargini topamiz
                if (tempNode.left !== null)
                    tempNode = tempNode.left;
                // o'chiralayogan tugunni bargga tenglaymiz:
                node.data = tempNode.data;
                // endi oxirgi o'zlashtirlgan bargni o'chiramiz:
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
            else if (node.data > data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        // funksiyani chaqiramiz:
        removeNode(this.root, data);
    };
    // ispresent
    BynarySearchTree.prototype.isPresent = function (data) {
        var current = this.root;
        while (current) {
            if (data === current.data)
                return true;
            if (data > current.data)
                current = current.right;
            else
                current = current.left;
        }
        return false;
    };
    return BynarySearchTree;
}());
var bst2 = new BynarySearchTree();
bst2.add(5);
bst2.add(6);
bst2.add(100);
bst2.add(8);
bst2.add(4);
bst2.add(1);
console.log(bst2.findMax());
console.log(bst2.findMin());
console.log(bst2.isPresent(100));
bst2.remove(100);
console.log(bst2.find(6));
