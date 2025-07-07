import { useTasks } from "../../context/TaskContext";

const ConfirmModal = () => {
  const { modal, toggleModal, deleteTask, currentTaskId } = useTasks();
  if (modal !== "confirm") return null;

  return (
    <div className="modal" onClick={() => toggleModal()}>
      <div
        className="modal-content confirm-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="confirm-icon">
          <i className="fas fa-trash-alt"></i>
        </div>
        <h2>Are you sure that you want to delete this task?</h2>
        <p>
          Once deleted, you will not be able to recover the task. Do you want to
          continue?
        </p>
        <div className="form-actions">
          <button className="btn-cancel" onClick={() => toggleModal()}>
            Cancel
          </button>
          <button
            className="btn-danger"
            onClick={() => {
              deleteTask(currentTaskId);
              toggleModal();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
