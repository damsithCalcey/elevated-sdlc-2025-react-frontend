const ViewTaskModal = ({
  currentTask,
  onModalClose,
  onEditModalOpen,
  onCompleteModalOpen,
}) => {
  return (
    <div className="modal" onClick={onModalClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>View Task</h2>
          <button className="edit-task-btn" onClick={onEditModalOpen}>
            <i className="fas fa-edit"></i> Edit Task
          </button>
        </div>
        <div className="modal-body">
          <div className="field-group">
            <label>Title</label>
            <div className="field-value">{currentTask.title}</div>
          </div>
          <div className="field-group">
            <label>Description</label>
            <div className="field-value">
              {currentTask.description || "No description"}
            </div>
          </div>
          <div className="field-group">
            <label>Due Date</label>
            <div className="field-value">{currentTask.dueDate}</div>
          </div>
        </div>
        <div className="form-actions">
          <button className="btn-cancel" onClick={onModalClose}>
            Cancel
          </button>
          <button
            className={`btn-${currentTask.completed ? "cancel" : "success"}`}
            onClick={onCompleteModalOpen}
          >
            {currentTask.completed ? "Mark Incomplete" : "Mark Completed"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskModal;
