import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// createApi,fetchBaseQuery
// axios.defaults.url = "asdasasd/tasks";

export const tasksAPI = createApi({
  reducerPath: "tasksAPI",
  // Шлях за замовчуванням куди будуть відправлятися усі запити
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6672fd0a6ca902ae11b2b1ad.mockapi.io/",
  }),
  tagTypes: ["tasks"],
  endpoints: (builder) => ({
    fetchTasks: builder.query({
      query: () => "tasks",
      providesTags: ["tasks"],
    }),

    deleteTasks: builder.mutation({
      query: (taskId) => ({
        url: `tasks/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),

    addTask: builder.mutation({
      query: (task) => ({
        url: "taks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useFetchTasksQuery,
  useDeleteTasksMutation,
  useAddTaskMutation,
} = tasksAPI;
