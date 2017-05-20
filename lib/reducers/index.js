'use strict';

exports.__esModule = true;

var _reduxResponsive = require('redux-responsive');

var _redux = require('redux');

var _responsiveDrawer = require('./responsiveDrawer');

var _responsiveDrawer2 = _interopRequireDefault(_responsiveDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  browser: _reduxResponsive.responsiveStateReducer,
  responsiveDrawer: _responsiveDrawer2.default
});

exports.default = reducers;
module.exports = exports['default'];