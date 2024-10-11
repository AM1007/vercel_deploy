import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { balanceReducer } from "./balance/reducer";
import { localeReducer } from "./locale/reducer";

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer());
