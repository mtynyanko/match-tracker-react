import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import matchReducer from "./reducers/matchReducer";
import watchfetchMatches from "./sagas/matchSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: matchReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(watchfetchMatches);

export type MyDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;