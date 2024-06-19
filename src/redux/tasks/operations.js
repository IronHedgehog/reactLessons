import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// https://666b20787013419182d25edb.mockapi.io/api/prefix/:endpoint

axios.defaults.baseURL = "https://6672fd0a6ca902ae11b2b1ad.mockapi.io/";

// https://666b20787013419182d25edb.mockapi.io/api/prefix/:endpoint

// middleware

// export const fetchTasks = () => async (dispatch) => {
//   try {
//     dispatch(fetchingTasks());

//     const { data } = await axios.get("tasks");

//     dispatch(fetchingSuccess(data));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`tasks`);
      return thunkAPI.fulfillWithValue(data);
      // return data;
    } catch (error) {
      //getState() - отримання потоочного state
      console.log(thunkAPI.getState());
      //дозволяє обробити екшен якщо це необхидно
      console.log(thunkAPI.dispatch());
      // rejectWithValue - дозволяє викинути помилку
      return thunkAPI.rejectWithValue("Помилка обролена");
      // throw new Error("Помилка обролена");
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`tasks/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Видалення не вдалось");
    }
  }
);

export const addTask = createAsyncThunk("tasks/add", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post(`tasks`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Додавання не вдалось не вдалось");
  }
});
