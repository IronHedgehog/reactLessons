// reducer

const initialState = {
  tasks: [
    { id: 1, text: "do something", completed: true },
    { id: 2, text: "do something", completed: true },
    { id: 3, text: "do something", completed: false },
    { id: 4, text: "do something", completed: true },
    { id: 5, text: "do something", completed: false },
    { id: 6, text: "do something", completed: true },
  ],
  filters: {
    status: "active",
  },
};

export const rootReducer = (state = initialState, action) => {
  // Абсолютно кожен редюсер отримує всі екшени.
  // якщо цей редюсер не має відпрацьовувати екшен ви не маєте заносити його в switch і повертати у полі default стандартний стан який був до цього
  switch (action.type) {
    case "tasks/addTask": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case "tasks/deleteTask": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }
    case "tasks/toggleCompleted": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      };
    }
    default:
      return state;
  }
};
