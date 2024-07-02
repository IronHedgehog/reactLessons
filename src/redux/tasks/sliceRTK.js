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
  }),
});

export const { useFetchTasksQuery } = tasksAPI;
