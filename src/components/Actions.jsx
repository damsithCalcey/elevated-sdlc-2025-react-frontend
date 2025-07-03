export default function Actions({ onClearCompleted, hasCompleted }) {
  return (
    <section className="actions-section">
      <button
        className="secondary-btn"
        onClick={onClearCompleted}
        disabled={!hasCompleted}
      >
        Clear Completed
      </button>
    </section>
  );
}
