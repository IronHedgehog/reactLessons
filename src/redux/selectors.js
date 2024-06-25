export const getTasks = (state) => state.tasks;
export const getFilterStatus = (state) => state.filter.status;

export const neededTask = (state) => {
  const tasks = getTasks(state);
  const filter = getFilterStatus(state);

  switch (filter) {
    case filter.active:
      return tasks.filter((task) => !task.completed);

    case filter.completed:
      return tasks.filter((task) => task.completed);

    default:
      return tasks;
  }
};

console.log(getFilterStatus);
