import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import Actions from "./components/Actions";

const getStoredTodos = () => {
  try {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const savedNextId = parseInt(localStorage.getItem("nextId")) || 1;
    return { savedTodos, savedNextId };
  } catch {
    return { savedTodos: [], savedNextId: 1 };
  }
};

export default function App() {
  const { savedTodos, savedNextId } = getStoredTodos();

  const [todos, setTodos] = useState(savedTodos);
  const [nextId, setNextId] = useState(savedNextId);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("nextId", nextId.toString());
  }, [todos, nextId]);

  const addTodo = (text) => {
    const newTodo = {
      id: nextId,
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos([newTodo, ...todos]);
    setNextId(nextId + 1);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const newList = todos.filter((t) => t.id !== id);
    setTodos(newList);
  };

  const clearCompleted = () => {
    const newList = todos.filter((t) => !t.completed);
    setTodos(newList);
  };

  const filteredTodos = todos.filter((todo) =>
    filter === "active"
      ? !todo.completed
      : filter === "completed"
      ? todo.completed
      : true
  );

  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="container">
      <Header />
      <main>
        <AddTodo onAdd={addTodo} />
        <Filter filter={filter} setFilter={setFilter} count={activeCount} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          filter={filter}
        />
        <Actions
          onClearCompleted={clearCompleted}
          hasCompleted={todos.some((t) => t.completed)}
        />
      </main>
    </div>
  );
}
