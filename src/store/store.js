import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import counter from "./reducers/counter";

const rootReducer = combineReducers({
  counter,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
