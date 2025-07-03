export default function Filter({ filter, setFilter, count }) {
  const labels = {
    all: "All",
    active: "Active",
    completed: "Completed",
  };

  return (
    <section className="filter-section">
      <div className="filter-controls">
        {Object.keys(labels).map((key) => (
          <button
            key={key}
            className={`filter-btn ${filter === key ? "active" : ""}`}
            onClick={() => setFilter(key)}
          >
            {labels[key]}
          </button>
        ))}
      </div>
      <div className="stats">
        {count === 0
          ? "No tasks remaining"
          : `${count} task${count > 1 ? "s" : ""} remaining`}
      </div>
    </section>
  );
}
