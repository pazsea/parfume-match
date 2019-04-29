import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import messageReducer from './message';
import screenSizeReducer from './screenSize';
import fetchParfumeReducer from './parfumeReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  messageState: messageReducer,
  screenSizeState: screenSizeReducer,
  parfumesState: fetchParfumeReducer,
});

export default rootReducer;
