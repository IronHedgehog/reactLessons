import { createSelector } from "@reduxjs/toolkit";
import { filtersValue } from "./constants";

export const getTasks = (state) => state.tasks;
export const getFilterStatus = (state) => state.filter.status;

// {
//   switch (getFilterStatus(state)) {
//     case filtersValue.active:
//       return state.tasks.filter((task) => !task.completed);

//     case filtersValue.completed:
//       return state.tasks.filter((task) => task.completed);

//     default:
//       return state.tasks;
//   }
// }

export const getNeededTasks = createSelector(
  (state) => getTasks(state),
  (state) => getFilterStatus(state),
  (tasks) => {
    {
      switch (tasks) {
        case filtersValue.active:
          return tasks.filter((task) => !task.completed);

        case filtersValue.completed:
          return tasks.filter((task) => task.completed);

        default:
          return tasks;
      }
    }
  }
);

export const completedTasks = createSelector(
  // memoized
  (state) => state.tasks,
  (tasks) => tasks.filter((task) => task.completed)
);

export const notCompletedTasks = createSelector(
  (state) => state.tasks,
  (tasks) => tasks.filter((task) => !task.completed)
);
