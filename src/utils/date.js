export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const taskDate = new Date(date);
  taskDate.setHours(0, 0, 0, 0);

  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formatted = date.toLocaleDateString("en-GB", options);
  const className = taskDate < today ? "overdue" : "upcoming";
  return { formatted, className };
};