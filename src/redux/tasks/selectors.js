import { createSelector } from "@reduxjs/toolkit";

// export const tasksSelector = (state) => state.tasks.tasks;
export const getIsLoading = (state) => state.tasks.isLoading;
export const getError = (state) => state.tasks.error;

export const tasksSelector = createSelector(
  [(state) => state.tasks.tasks],
  (tasks) => tasks
);
