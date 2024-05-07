// Приймає будь-які дані окрім функції класи.
import { v4 as uuidv4 } from "uuid";
const action = {
  //type -  обовʼязковий
  type: "Action type",
  //payload -  не обовʼязковий
  payload: "Зберігається інформація яку відправив компонент",
};

// const addTask = {
//   type: "tasks/addTask",
//   payload: {
//     id: uuidv4(),
//     text: "Буде інфа яку користувач введе",
//     completed: false,
//   },
// };
// type - cкладається з двох частин
// 1) Це імʼя розділу або категорії де працює цей екшен -
// 2)Подія за яку відповідає екшен
// const deleteTask = {
//   type: "tasks/deleteTask",
//   payload: "TaskId",
// };
// const toggleCompleted = {
//   type: "tasks/toggleCompleted",
//   payload: "TaskId",
// };
// const statusFilter = {
//   type: "tasks/statusFilter",
//   payload: "FilterValue",
// };

export const addTask = (text) => {
  return {
    type: "tasks/addTask",
    payload: {
      id: uuidv4(),
      text,
      completed: false,
    },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

export const toggleCompleted = (taskId) => {
  return {
    type: "tasks/toggleCompleted",
    payload: taskId,
  };
};
export const statusFilter = (filterValue) => {
  return {
    type: "tasks/statusFilter",
    payload: filterValue,
  };
};
