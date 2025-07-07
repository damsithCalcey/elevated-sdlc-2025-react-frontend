import { useState, useEffect } from "react";
import { useTasks } from "../../context/TaskContext";

const EditTaskModal = () => {
  const { modal, toggleModal, tasks, currentTaskId, updateTask } = useTasks();
  const task = tasks.find((t) => t.id === currentTaskId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (task && modal === "edit") {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
    }
  }, [task, modal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...task, title, description, dueDate });
    toggleModal();
  };

  if (!task || modal !== "edit") return null;

  return (
    <div className="modal" onClick={() => toggleModal()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Edit Task</h2>
          <button
            className="delete-task-btn"
            onClick={() => toggleModal("confirm", task.id)}
          >
            <i className="fas fa-trash"></i> Delete Task
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            />
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <div className="date-input-wrapper">
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
              <i className="fas fa-calendar-alt date-icon"></i>
            </div>
          </div>
          <div className="form-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={() => toggleModal()}
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
