import { createStore } from "redux";

import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer(); - поєднання девтулзів редаксу з додатком
const enhancer = devToolsEnhancer();
// Створення загального стору в який ми передали загальний стейт та підключення девтулзів
export const store = createStore(rootReducer, enhancer);
