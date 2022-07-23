interface ISet {
  collection: Number[];
  has(element: Number): boolean;
  values(): Number[];
  add(element: Number): boolean;
  remove(element: Number): boolean;
  size(): Number;
  onion(set: ISet): ISet;
  intersect(set: ISet): ISet;
  difference(set: ISet): ISet;
}

class Set implements ISet {
  constructor() {
    this.collection = [];
  }
  collection: Number[];
  has(e: Number) {
    if (this.collection.indexOf(e) !== -1) {
      return true;
    }
    return false;
  }
  values(): Number[] {
    return this.collection;
  }
  add(num: Number): boolean {
    if (this.collection.indexOf(num) === -1) {
      this.collection.push(num);
      return true;
    }
    return false;
  }
  remove(num: Number): boolean {
    if (this.collection.indexOf(num) === -1) {
      return false;
    }
    this.collection.splice(this.collection.indexOf(num), 1);
    return true;
  }
  size(): Number {
    return this.collection.length;
  }
  onion(otherSet: ISet): ISet {
    let newSet: ISet = new Set();
    let currentValues = this.collection;
    let newValues = otherSet.collection;
    newValues.forEach((element) => {
      newSet.add(element);
    });

    currentValues.forEach((element) => {
      newSet.add(element);
    });
    return newSet;
  }
  intersect(otherSet: ISet): ISet {
    let newSet: ISet = new Set();

    this.collection.forEach((elem) => {
      if (otherSet.has(elem)) {
        newSet.add(elem);
      }
    });
    return newSet;
  }
  difference(otherSet: ISet): ISet {
    let newSet: ISet = new Set();
    otherSet.collection.forEach((elem) => {
      if (!this.has(elem)) newSet.add(elem);
    });
    this.collection.forEach((elem) => {
      if (!otherSet.has(elem)) newSet.add(elem);
    });
    return newSet;
  }
}

const mySet: Set = new Set();
console.log(mySet.values());
mySet.add(5);
mySet.add(6);
mySet.add(6);
mySet.add(7);
mySet.add(8);
console.log(mySet.values());
mySet.remove(7);
console.log(mySet.values());
console.log(mySet.has(0), mySet.has(6), mySet.size());

const otherSet: Set = new Set();
otherSet.add(1);
otherSet.add(2);
otherSet.add(3);
otherSet.add(4);
otherSet.add(5);

console.log(mySet.onion(otherSet).collection);
console.log(mySet.intersect(otherSet).collection);
console.log(mySet.difference(otherSet).collection);
