# Linked List Implementation in JavaScript

This project is a simple implementation of a **singly linked list** in JavaScript. It demonstrates various operations that can be performed on a linked list, such as insertion, deletion, searching, updating, and traversal (CURD).

---

## Features

- **Insert Operations**:
  - Insert a node at the end of the list.
  - Insert a node at the beginning of the list.
  - Insert a node at a specific index.
- **Delete Operations**:
  - Delete the first node.
  - Delete the last node.
  - Delete a node at a specific index.
- **Utility Operations**:
  - Search for a node by its value.
  - Update the value of a node at a specific index.
  - Print the entire linked list with its size.

---

## Code Structure

### Classes

- **Node**: Represents a single node in the linked list. Contains:
  - `data`: The value of the node.
  - `next`: Pointer to the next node in the list (or `null` if it’s the last node).
- **LinkedList**: Represents the linked list and contains the following methods:
  - `insert(data)`: Adds a node to the end of the list.
  - `insert1st(data)`: Adds a node at the beginning of the list.
  - `insertindex(data, index)`: Adds a node at a specific index.
  - `deletebegin()`: Removes the first node.
  - `deletend()`: Removes the last node.
  - `deleteindex(index)`: Removes a node at a specific index.
  - `search(data)`: Searches for a node by value and returns its index.
  - `update(data, index)`: Updates the value of a node at a specific index.
  - `print()`: Prints the entire linked list and its size.

---

## Getting Started

### Prerequisites

To run this code, you'll need:

- A JavaScript environment such as Node.js or a browser console.

### Running the Code

1. Copy the code from the `linkedlist.js` file into your JavaScript environment.
2. Instantiate the `LinkedList` class and perform operations as needed. For example:

   ```javascript
   let list = new linkedlist();
   list.insert(10);
   list.insert(20);
   list.insert1st(5);
   list.insertindex(15, 2);
   list.print(); // Output: 5 -> 10 -> 15 -> 20 -> null
   list.search(15); // Output: Found at : 2
   list.update(25, 2);
   list.print(); // Output: 5 -> 10 -> 25 -> 20 -> null
   ```
