import { useState } from "react";

const CreateTaskModal = ({ onAddTask, onModalClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTask({ title, description, dueDate });
    onModalClose();
  };

  return (
    <div className="modal" onClick={onModalClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create a New Task</h2>
          <span className="close" onClick={onModalClose}>
            &times;
          </span>
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
            <button type="button" className="btn-cancel" onClick={onModalClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
