// Import redux
import { createStore, combineReducers } from "redux";
// Import reducers
import disabled from "./reducers/disabled";
// Export store
export default createStore(combineReducers({
    disabled
}));