// reducer

import { createReducer } from "@reduxjs/toolkit";

const taskInitState = [{ id: 1, text: "asdasd", completed: false }];

// export const taskReducer = (tasks = taskInitState, action) => {
//   switch (action.type) {
//     case "tasks/addTask": {
//       return [...tasks, action.payload];
//     }

//     case "tasks/deleteTask": {
//       return tasks.filter((task) => task.id !== action.payload);
//     }
//     case "tasks/toggleCompleted": {
//       return tasks.map((task) => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });
//     }
//     default:
//       return tasks;
//   }
// };

export const taskReducer = createReducer(taskInitState, (builder) => {
  builder.addCase("tasks/addTask", (state, action) => {
    return [...state, action.payload];
  });

  builder.addCase("tasks/deleteTask", (state, action) => {
    return state.filter((task) => task.id !== action.payload);
  });

  builder.addCase("tasks/toggleCompleted", (state, action) => {
    return state.map((task) => {
      if (task.id !== action.payload) {
        return task;
      }
      return {
        ...task,
        completed: !task.completed,
      };
    });
  });
});

const filterInitState = {
  status: "all",
};

export const filterReducer = (state = filterInitState, action) => {
  return filterInitState;
};

// const initialState = { value: 0 };

// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "increment":
//       return { ...state, value: state.value + 1 };
//     case "decrement":
//       return { ...state, value: state.value - 1 };
//     case "incrementByAmount":
//       return { ...state, value: state.value + action.payload };
//     default:
//       return state;
//   }
// }
// import { createAction, createReducer } from "@reduxjs/toolkit";

// const increment = createAction("counter/increment");
// const decrement = createAction("counter/decrement");
// const incrementByAmount = createAction("counter/incrementByAmount");

// const initialState = { value: 0 };

// const counterReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => {
//       state.value++;
//     })
//     .addCase(decrement, (state, action) => {
//       state.value--;
//     })
//     .addCase(incrementByAmount, (state, action) => {
//       state.value += action.payload;
//     });
// });
