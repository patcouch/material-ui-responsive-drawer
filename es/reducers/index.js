import { responsiveStateReducer } from 'redux-responsive';
import { combineReducers } from 'redux';
import responsiveDrawer from './responsiveDrawer';

var reducers = combineReducers({
  browser: responsiveStateReducer,
  responsiveDrawer: responsiveDrawer
});

export default reducers;