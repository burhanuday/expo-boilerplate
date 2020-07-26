import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import Reactotron from "../../ReactotronConfig";

import counter from "./reducers/counter";

const rootReducer = combineReducers({
  counter,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk), Reactotron.createEnhancer()),
);

export default store;
