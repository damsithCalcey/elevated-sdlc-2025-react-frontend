import { useEffect, useState } from "react";

import Toolbar from "./Toolbar";
import CreateTaskModal from "../Modals/CreateTaskModal";
import ViewTaskModal from "../Modals/ViewTaskModal";
import EditTaskModal from "../Modals/EditTaskModal";
import DeleteConfirmModal from "../Modals/DeleteConfirmModal";
import ConfirmCompleteModal from "../Modals/ConfirmCompleteModal";
import { formatDate } from "../../utils/date";
import { formatTask } from "../../utils/task";

const TaskBoard = () => {
  const [modal, setModal] = useState(null); // 'create' | 'view' | 'edit' | 'delete' | 'complete'
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/todos");
      const data = await response.json();

      const formattedTask = data.map((task) => formatTask(task));
      setTasks(formattedTask);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return;
    }
  };

  const getCompletedTasks = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/todos?done=true"
      );
      const data = await response.json();

      const formattedTasks = data.map((task) => formatTask(task));
      setTasks(formattedTasks);
    } catch (error) {
      console.error("Error fetching completed tasks:", error);
      return;
    }
  };

  const searchTasks = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/todos?search=${searchTerm}`
      );
      const data = await response.json();

      const formattedTask = data.map((task) => formatTask(task));
      setTasks(formattedTask);
    } catch (error) {
      console.error("Error searching tasks:", error);
      return;
    }
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
      setTasks((prev) => [...prev, formatTask(data)]);
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
          task.id === updatedTask.id ? formatTask(data) : task
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

  useEffect(() => {
    if (showCompletedTasks) {
      getCompletedTasks();
    } else {
      getTasks();
    }
  }, [showCompletedTasks]);

  return (
    <>
      <Toolbar
        showCompletedTasks={showCompletedTasks}
        setShowCompletedTasks={setShowCompletedTasks}
        onSearchTasks={searchTasks}
        onModalOpen={() => setModal("create")}
      />
      <div className="task-board">
        {tasks.map((task) => {
          const { formatted, className } = formatDate(task.dueDate);
          return (
            <div
              key={task.id}
              className={`task-card ${task.completed ? "completed" : ""}`}
              onClick={() => {
                setCurrentTask(task);
                setModal("view");
              }}
            >
              <div className="task-header">
                <h3>{task.title}</h3>
                <div className={`task-date ${className}`}>{formatted}</div>
              </div>
              <p>{task.description || "No description"}</p>
            </div>
          );
        })}

        {modal === "create" ? (
          <CreateTaskModal
            onAddTask={addTask}
            onModalClose={() => setModal(null)}
          />
        ) : null}

        {modal === "view" ? (
          <ViewTaskModal
            currentTask={currentTask}
            onModalClose={() => setModal(null)}
            onEditModalOpen={() => setModal("edit")}
            onCompleteModalOpen={() => setModal("complete")}
          />
        ) : null}

        {modal === "edit" ? (
          <EditTaskModal
            currentTask={currentTask}
            onUpdateTask={updateTask}
            onModalClose={() => setModal(null)}
            onDeleteConfirmModalOpen={() => setModal("delete")}
          />
        ) : null}

        {modal === "delete" ? <DeleteConfirmModal
          currentTaskId={currentTask.id}
          onDeleteTask={deleteTask}
          onModalClose={() => setModal(null)}
        /> : null}

        {modal === "complete" ? <ConfirmCompleteModal
          currentTask={currentTask}
          onUpdateTask={updateTask}
          onModalClose={() => setModal(null)}
        /> : null}
      </div>
    </>
  );
};

export default TaskBoard;
