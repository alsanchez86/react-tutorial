// Import redux
import { createStore, combineReducers } from "redux";
// Import redux tool extension
import { composeWithDevTools } from 'redux-devtools-extension';
// Import reducers
import boardReducer from "./board";

// Export store
export default createStore(combineReducers({
    boardReducer
    // ...
}), composeWithDevTools());