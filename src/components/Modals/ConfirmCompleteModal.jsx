import { useTasks } from "../../context/TaskContext";

const ConfirmCompleteModal = () => {
  const { modal, tasks, toggleModal, updateTask, currentTaskId } = useTasks();
  const task = tasks.find((t) => t.id === currentTaskId);

  if (modal !== "complete") return null;

  return (
    <div className="modal" onClick={() => toggleModal()}>
      <div
        className="modal-content confirm-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="confirm-icon complete-icon">
          <i className="fas fa-check"></i>
        </div>
        <h2>Are you sure that you want to complete this task?</h2>
        <p>
          Are you sure you want to mark this task as completed? You cannot undo
          this action.
        </p>
        <div className="form-actions">
          <button className="btn-cancel" onClick={() => toggleModal()}>
            Cancel
          </button>
          <button
            className="btn-success"
            onClick={() => {
              updateTask({ ...task, completed: !task.completed });
              toggleModal();
            }}
          >
            { task.completed ? "Incomplete" : "Complete" }
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCompleteModal;
