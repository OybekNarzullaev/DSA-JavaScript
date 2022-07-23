interface IHashTable {
  storage: number[];
  storageLimit: number;
  print(): void;
  add(key: String, value: any): void;
}

const hash = (str: String, max: number) => {
  let hash: number = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash % max;
};

class HashTable implements IHashTable {
  constructor(limit: number = 0) {
    this.storageLimit = limit;
  }
  storage = [];
  storageLimit = null;
  print() {
    console.log(this.storage);
  }
  add(key: String, value: any): void {
    let index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage.length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }
}

let ht: HashTable = new HashTable(6);
ht.add("birinchi", "OybekNarzullaev");
ht.add("ikkinchi", "IbrohimjonNosiraliyev");
ht.add("uchinchi", "AzamatNishonov");
ht.print();
