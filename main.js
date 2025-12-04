import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
console.log(list.head(), list.tail());
list.append("cat");
list.prepend("cow");
list.append("dog");
console.log(list.toString());
console.log(list.size());
list.insertAt('bird',0);
list.removeAt(3);
console.log(list.toString());
console.log(list.head());
console.log(list.tail());
