import { useTasks } from "../../context/TaskContext";

const ViewTaskModal = () => {
  const { modal, toggleModal, tasks, currentTaskId } = useTasks();
  const task = tasks.find((t) => t.id === currentTaskId);
  if (!task || modal !== "view") return null;

  return (
    <div className="modal" onClick={() => toggleModal()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>View Task</h2>
          <button
            className="edit-task-btn"
            onClick={() => toggleModal("edit", task.id)}
          >
            <i className="fas fa-edit"></i> Edit Task
          </button>
        </div>
        <div className="modal-body">
          <div className="field-group">
            <label>Title</label>
            <div className="field-value">{task.title}</div>
          </div>
          <div className="field-group">
            <label>Description</label>
            <div className="field-value">
              {task.description || "No description"}
            </div>
          </div>
          <div className="field-group">
            <label>Due Date</label>
            <div className="field-value">{task.dueDate}</div>
          </div>
        </div>
        <div className="form-actions">
          <button className="btn-cancel" onClick={() => toggleModal()}>
            Cancel
          </button>
          <button
            className={`btn-${task.completed ? "cancel" : "success"}`}
            onClick={() => toggleModal("complete", task.id)}
          >
            {task.completed ? "Mark Incomplete" : "Mark Completed"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskModal;
