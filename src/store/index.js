import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { watchGetAll } from '../sagas/';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(watchGetAll);

export default store;
