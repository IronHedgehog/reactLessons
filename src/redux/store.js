import { createStore } from "redux";

import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  tasks: [
    { id: 1, text: "do something", completed: false },
    { id: 2, text: "do something", completed: false },
    { id: 3, text: "do something", completed: false },
    { id: 4, text: "do something", completed: false },
    { id: 5, text: "do something", completed: false },
    { id: 6, text: "do something", completed: false },
  ],
  filters: {
    status: "All",
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};
// const enhancer = devToolsEnhancer(); - поєднання девтулзів редаксу з додатком
const enhancer = devToolsEnhancer();
// Створення загального стору в який ми передали загальний стейт та підключення девтулзів
export const store = createStore(rootReducer, enhancer);
