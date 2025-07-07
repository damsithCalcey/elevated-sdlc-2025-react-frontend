import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Grocery shopping for the week.",
      description: "Complete the project report by summarizing key findings.",
      dueDate: "2025-07-01",
      completed: false,
    },
    {
      id: 2,
      title: "Read two chapters of the new novel.",
      description: "Schedule a brainstorming session to generate new ideas.",
      dueDate: "2025-07-02",
      completed: false,
    },
    {
      id: 3,
      title: "Finish the report for the marketing team.",
      description: "Prepare a presentation for the marketing team meeting.",
      dueDate: "2025-08-01",
      completed: false,
    },
    {
      id: 4,
      title: "Call Mom to catch up.",
      description:
        "Review the budget proposal and suggest any necessary adjustments.",
      dueDate: "2025-08-01",
      completed: false,
    },
  ]);

  const [modal, setModal] = useState(null); // 'create' | 'view' | 'edit' | 'confirm' | 'complete'
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);
  const [search, setSearch] = useState("");

  const toggleModal = (type = null, taskId = null) => {
    setModal(type);
    setCurrentTaskId(taskId);
  };

  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      { ...task, id: Date.now(), completed: false },
    ]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const toggleCompleted = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
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
        addTask,
        updateTask,
        deleteTask,
        toggleCompleted,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
