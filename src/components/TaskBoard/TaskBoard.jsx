import { useEffect } from "react";
import { useTasks } from "../../context/TaskContext";
import Toolbar from "./Toolbar";

const TaskBoard = () => {
  const { tasks, getTasks, toggleModal, showCompleted, search } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    const matchSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());
    return showCompleted ? matchSearch : matchSearch && !task.completed;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const taskDate = new Date(date);
    taskDate.setHours(0, 0, 0, 0);

    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formatted = date.toLocaleDateString("en-GB", options);
    const className = taskDate < today ? "overdue" : "upcoming";
    return { formatted, className };
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Toolbar />
      <div className="task-board">
        {filteredTasks.map((task) => {
          const { formatted, className } = formatDate(task.dueDate);
          return (
            <div
              className={`task-card ${task.completed ? "completed" : ""}`}
              key={task.id}
              onClick={() => toggleModal("view", task.id)}
            >
              <div className="task-header">
                <h3>{task.title}</h3>
                <div className={`task-date ${className}`}>{formatted}</div>
              </div>
              <p>{task.description || "No description"}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TaskBoard;
