class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Inserts a new node at the end of the list
  insert(data) {
    let newNode = new node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Prints all elements in the linked list
  print() {
    let current = this.head;
    let output = "";
    while (current !== null) {
      output += current.data + " -> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
    console.log(this.size);
  }

  // Inserts a new node at the beginning of the list
  insert1st(data) {
    let newNode = new node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Inserts a new node at a specific index in the list
  insertindex(data, index) {
    if (index > this.size || index < 0) {
      console.log("Invalid index");
      return;
    }
    let newNode = new node(data);
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentIndex = 0;
      let current = this.head;
      let previous = null;
      while (currentIndex < index) {
        previous = current;
        current = current.next;
        currentIndex++;
      }
      previous.next = newNode;
      newNode.next = current;
    }
    this.size++;
  }

  // Deletes the first node in the list
  deletebegin() {
    if (this.head == null) {
      console.log("List is Empty");
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  // Deletes the last node in the list
  deletend() {
    if (this.head == null) {
      console.log("list is already empty");
      return;
    }
    if (this.head.next == null) {
      this.head = null;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }

  // Deletes a node at a specific index in the list
  deleteindex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }
    if (index == 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let currentIndex = 0;
    let current = this.head;
    let previous = null;
    while (currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }
    previous.next = current.next;
    this.size--;
  }

  // Searches for a node with specific data and prints its index
  search(data) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.data == data) {
        console.log("Found at : " + index);
        return;
      }
      current = current.next;
      index++;
    }
    console.log("Not Found");
    return;
  }

  // Updates the data of a node at a specific index
  update(data, index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }

    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    current.data = data;
  }
}

let a = new linkedlist();
a.insert(10);
a.insert(20);
a.insert(30);
a.insert(40);
a.insert1st(50);
a.insertindex(4, 1);
a.insertindex(4, 5);
a.update(21, 6);
a.search(21);
// a.deleteindex(1);
// a.deleteindex(3);
// a.deletebegin();
// a.deletend();
// a.deletend();
// a.deletend();
// a.deletend();
// a.deletend();
// a.deletend();
// a.deletend();
a.print();
