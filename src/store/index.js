import { createStore, applyMiddleware } from "redux";
// import brandsReducer from "../reducers/brandsReducer";
import createSagaMiddleware from "redux-saga";
import { brandsWatcherSaga } from "../sagas";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(brandsWatcherSaga);

export default store;