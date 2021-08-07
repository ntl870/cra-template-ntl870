import { combineReducers, createStore } from "redux";
import reducer from "./reducers/reducer";
const rootReducer = combineReducers({
  reducer,
});

export default createStore(rootReducer);
