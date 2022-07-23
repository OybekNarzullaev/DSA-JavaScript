interface IQueue {
  print(): Number[];
  enqueue(number: Number): void;
  dequeue(): void;
  front(): Number;
  size(): Number;
  isEmpty(): Boolean;
}

class Queue implements IQueue {
  constructor() {
    this.collection = [];
  }
  private collection: Number[];

  print() {
    return this.collection;
  }
  enqueue(number: Number): void {
    this.collection.push(number);
  }
  dequeue(): void {
    this.collection.shift();
  }
  isEmpty(): Boolean {
    return this.collection.length === 0 ? true : false;
  }
  front(): Number {
    return this.collection[0];
  }
  size(): Number {
    return this.collection.length;
  }
}

const myQueue: Queue = new Queue();
console.log(myQueue.front());
console.log(myQueue.print());
myQueue.enqueue(1);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(0);
console.log(myQueue.print());
myQueue.dequeue();
console.log(myQueue.print());
myQueue.size();
console.log(myQueue.front());
