function Node(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function BST() {
    this.root = null;
    this.print = function () {
        console.log(this.root);
    };
    this.add = function(value) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(value);
        } else {
            function searchTree (childNode) {
                if (value < childNode.value) {
                    if (childNode.left === null) {
                        childNode.left = new Node(value);
                    } else if (childNode.left !== null) {
                        searchTree(value);
                    }
                } else if (value > childNode.value) {
                    if (childNode.right === null) {
                        childNode.right = new Node(value);
                    } else if (childNode.right !== null) {
                        searchTree(value);
                    }
                } else {
                    return false;
                }
            }
            searchTree(node);
        }
    };
    this.findMin = function () {
        let root = this.root;
        while (root.left !== null) {
            root = root.left;
            console.log(root, 'min');
        }
        return root.value;
    };
    this.findMax = function () {
        let root = this.root;
        while (root.right !== null) {
            root = root.right;
            console.log(root, 'max');
        }
        return root.value;
    };
    this.findNode = function (value) {
        let root = this.root;
        while (root.value !== value) {
            if (root === null) {
                return null;
            }
            if (value < root.value) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return root;
    };
    this.isPresent = function (value) {
        let root = this.root;
        while (root) {
            if (value === root.value) {
                return true;
            }
            if (value < root.value) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return false;
    };
    this.remove = function (value) {
        function removeNode(node, value) {
            if (node === null) {
                return null;
            }
            if (value === node.value) {
                if (node.left === null && node.right === null) {
                    return null;
                }
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
                    return node.left;
                }
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.value = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            } else if (value < node.value) {
                node.left = removeNode(node.left, value);
            } else {
                node.right = removeNode(node.right, value);
            }
        }
        this.root = removeNode(this.root, value);
    }
}

// const bst = new BST();
// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// bst.print();
// console.log(bst.findMax());
// console.log(bst.findMin());
// bst.remove(9);
// // console.log(bst.findMax());
// console.log(bst.isPresent(4));
// console.log(bst.isPresent(11));