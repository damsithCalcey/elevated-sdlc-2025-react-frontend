import { useEffect } from "react";
import { useTasks } from "../../context/TaskContext";
import Toolbar from "./Toolbar";
import { formatDate } from "../../utils/date";

const TaskBoard = () => {
  const { tasks, getTasks, toggleModal } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Toolbar />
      <div className="task-board">
        {tasks.map((task) => {
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
