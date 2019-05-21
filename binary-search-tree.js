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
        }
        return root.value;
    };
    this.findMax = function () {
        let root = this.root;
        while (root.right !== null) {
            root = root.right;
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
        
    }
}