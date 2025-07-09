import { useTasks } from "../../context/TaskContext";

const Toolbar = () => {
  const {
    showCompleted,
    setCompletedTasks,
    searchTasks,
    search,
    setSearch,
    toggleModal,
  } = useTasks();

  return (
    <div className="content-toolbar">
      <div className="view-options">
        <button
          className={`view-btn ${showCompleted ? "active" : ""}`}
          onClick={() => setCompletedTasks(!showCompleted)}
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
            onClick={() => searchTasks(search)}
          >
            Search
          </button>
        </div>
        <button
          className="create-task-btn btn-primary"
          onClick={() => toggleModal("create")}
        >
          Create Task
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
