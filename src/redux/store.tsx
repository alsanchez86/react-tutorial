// Import redux
import { createStore, combineReducers, applyMiddleware } from "redux";
// Import thunk
import thunk from 'redux-thunk';
// Import redux tool extension
import { composeWithDevTools } from 'redux-devtools-extension';
// Import reducers
import boardReducer from "./board";

// Export store
export default createStore(
    combineReducers({
        boardReducer
        // ... Others reducers if any
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
        // ... Others store enhancers if any
    )
);