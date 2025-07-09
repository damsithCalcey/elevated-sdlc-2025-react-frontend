export const formatTask = (data) => {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    dueDate: data.due_date,
    completed: data.done,
  };
};