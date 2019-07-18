// Import redux
import { createStore, combineReducers, applyMiddleware } from "redux";
// Import redux tool extension
import { composeWithDevTools } from 'redux-devtools-extension';
// Import reducers
import disabled from "./reducers/disabled";
import squares from "./reducers/squares";
// Export store
export default createStore(combineReducers({
    disabled,
    squares
}), composeWithDevTools());