class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        // Initialize new node
        let newNode = new Node(value);

        // If the root is null, set our new node to be the root
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let insertionPointNotFound = true;
        // Start the search for the insertion point at the root
        let currentNode = this.root;

        while (insertionPointNotFound) {
            if (newNode.val < currentNode.val) { // go left
                if (currentNode.left !== null) {
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = newNode;
                    insertionPointNotFound = false;
                }
            } else if (newNode.val > currentNode.val) { // go right
                if (currentNode.right !== null) {
                    currentNode = currentNode.right;
                } else {
                    currentNode.right = newNode;
                    insertionPointNotFound = false;
                }
            } else { // Duplicate case
                console.log("Duplicate value, not inserted");
                return undefined;
            }
        }
    }

    // REMOVE - COMING SOON!
    // remove(value) { 
    //     if (this.root === null)
    //         return false;

    //     let currentNode = this.root;

    //     // Find the value, reassign its children, remove node

    // }

    containsValue(value) {
        if (this.root === null)
            return false;

        let currentNode = this.root;

        while(true) {
            if (currentNode === null)
                return false;

            let currentValue = currentNode.val;

            if (value === currentValue) {
                return true;
            } else if (value < currentValue) {
                currentNode = currentNode.left;
            } else if (value > currentValue) {
                currentNode = currentNode.right;
            }
        }
    }


    find(value) {
        if (this.root === null)
            return false;

        let currentNode = this.root;

        while(true) {
            if (currentNode === null)
                return undefined;

            let currentValue = currentNode.val;

            if (value === currentValue) {
                return currentNode;
            } else if (value < currentValue) {
                currentNode = currentNode.left;
            } else if (value > currentValue) {
                currentNode = currentNode.right;
            }
        }
    }


}

class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}