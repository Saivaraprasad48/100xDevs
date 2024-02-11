// eslint-disable-next-line
const Todos = ({ todos, onUpdateTodoId }) => {
  if (!todos) {
    return <div>No todos available</div>;
  }

  const handleToggleComplete = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/completed", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }
      onUpdateTodoId(id);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  return (
    <div>
      {todos.map((e, i) => {
        return (
          <div key={i}>
            <h1> {e.title}</h1>
            <h2> {e.description} </h2>
            <button onClick={() => handleToggleComplete(e._id)}>
              {e.completed == true ? "Completed" : "Mark as completed"}{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
