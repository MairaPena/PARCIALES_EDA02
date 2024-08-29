class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addNode(value) {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
    }
  
    print() {
      let current = this.head;
      let values = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values.join(", "));
    }
  }
  
  function mergeAndSortLists(list1, list2) {
    let result = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
  
    while (current1 && current2) {
      if (current1.value < current2.value) {
        result.addNode(current1.value);
        current1 = current1.next;
      } else {
        result.addNode(current2.value);
        current2 = current2.next;
      }
    }
  
    while (current1) {
      result.addNode(current1.value);
      current1 = current1.next;
    }
  
    while (current2) {
      result.addNode(current2.value);
      current2 = current2.next;
    }
  
    return result;
  }
  
  // Example usage
  let list1 = new LinkedList();
  list1.addNode(10);
  list1.addNode(8);
  list1.addNode(5);
  
  let list2 = new LinkedList();
  list2.addNode(9);
  list2.addNode(7);
  list2.addNode(3);
  
  console.log("Lista 1 original (de mayor a menor):");
  list1.print();
  console.log("Lista 2 original (de mayor a menor):");
  list2.print();
  
// Merge and sort the lists 
  const mergedList = mergeAndSortLists(list1, list2);
  console.log("Lista unida y ordenada (de menor a mayor):");
  mergedList.print();