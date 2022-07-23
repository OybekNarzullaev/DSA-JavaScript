interface ICollectionItem {
  index: Number;
  value: String;
}

interface IPriortyQueue {
  isEmpty(): Boolean;
  enqueue(element: ICollectionItem): Boolean;
  dequeue(): void;
  front(): ICollectionItem;
  print(): ICollectionItem[];
  size(): Number;
}

class PriorityQueue implements IPriortyQueue {
  constructor() {
    this.collection = [];
  }
  private collection: ICollectionItem[];
  isEmpty() {
    return this.collection.length === 0;
  }
  enqueue(element: ICollectionItem): Boolean {
    if (this.isEmpty()) {
      this.collection.push(element);
      return true;
    }
    for (let i = 0; i < this.collection.length; i++) {
      if (element.index < this.collection[i].index) {
        this.collection.splice(i, 0, element);
        return true;
      }
    }
    this.collection.push(element);
    return true;
  }
  dequeue(): void {
    this.collection.shift();
  }
  front(): ICollectionItem {
    return this.collection[0];
  }
  size(): Number {
    return this.collection.length;
  }
  print(): ICollectionItem[] {
    return this.collection;
  }
}

const myPQueue = new PriorityQueue();
console.log(myPQueue.print());
const el1: ICollectionItem = {
  index: 1,
  value: "Oybek",
};
myPQueue.enqueue(el1);
const el2: ICollectionItem = {
  index: 2,
  value: "Shoxzod",
};
myPQueue.enqueue(el2);
const el3: ICollectionItem = {
  index: 0,
  value: "Madinabonu",
};

myPQueue.enqueue(el3);
console.log(myPQueue.print());
myPQueue.dequeue();
console.log(myPQueue.print());
