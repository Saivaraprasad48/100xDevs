/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      throw new Error("Invalid index for removal.");
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      throw new Error("Invalid index for update.");
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      throw new Error("Invalid index to get todo.");
    }
  }

  clear() {
    this.todos = [];
  }
}

// Test your code
const todoList = new Todo();
todoList.add("Complete assignment");
todoList.add("Buy groceries");
todoList.add("Call mom");

console.log("All Todos:", todoList.getAll());

todoList.update(1, "Buy milk");
console.log("Updated Todo at index 1:", todoList.get(1));

todoList.remove(0);
console.log("Todos after removal:", todoList.getAll());

todoList.clear();
console.log("Cleared Todos:", todoList.getAll());

module.exports = Todo;
