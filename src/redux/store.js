// Import redux
import { createStore, combineReducers } from "redux";
// Import redux tool extension
import { composeWithDevTools } from 'redux-devtools-extension';
// Import reducers
import board from "./reducers/board";
import xIsNext from "./reducers/xIsNext";
import disabled from "./reducers/disabled";
// Export store
export default createStore(combineReducers({
    board,
    xIsNext,
    disabled
}), composeWithDevTools());