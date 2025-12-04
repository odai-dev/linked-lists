import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
console.log(list.head(), list.tail());
list.append("cat");
list.prepend("cow");
list.append("dog");
console.log(list.toString());
console.log(list.size());
list.append('bird');
list.removeAt(1);
console.log(list.toString());
