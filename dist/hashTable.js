var hash = function (str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash % max;
};
var HashTable = /** @class */ (function () {
    function HashTable(limit) {
        if (limit === void 0) { limit = 0; }
        this.storage = [];
        this.storageLimit = null;
        this.storageLimit = limit;
    }
    HashTable.prototype.print = function () {
        console.log(this.storage);
    };
    HashTable.prototype.add = function (key, value) {
        var index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        }
        else {
            var inserted = false;
            for (var i = 0; i < this.storage.length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }
    };
    return HashTable;
}());
var ht = new HashTable(6);
ht.add("birinchi", "OybekNarzullaev");
ht.add("ikkinchi", "IbrohimjonNosiraliyev");
ht.add("uchinchi", "AzamatNishonov");
ht.print();
