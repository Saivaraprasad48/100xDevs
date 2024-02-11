// import { useState } from "react";
import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const handleUpdateTodoId = (id) => {
    // Here you can update the todo ID in the state
    // For simplicity, let's just log it
    console.log(`Todo with ID ${id} updated`);
  };

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        if (!res.ok) {
          throw new Error("Failed to fetch todos");
        }
        const json = await res.json();
        setTodos(json);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  });

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos.todos} onUpdateTodoId={handleUpdateTodoId} />
    </div>
  );
}

export default App;
