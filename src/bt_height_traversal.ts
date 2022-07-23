interface INodeTree {
  data: Number;
  left: NodeTree2;
  right: NodeTree2;
}

class NodeTree2 implements INodeTree {
  constructor(data: Number) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
  public data: Number;
  public left: INodeTree;
  public right: INodeTree;
}

interface IBynaryTree {
  root: INodeTree;
  add(data: Number): any; // yangi element qo'shish
  findMin(): Number; // minimalni topish
  findMax(): Number; // maksimalini topish
  find(data: Number): NodeTree2; // topish
  isPresent(data: Number): Boolean; // mavjudlikka tekshirish
  remove(data: Number): void; // element o'chirish
  findMinHeight(node: INodeTree): number; // daraxt ildizidan to'liq bo'lmagan tugunigacha bo'lgan eng yaqin masofa
  findMaxHeight(node: INodeTree): number; // daraxt ildizidan uning bargigacha bo'lgan eng uzoq masofa
  isBalansed(): Boolean; // agar minHeight va maxHeight o'rtasidagi farq 1 yoki 0 bo'lsa unda daraxt balansga ega bo'ladi
  inOrder(): Number[]; // daraxt tugunidagi ma'lumotlarni o'sish tartibida sarash
  preOrder(): Number[]; // chap shohlardan boshlab o'ng shohlarga tomon borish
  postOrder(): Number[]; // chapdan o'ngga qarab chiqib borish
  levelOrder(): Number[]; // levellar bo'yicha tepadan pastga borish
}

class BynaryTree2 implements IBynaryTree {
  constructor() {
    this.root = null;
  }
  public root: NodeTree2;
  add(data: Number) {
    const node = this.root;
    if (node === null) {
      this.root = new NodeTree2(data);
      return;
    } else {
      const searchTree = function (node: NodeTree2) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new NodeTree2(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new NodeTree2(data);
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
  find(data: Number): NodeTree2 {
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
  findMaxHeight(node: INodeTree = this.root): number {
    if (node === null) return -1;

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if (left > right) return left + 1;
    else return right + 1;
  }
  findMinHeight(node: INodeTree = this.root): number {
    // if tree is empty
    if (node === null) return -1;

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if (left < right) return left + 1;
    else return right + 1;
  }
  isBalansed(): Boolean {
    return this.findMaxHeight() - this.findMinHeight() <= 1;
  }
  inOrder(): Number[] {
    if (this.root === null) return null;
    else {
      var result = new Array();
      const traverseInOrder = function (node: INodeTree) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      };
      traverseInOrder(this.root);
      return result;
    }
  }
  preOrder(): Number[] {
    if (this.root === null) return null;
    else {
      var result = new Array();
      const traversePreOrder = function (node: NodeTree2): void {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    }
  }
  postOrder(): Number[] {
    if (this.root === null) return null;
    else {
      var result = new Array();
      const traversePostOrder = (node: NodeTree2): void => {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }
  levelOrder(): Number[] {
    let Q = [];
    let result = [];
    if (this.root !== null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }
        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const bst_2 = new BynaryTree2();
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
