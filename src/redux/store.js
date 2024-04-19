import { combineReducers, createStore } from "redux";

import todos from "./reducer";
import cartreducer from "./reducer";

const rootReducer = combineReducers({
  todos,cartreducer
});
export const Store = createStore(rootReducer);
// export default rootReducer;
