import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import messageReducer from './message';
import screenSizeReducer from './screenSize';
import loadStatusReducer from './loadStatus';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  messageState: messageReducer,
  screenSizeState: screenSizeReducer,
  loadStatusState: loadStatusReducer,
});

export default rootReducer;
