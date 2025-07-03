import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, filter }) {
  const isEmpty = todos.length === 0;

  return (
    <section className="todo-list-section">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
      {isEmpty && (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h3>
            {filter === "active"
              ? "No active tasks!"
              : filter === "completed"
              ? "No completed tasks!"
              : "No tasks yet!"}
          </h3>
          <p>
            {filter === "active"
              ? "All your tasks are completed 🎉"
              : filter === "completed"
              ? "Complete some tasks to see them here"
              : "Add a task above to get started"}
          </p>
        </div>
      )}
    </section>
  );
}
