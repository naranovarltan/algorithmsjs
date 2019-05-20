function PriorityQueue() {
    this.collection = [];

    this.size = function () {
        return this.collection.length;
    };

    this.values = function () {
        return this.isEmpty() ? 'collection is empty' : this.collection;
    };

    this.isEmpty = function () {
        return this.collection.length === 0;
    };

    this.enqueue = function (item) {
        if (this.isEmpty()) {
            this.collection.push(item)
        } else {
            let added = false;
            for (var i = 0; i < this.collection.length; i++) {
                if (item.priority < this.collection[i].priority) {
                    this.collection.splice(i, 0, item);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(item);
            }
        }
    };

    this.dequeue = function () {
        return this.isEmpty() ? 'collection is empty' : this.collection.shift();
    };

    this.printCollection = function () {
        console.log(this.values());
    }
}

// const priorityQueue = new PriorityQueue();
// priorityQueue.enqueue({priority: 1, value: 'asd1'});
// priorityQueue.enqueue({priority: 2, value: 'asd2.1'});
// priorityQueue.enqueue({priority: 2, value: 'asd2.2'});
// priorityQueue.enqueue({priority: 3, value: 'asd3'});
// priorityQueue.printCollection();
// priorityQueue.size();
// priorityQueue.dequeue();
// priorityQueue.dequeue();
// priorityQueue.dequeue();
// priorityQueue.dequeue();
// priorityQueue.printCollection();

class PriorityQueueClass {
    constructor() {
    }

    collection = [];

    values = () => this.collection.length === 0 ? 'collection is empty' : this.collection;
    size = () => this.collection.length;
    isEmpty = () => this.collection.length === 0;

    enqueue = (item) => {
        if (this.isEmpty()) {
            this.collection.push(item)
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (item.priority < this.collection[i].priority) {
                    added = true;
                    this.collection.splice(i, 0, item);
                    break;
                }
            }
            if (!added) {
                this.collection.push(item);
            }
        }
    };

    dequeue = () => this.isEmpty() ? 'Collection is empty' : this.collection.shift();

    print = () => (console.log(this.collection));

}

// const pQueue = new PriorityQueueClass();
// pQueue.enqueue({priority: 1, value: 'asd1'});
// pQueue.enqueue({priority: 2, value: 'asd2'});
// pQueue.enqueue({priority: 3, value: 'asd3'});
// pQueue.enqueue({priority: 2, value: 'asd4'});
// pQueue.print();
// pQueue.dequeue();
// pQueue.print();

