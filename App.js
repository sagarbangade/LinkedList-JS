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
  insert1st(data) {
    let newNode = new node(data);
    // let current = this.head;
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  insertindex(data, index) {
    if (index > this.size || index < 0) {
      console.log("galat index");
      return;
    }
    let newNode = new node(data);
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
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
      this.size++;
    }
  }
  deletebegin() {
    this.head = this.head.next;
  }
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
  deleteindex(index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index == 0) {
      this.head = this.head.next;
      this.size--;
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
  search(data) {
    let current = this.head;
    let index = 0;
    while (current.next != null) {
      if (current.data == data) {
        console.log("Found at : " + index);
        return;
      } else {
        current = current.next;
        index++;
      }
    }
    console.log("Not Found");
    return;
  }
  update(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index == 0) {
      this.head.data = data;
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
// a.search(51);
a.update(21, 6);
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
