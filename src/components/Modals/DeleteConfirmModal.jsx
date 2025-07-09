const DeleteConfirmModal = ({ currentTaskId, onDeleteTask, onModalClose }) => {
  return (
    <div className="modal" onClick={onModalClose}>
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
          <button className="btn-cancel" onClick={onModalClose}>
            Cancel
          </button>
          <button
            className="btn-danger"
            onClick={() => {
              onDeleteTask(currentTaskId);
              onModalClose();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
