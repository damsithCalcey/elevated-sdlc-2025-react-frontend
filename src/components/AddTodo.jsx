import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (trimmed) {
      onAdd(trimmed);
      setText("");
    }
  };

  return (
    <section className="add-todo-section">
      <div className="input-container">
        <input
          id="todoInput"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          className="add-btn"
          onClick={handleSubmit}
          disabled={!text.trim()}
        >
          <span>Add Task</span>
          <span className="btn-icon">+</span>
        </button>
      </div>
    </section>
  );
}
