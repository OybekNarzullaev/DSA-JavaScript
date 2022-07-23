var NodeTree = /** @class */ (function () {
    function NodeTree(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return NodeTree;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.add = function (data) {
        var node = this.root;
        if (node === null) {
            this.root = new NodeTree(data);
            return;
        }
        else {
            var searchTree_1 = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new NodeTree(data);
                        return;
                    }
                    else if (node.left !== null) {
                        return searchTree_1(node.left);
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new NodeTree(data);
                        return;
                    }
                    else if (node.right !== null) {
                        return searchTree_1(node.right);
                    }
                }
                else {
                    return null;
                }
            };
            return searchTree_1(node);
        }
    };
    BST.prototype.findMin = function () {
        var current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    };
    BST.prototype.findMax = function () {
        var current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    };
    BST.prototype.find = function (data) {
        var current = this.root;
        while (current.data !== data) {
            if (current.data > data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
            if (current === null)
                break;
        }
        return current;
    };
    BST.prototype.isPresent = function (data) {
        var current = this.root;
        while (current) {
            if (current.data === data)
                return true;
            if (current.data > data)
                current = current.left;
            else
                current = current.right;
            return false;
        }
    };
    BST.prototype.remove = function (data) {
        var removeNode = function (node, data) {
            if (node === null) {
                return null;
            }
            if (data === node.data) {
                // node has no children
                if (node.left === null && node.right === null) {
                    return null;
                }
                // node has left child
                if (node.left === null) {
                    return node.right;
                }
                // node has right child
                if (node.right === null) {
                    return node.left;
                }
                // node has two children
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
            else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    };
    return BST;
}());
var bst = new BST();
bst.add(5);
bst.add(3);
bst.add(7);
bst.add(1);
bst.add(4);
bst.add(6);
bst.add(8);
console.log(bst.find(8));
console.log(bst.isPresent(5));
console.log(bst.findMax());
console.log(bst.findMin());
bst.remove(7);
console.log(bst.find(5));
