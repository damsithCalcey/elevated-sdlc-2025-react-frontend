import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(null); // 'create' | 'view' | 'edit' | 'confirm' | 'complete'
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);
  const [search, setSearch] = useState("");

  const toggleModal = (type = null, taskId = null) => {
    setModal(type);
    setCurrentTaskId(taskId);
  };

  const formatData = (data) => {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      dueDate: data.due_date,
      completed: data.done,
    };
  };

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/todos");
      const data = await response.json();

      const formattedData = data.map((task) => formatData(task));
      setTasks(formattedData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return;
    }
  };

  const searchTasks = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/todos?search=${searchTerm}`
      );
      const data = await response.json();

      const formattedData = data.map((task) => formatData(task));
      setTasks(formattedData);
    } catch (error) {
      console.error("Error searching tasks:", error);
      return;
    }
  };

  const getCompletedTasks = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/todos?done=true"
      );
      const data = await response.json();

      const formattedData = data.map((task) => formatData(task));
      setTasks(formattedData);
    } catch (error) {
      console.error("Error fetching completed tasks:", error);
      return;
    }
  };

  const setCompletedTasks = (status) => {
    if (status) {
      getCompletedTasks();
    } else {
      getTasks();
    }

    setShowCompleted(status);
  };

  const addTask = async (task) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: task.title,
          description: task.description,
          due_date: task.dueDate,
        }),
      });

      const data = await response.json();

      setTasks((prev) => [...prev, formatData(data)]);
    } catch (error) {
      console.error("Error adding task:", error);
      return;
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/todos/${updatedTask.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: updatedTask.title,
            description: updatedTask.description,
            due_date: updatedTask.dueDate,
            done: updatedTask.completed,
          }),
        }
      );
      const data = await response.json();

      setTasks((prev) =>
        prev.map((task) =>
          task.id === updatedTask.id ? formatData(data) : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
      return;
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:5000/api/v1/todos/${taskId}`, {
        method: "DELETE",
      });

      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
      return;
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        modal,
        currentTaskId,
        showCompleted,
        search,
        toggleModal,
        setSearch,
        setShowCompleted,
        getTasks,
        searchTasks,
        getCompletedTasks,
        setCompletedTasks,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
