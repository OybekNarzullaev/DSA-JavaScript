interface INodeLinkedList {
  element: number;
  next: INodeLinkedList;
}

interface ILinkedList {
  length: number; // bog'langan ro'yhat uzunligi
  head: INodeLinkedList; // ro'yhat bosh tuguni
  getElements(): number[]; // barcha elementlatni ko'rish uchun method
  size(): number; // ro'yhat o'lchami
  getHead(): INodeLinkedList; // bosh tugunni olish
  add(element: number): void; // yangi element qo'shish
  remove(element: number): void; // elementni o'chirish
  isEmpty(): boolean; // bo'shillikka tekshirish
  indexOf(element: number): number; // kerakli elementni indeksini olish
  elementAt(index: number): number; // index bo'yicha kerakli elementni olish
  addAt(element: number, index: number): void; // kerakli indexga element qo'shish
  removeAt(index: number): void; // indeks bo'yicha o'chirish
}

class NodeLinkedList implements INodeLinkedList {
  constructor(element: number = null) {
    this.element = element;
    this.next = null;
  }
  element: number;
  next: INodeLinkedList;
}
class LinkedList implements ILinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  length: number;
  head: INodeLinkedList;
  getElements(): number[] {
    let elements: number[] = [];
    let currentNode: NodeLinkedList = this.head;
    while (currentNode) {
      elements.push(currentNode.element);
      currentNode = currentNode.next;
    }
    return elements;
  }
  size(): number {
    return this.length;
  }
  getHead(): INodeLinkedList {
    return this.head;
  }
  add(element: number): void {
    let node = new NodeLinkedList(element);

    // agar ro'yhat bo'sh bo'lsa
    if (this.head === null) {
      this.head = node;
    }
    // aks holda yangi elementni ro'yhatni oxiriga qo'yamiz
    else {
      let currentNode: NodeLinkedList = this.head;
      //   oxirini topish
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    // o'lchaminini bittaga oshirish
    this.length++;
  }
  remove(element: number): void {
    let currentNode: NodeLinkedList = this.head;
    let prevNode: NodeLinkedList;

    // agar boshidagi elementi o'chirilishi kerak bo'lsa
    if (element === currentNode.element) {
      this.head = currentNode.next;
    }
    // keyingi elementlaridan birini o'chirish
    else {
      while (currentNode.element !== element) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      prevNode.next = currentNode.next;
    }
    this.length--;
  }
  isEmpty(): boolean {
    if (this.length === 0) return true;
    return false;
  }
  indexOf(element: number): number {
    let currentNode = this.head;
    let index = -1;
    while (currentNode) {
      index++;
      if (element === currentNode.element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }
  elementAt(index: number): number {
    let currentNode = this.head;
    let indx = -1;
    while (currentNode) {
      indx++;
      if (index === indx) {
        return currentNode.element;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  addAt(element: number, index: number): void {
    let node = new NodeLinkedList(element);

    let currentNode = this.head;
    let previousNode: NodeLinkedList;
    let currentIndex = 0;

    // boshiga qo'shish kerak bo'lsa;
    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    }
    // boshqa qismlarga qo'shish kerak bo'lsa
    else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
  }
  removeAt(index: number): void {
    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode: NodeLinkedList;

    // index xato berilsa
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      this.head = currentNode.next;
      return null;
    }

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
    previousNode.next = currentNode.next;
    this.length--;
  }
}

let lList: LinkedList = new LinkedList();
lList.add(1);
lList.add(2);
lList.add(3);
lList.add(4);
lList.add(5);

console.log("head: ", lList.getHead().element);
console.log("Size: ", lList.size());
console.log("Elements: ", lList.getElements());
lList.remove(2);
console.log("Elements: ", lList.getElements());
lList.remove(1);
console.log("Elements: ", lList.getElements());
console.log("IndexOf: ", lList.indexOf(3));
console.log("IsEmpty: ", lList.isEmpty());
console.log("Elements: ", lList.getElements());
console.log("Element At:", lList.elementAt(0));
lList.addAt(10, 0);
console.log("Elements: ", lList.getElements());

lList.addAt(20, 1);
console.log("Elements: ", lList.getElements());

lList.addAt(10, 4);
console.log("Elements: ", lList.getElements());

lList.removeAt(4);
console.log("Elements: ", lList.getElements());

lList.removeAt(10);
console.log("Elements: ", lList.getElements());
