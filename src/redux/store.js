// Import redux
import { createStore, combineReducers } from "redux";
// Import reducers
import disabled from "./reducers/disabled";
import squares from "./reducers/squares";
// Export store
export default createStore(combineReducers({
    disabled,
    squares
}));