// Import redux
import { createStore, combineReducers, applyMiddleware } from "redux";
// Import redux tool extension
import { composeWithDevTools } from 'redux-devtools-extension';
// Import reducers
import squares from "./reducers/squares";
import xIsNext from "./reducers/xIsNext";
import winner from "./reducers/winner";
import disabled from "./reducers/disabled";
// Export store
export default createStore(combineReducers({
    squares,
    xIsNext,
    winner,
    disabled
}), composeWithDevTools());