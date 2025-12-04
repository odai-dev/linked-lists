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

    contains(value) {
        let current = this._head;
        while(current) {
            if(current.value == value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this._head;
        let i = 0;
        while(current) {
            if(current.value == value) return i;
            i++;
            current = current.nextNode;
        }
        return null;
    }

    insertAt(value, index) {
        if(index == 0) {
            this.prepend(value);
            return;
        }
        let current = this._head;
        let i = 0;
        while(current) {
            if(i == index-1){
                const node = new Node(value);
                node.nextNode = current.nextNode;
                current.nextNode = node;
            };
            i++;
            current = current.nextNode;
        }
    }

    removeAt(index) {
        if (!this._head) return;

        let current = this._head;
        if(index == 0) {
            if (!this._head.nextNode) this._tail = null;

            this._head = current.nextNode;
            return;
        }

        let i = 0;
        while(current) {
            if(i == index-1){
                if (current.nextNode === this._tail) {
                    this._tail = current;
                }

                current.nextNode = current.nextNode.nextNode;
                
                return;
            };
            i++;
            current = current.nextNode;
        }

    }
}
