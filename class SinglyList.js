const Node = require('./class Node.js');



class SinglyList {
    constructor() {
        this._length = 0;
        this.head = null;
    }

    add(value) {
        let node = new Node(value);
        let currentNode = this.head;

        // 1) add to empty list
        if (!currentNode) {
            this.head = node;
            this._length++;
            return node;
        }

        // 2) add to not empty list
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        this._length++;
        return node;
    }

    searchNodeAt(position) {
        let currentNode = this.head;
        let length = this._length;
        let count = 1;
        let message = {failure: "Failure: non-existent node in this list"};

        // 1) error position
        if (length === 0 || position < 1 || position > length) {
            throw new Error(message.failure);
        }

        // 2) right position
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    remove(position) {
        let currentNode = this.head;
        let length = this._length;
        let count = 0;
        let message = {failure: "Failure: non-existent node in this list."};
        let beforeNodeToDelete = null;
        let nodeToDelete = null;
        let deletedNode = null;

        // 1) error position
        if (position < 0 || position > length) {
            throw new Error(message.failure);
        }

        // 2) position = 1 (head)
        if (position === 1) {
            this.head = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            this._length--;
            return deletedNode;
        }

        // 3) others positions
        while (count < position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        this._length--;

        return deletedNode;
    }
}

module.exports = SinglyList;    