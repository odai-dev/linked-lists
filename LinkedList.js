import { Node } from "./Node.js";
class LinkedList {
    _head = null;
    _tail = null;

    head() {
        return this._head;
    }

    tail() {
        return this._tail;
    }

    append(value) {
        if(!this._head) {
            const node = new Node(value);
            this._head = node;
            this._tail = node;
            return;
        }
        let current = this._head;
        while(current.nextNode) {
            current = current.nextNode;
        }
        
        const node = new Node(value);
        current.nextNode = node;
        this._tail = node;
    }

    prepend(value) {
        if(!this._head) {
            const node = new Node(value);
            this._head = node;
            this._tail = node;
            return;
        }
        const node = new Node(value);
        node.nextNode = this._head;
        this._head = node;
    }
}

const list = new LinkedList();
console.log(list.head(), list.tail());
list.append("cat");
list.prepend("cow");
list.append("dog");
console.log("Head: ",list.head(), "Tail: ",list.tail());