interface INode {
  data: Number;
  left: MyNodeTree;
  right: MyNodeTree;
}

interface IBynarySearchTree {
  root: INode;
  add(data: Number): any;
  find(data: Number): INode;
  findMax(): Number;
  findMin(): Number;
  remove(data: Number): void;
  isPresent(data: Number): Boolean;
}

class MyNodeTree implements INode {
  constructor(data: Number, left: MyNodeTree = null, right: MyNodeTree = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  public data: Number;
  public left: MyNodeTree;
  public right: MyNodeTree;
}

class BynarySearchTree implements IBynarySearchTree {
  constructor() {
    this.root = null;
  }
  root: INode;

  // add
  add(data: Number) {
    const node = this.root;
    if (node === null) {
      this.root = new MyNodeTree(data);
      return;
    }

    // add to left part
    const searchNode = (node: MyNodeTree) => {
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
  }

  // find
  find(data: Number): INode {
    let current = this.root;
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
  }

  // find max
  findMax(): Number {
    // if no elements
    if (this.root === null) return null;

    // if has some elements
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  // find min
  findMin(): Number {
    // if no elements
    if (this.root === null) return null;

    // if has some elements
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  // remove
  remove(data: Number): void {
    const removeNode = function (node: NodeTree, data: Number) {
      // if tree has no element
      if (node === null) return null;

      // agar horiy tugunnga o'chiralayotgan qiymat teng bo'lsa
      if (node.data === data) {
        // agar o'chirilayotgan tugunni childi bo'lmasa
        if (node.data === data && node.left === null && node === null)
          return null;

        // agar o'chiralayotgan elementni chap yoni yo'q bo'lsa
        if (node.left === null) return node.right;

        // agar o'chirilayotgan tugunni o'ng yoni bo'lmasa
        if (node.right === null) return node.left;

        // agar o'chiralayotgan tugunni ikki tomoni ham bo'lsa
        // o'ng tomonni alohida daraxtga o'zlashtiramiz:
        let tempNode: NodeTree = node.right;

        // olingan tugunnni chap tomonni bargini topamiz
        if (tempNode.left !== null) tempNode = tempNode.left;

        // o'chiralayogan tugunni bargga tenglaymiz:
        node.data = tempNode.data;

        // endi oxirgi o'zlashtirlgan bargni o'chiramiz:
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    // funksiyani chaqiramiz:
    removeNode(this.root, data);
  }

  // ispresent
  isPresent(data: Number): Boolean {
    let current = this.root;
    while (current) {
      if (data === current.data) return true;
      if (data > current.data) current = current.right;
      else current = current.left;
    }
    return false;
  }
}

const bst2 = new BynarySearchTree();
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
