function Node(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function BST() {
    this.root = null;

    this.add = function(value) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(value);
        } else {
            const searchTree = function (node) {
                if (value < node.value) {
                    if (node.left === null) {
                        node.left = new Node(value);
                    } else if (node.left !== null) {
                        searchTree(value);
                    }
                } else if (value > node.value) {
                    if (node.right === null) {
                        node.right = new Node(value);
                    } else if (node.right !== null) {
                        searchTree(value);
                    }
                } else {
                    return false;
                }
            };
            searchTree(node);
        }
    }
}