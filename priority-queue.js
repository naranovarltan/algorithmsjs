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
            for (let i = 0; i < this.collection.length; i++) {
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

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue({priority: 1, value: 'asd1'});
priorityQueue.enqueue({priority: 2, value: 'asd2.1'});
priorityQueue.enqueue({priority: 2, value: 'asd2.2'});
priorityQueue.enqueue({priority: 3, value: 'asd3'});
priorityQueue.printCollection();
priorityQueue.size();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.printCollection();