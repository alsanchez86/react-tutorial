// Import redux
import { createStore, combineReducers } from "redux";
// Import reducers
import results from "./reducers/results";
import suggestions from "./reducers/suggestions";
import currentItem from "./reducers/currentItem";

const reducer = combineReducers({
    results,
    suggestions,
    currentItem
});
const store = createStore(reducer);

export default store;