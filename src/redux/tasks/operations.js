import axios from "axios";
import { fetchingError, fetchingSuccess, fetchingTasks } from "./tasksSlice";
// https://666b20787013419182d25edb.mockapi.io/api/prefix/:endpoint

axios.defaults.baseURL =
  "https://666b20787013419182d25edb.mockapi.io/api/prefix/";

// https://666b20787013419182d25edb.mockapi.io/api/prefix/:endpoint

// middleware

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch(fetchingTasks());

    const { data } = await axios.get("tasks");

    dispatch(fetchingSuccess(data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
