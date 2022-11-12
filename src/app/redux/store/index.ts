import { createStoreHook } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducers from "../reducers";

const middleware = [thunk as ThunkMiddleware];
const enhanceCompose = composeWithDevTools({});
const store: Store<AppState, any> = createStore(
  rootReducers,
  enhanceCompose(applyMiddleware(...middleware))
);

export type AppState = ReturnType<typeof rootReducers>;
export default store;
