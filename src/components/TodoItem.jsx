export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div
        className={`todo-checkbox ${todo.completed ? "checked" : ""}`}
        onClick={() => onToggle(todo.id)}
      ></div>
      <span className="todo-text">{todo.text}</span>
      <div className="todo-actions">
        <button
          className="delete-btn"
          onClick={() => onDelete(todo.id)}
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
