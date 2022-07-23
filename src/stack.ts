interface IStack {
  count: Number;
  storage: Object;
  push(item: Number): void;
  pop(): Number | undefined;
  size(): Number;
  peek(): Number;
}

class Stack implements IStack {
  count = 0;
  storage = {};

  // push
  push(item: Number) {
    this.storage[this.count++] = item;
  }

  // pop
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // size
  size() {
    return this.count;
  }

  //   peek
  peek() {
    return this.storage[this.count - 1];
  }
}

const myStack = new Stack();

console.log(myStack.peek());
myStack.push(1);
myStack.push(2);
myStack.push(4);
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
