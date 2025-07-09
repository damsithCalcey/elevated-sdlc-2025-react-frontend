const ConfirmCompleteModal = ({ currentTask, onUpdateTask, onModalClose }) => {
  const handleCompleteToggle = () => {
    onUpdateTask({
      ...currentTask,
      completed: !currentTask.completed,
    });

    onModalClose();
  };

  return (
    <div className="modal" onClick={onModalClose}>
      <div
        className="modal-content confirm-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="confirm-icon complete-icon">
          <i className="fas fa-check"></i>
        </div>
        <h2>Are you sure that you want to complete this task?</h2>
        <p>
          Are you sure you want to mark this task as completed? You can undo
          this action later.
        </p>
        <div className="form-actions">
          <button className="btn-cancel" onClick={onModalClose}>
            Cancel
          </button>
          <button className="btn-success" onClick={handleCompleteToggle}>
            {currentTask.completed ? "Incomplete" : "Complete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCompleteModal;
