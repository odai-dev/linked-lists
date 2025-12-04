import { Node } from "./Node.js";
export class LinkedList {
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

    pop() {
        if(!this._head) return;
        if(!this._head.nextNode) {
            this._head = null;
            this._tail = null;
            return;
        };
        let current = this._head;
        while(current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
        this._tail = current;
    }

    toString() {
        let listAsString = '';
        let current = this._head;
        while(current){
            listAsString += current.nextNode != null ? `(${current.value}) -> `: `(${current.value}) -> ${current.nextNode}`;
            current = current.nextNode;
        }
        return listAsString;
    }

    size() {
        let current = this._head;
        let count = 0;
        while(current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    at(index) {
        let current = this._head;
        let i = 0;
        while(current) {
            if(i == index) return current;
            i++;
            current = current.nextNode;
        }
        return null;
    }
}
