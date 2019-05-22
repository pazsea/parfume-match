import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import messageReducer from './message';
import screenSizeReducer from './screenSize';
import loadStatusReducer from './loadStatus';
import bulkLoadReducer from './bulkLoad';
import sortParfumeReducer from './sortParfumes';
import wardrobeReducer from './wardrobe';
import topNotesReducer from './topNotes';
import setWardrobeReducer from './setWardrobes';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  messageState: messageReducer,
  screenSizeState: screenSizeReducer,
  loadStatusState: loadStatusReducer,
  sniphBulkDataState: bulkLoadReducer,
  sortedParfumesState: sortParfumeReducer,
  wardrobeState: wardrobeReducer,
  topNotesState: topNotesReducer,
  recommendedWardrobes: setWardrobeReducer,
});

export default rootReducer;
