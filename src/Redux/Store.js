// import { configureStore,combineReducers } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import { thunk } from "redux-thunk";
// import { Reducer } from "./Reducer";

// const rootreducer=combineReducers({user:Reducer});
// const Store=configureStore({reducer:rootreducer,middleware:[thunk,logger]})
// export default Store;




// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const guard = createStore(rootReducer, applyMiddleware(thunk));

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";  // Correctly import thunk as a named export
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({ user: Reducer });

const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger)
});

export default Store;
