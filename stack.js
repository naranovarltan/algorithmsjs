function isPalindrome(word) {
    let r = 0,
        l = word.length - 1;
        while(l < r) {
            if (arr[l] !== arr[r]) {
                return false;
            }
            l--;
            r++;
        }
        return true;
}

// console.log(isPalindrome('qwqq'));

function Stack() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    };

    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
        const res = this.storage[this.count];
        delete this.storage[this.count];
        this.count--;
        return res;
    };

    this.size = function() {
        return this.count + 1;
    };

    this.peek = function() {
        return this.storage[this.count];
    }
}

function MySet(arr = []) {
    this.collection = arr;

    this.values = function() {
        return this.collection;
    };
    
    this.has = function(val) {
        return (this.collection.indexOf(val) !== -1);
    };

    this.isEmpty = function() {
        return this.values.length === 0;
    };

    this.add = function(value) {
        if (!this.has(value)) {
            this.collection.push(value)
            return true;
        }
        return false;
    };

    this.remove = function(value) {
        if (this.has(value)) {
            let index = this.collection.indexOf(value);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    };

    this.size = function() {
        return this.values().length;
    };

    this.union = function(arr) {
        let unionSet = new MySet();
        let firstSet = this.values();
        // let secondSet = otherSet.values();
        firstSet.forEach(item => (unionSet.add(item)));
        arr.forEach(item => (unionSet.add(item)));
        return unionSet.values();
    };

    this.intersection = function(arr) {
        let intersectionSet = new MySet();
        let firstSet = this.values();
        let otherSet = new MySet(arr);
        firstSet.forEach(item => {
            if (otherSet.has(item)) {
                intersectionSet.add(item);
            }
        });
        return intersectionSet.values();
    };

    this.diff = function(arr) {
        let diffSet = new MySet();
        let firstSet = this.values();
        let otherSet = new MySet(arr);
        firstSet.forEach(item => {
            if (!otherSet.has(item)) {
                diffSet.add(item);
            }
        });
        return diffSet.values();
    };

    this.subset = function(arr) {
        let firstSet = this.values();
        let otherSet = new MySet(arr);
        return firstSet.every(item => otherSet.has(item));
    }
}

// let mySet = new MySet([1,2]);
// console.log(mySet.has(1));
// console.log(mySet.has(3));
// mySet.add(3);
// console.log(mySet.has(3));
// console.log(mySet.values());
// console.log('size', mySet.size());
// mySet.remove(3);
// console.log(mySet.values());
// console.log(mySet.has(3));
// console.log('union', mySet.union([1,2,3,4]));
// console.log('intersection', mySet.intersection([3,4,5,6]));
// console.log('diff', mySet.diff([3,4,5,6]));



