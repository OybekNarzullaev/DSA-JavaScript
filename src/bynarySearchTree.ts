interface INodeTree {
  data: Number;
  left: NodeTree;
  right: NodeTree;
}

interface IBST {
  root: INodeTree;
  add(data: Number): any; // yangi element qo'shish
  findMin(): Number; // minimalni topish
  findMax(): Number; // maksimalini topish
  find(data: Number): NodeTree; // topish
  isPresent(data: Number): Boolean; // mavjudlikka tekshirish
  remove(data: Number): void; // element o'chirish
}

class NodeTree implements INodeTree {
  constructor(data: Number, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  public data: Number;
  public left: NodeTree;
  public right: NodeTree;
}

class BST implements IBST {
  constructor() {
    this.root = null;
  }
  public root: NodeTree;
  add(data: Number) {
    const node = this.root;
    if (node === null) {
      this.root = new NodeTree(data);
      return;
    } else {
      const searchTree = function (node: NodeTree) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new NodeTree(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new NodeTree(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin(): Number {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax(): Number {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data: Number): NodeTree {
    let current = this.root;
    while (current.data !== data) {
      if (current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) break;
    }
    return current;
  }
  isPresent(data: Number): Boolean {
    let current = this.root;
    while (current) {
      if (current.data === data) return true;
      if (current.data > data) current = current.left;
      else current = current.right;
      return false;
    }
  }
  remove(data: Number): void {
    const removeNode: any = function (node: INodeTree, data: Number) {
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
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();

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
