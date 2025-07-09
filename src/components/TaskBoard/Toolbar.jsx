import { useState } from 'react';

const Toolbar = ({
  showCompletedTasks,
  setShowCompletedTasks,
  onSearchTasks,
  onModalOpen,
}) => {
  const [search, setSearch] = useState("");

  return (
    <div className="content-toolbar">
      <div className="view-options">
        <button
          className={`view-btn ${showCompletedTasks ? "active" : ""}`}
          onClick={() => setShowCompletedTasks(!showCompletedTasks)}
        >
          <i className="fas fa-check"></i> Show Completed
        </button>
      </div>
      <div className="toolbar-right">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search Tasks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="search-task-btn btn-cancel"
            onClick={() => onSearchTasks(search)}
          >
            Search
          </button>
        </div>
        <button className="create-task-btn btn-primary" onClick={onModalOpen}>
          Create Task
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
