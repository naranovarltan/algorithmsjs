function Queue(arr = []) {
    this.collection = arr;

    this.print = function () {
        console.log(this.collection);
    };

    this.front = function () {
        return this.isEmpty() ? 'queue is empty' : this.collection[0];
    };

    this.isEmpty = function () {
        return this.collection.length === 0;
    };

    this.size = function () {
        return this.collection.length;
    };

    this.enqueue = function (item) {
        this.collection.push(item);
    };

    this.dequeue = function () {
        return this.isEmpty() ? 'queue is empty' : this.collection.shift();
    };

    this.print = function () {
        console.log(this.collection);
    }
}

const queue = new Queue(['a', 'b', 'c']);
queue.print();
queue.isEmpty();
queue.size();
queue.enqueue('d');
queue.dequeue();
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.front());
queue.print();