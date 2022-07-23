var NodeTree2 = /** @class */ (function () {
    function NodeTree2(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
    return NodeTree2;
}());
var BynaryTree2 = /** @class */ (function () {
    function BynaryTree2() {
        this.root = null;
    }
    BynaryTree2.prototype.add = function (data) {
        var node = this.root;
        if (node === null) {
            this.root = new NodeTree2(data);
            return;
        }
        else {
            var searchTree_1 = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new NodeTree2(data);
                        return;
                    }
                    else if (node.left !== null) {
                        return searchTree_1(node.left);
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new NodeTree2(data);
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
    BynaryTree2.prototype.findMin = function () {
        var current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    };
    BynaryTree2.prototype.findMax = function () {
        var current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    };
    BynaryTree2.prototype.find = function (data) {
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
    BynaryTree2.prototype.isPresent = function (data) {
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
    BynaryTree2.prototype.remove = function (data) {
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
    BynaryTree2.prototype.findMaxHeight = function (node) {
        if (node === void 0) { node = this.root; }
        if (node === null)
            return -1;
        var left = this.findMaxHeight(node.left);
        var right = this.findMaxHeight(node.right);
        if (left > right)
            return left + 1;
        else
            return right + 1;
    };
    BynaryTree2.prototype.findMinHeight = function (node) {
        if (node === void 0) { node = this.root; }
        // if tree is empty
        if (node === null)
            return -1;
        var left = this.findMinHeight(node.left);
        var right = this.findMinHeight(node.right);
        if (left < right)
            return left + 1;
        else
            return right + 1;
    };
    BynaryTree2.prototype.isBalansed = function () {
        return this.findMaxHeight() - this.findMinHeight() <= 1;
    };
    BynaryTree2.prototype.inOrder = function () {
        if (this.root === null)
            return null;
        else {
            var result = new Array();
            var traverseInOrder_1 = function (node) {
                node.left && traverseInOrder_1(node.left);
                result.push(node.data);
                node.right && traverseInOrder_1(node.right);
            };
            traverseInOrder_1(this.root);
            return result;
        }
    };
    BynaryTree2.prototype.preOrder = function () {
        if (this.root === null)
            return null;
        else {
            var result = new Array();
            var traversePreOrder_1 = function (node) {
                result.push(node.data);
                node.left && traversePreOrder_1(node.left);
                node.right && traversePreOrder_1(node.right);
            };
            traversePreOrder_1(this.root);
            return result;
        }
    };
    BynaryTree2.prototype.postOrder = function () {
        if (this.root === null)
            return null;
        else {
            var result = new Array();
            var traversePostOrder_1 = function (node) {
                node.left && traversePostOrder_1(node.left);
                node.right && traversePostOrder_1(node.right);
                result.push(node.data);
            };
            traversePostOrder_1(this.root);
            return result;
        }
    };
    BynaryTree2.prototype.levelOrder = function () {
        var Q = [];
        var result = [];
        if (this.root !== null) {
            Q.push(this.root);
            while (Q.length > 0) {
                var node = Q.shift();
                result.push(node.data);
                if (node.left !== null) {
                    Q.push(node.left);
                }
                if (node.right !== null) {
                    Q.push(node.right);
                }
            }
            return result;
        }
        else {
            return null;
        }
    };
    return BynaryTree2;
}());
var bst_2 = new BynaryTree2();
bst_2.add(9);
bst_2.add(4);
bst_2.add(17);
bst_2.add(4);
bst_2.add(3);
bst_2.add(6);
bst_2.add(22);
bst_2.add(5);
bst_2.add(7);
bst_2.add(20);
// bst_2.add(12); if you want to balanced
console.log("min height: ", bst_2.findMinHeight());
console.log("max height:", bst_2.findMaxHeight());
console.log("is balanced: ", bst_2.isBalansed());
console.log("order in: ", bst_2.inOrder());
console.log("preOrder: ", bst_2.preOrder());
console.log("postOrder: ", bst_2.postOrder());
console.log("levelOrder: ", bst_2.levelOrder());
